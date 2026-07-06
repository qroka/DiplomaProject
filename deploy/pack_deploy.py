"""Pack deployment archives for hr.admsr.ru.

Scenario A (default): code + wheels + frontend only.
Scenario B: also pack deploy_db_sqlite.zip and deploy_media.zip.

Usage:
  python deploy/pack_deploy.py          # scenario A
  python deploy/pack_deploy.py --with-data   # scenario B
"""
import argparse
import os
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEPLOY = ROOT / "deploy"
BACKEND_DIR = ROOT / "backend" / "DjangoProj"

BACKEND_EXCLUDE_NAMES = {"db.sqlite3", "media", "data.json", "__pycache__", "venv", "staticfiles"}


def zip_dir(src_dir: Path, dest_zip: Path, exclude_names: set, arc_prefix: str = "") -> int:
    src_dir = src_dir.resolve()
    count = 0
    with zipfile.ZipFile(dest_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(src_dir):
            dirs[:] = [d for d in dirs if d not in exclude_names]
            for f in files:
                if f in exclude_names:
                    continue
                full = os.path.join(root, f)
                rel = os.path.relpath(full, src_dir)
                arcname = (arc_prefix + rel).replace(os.sep, "/")
                zf.write(full, arcname)
                count += 1
    return count


def assert_no_backslashes(zip_path: Path) -> None:
    with zipfile.ZipFile(zip_path) as zf:
        bad = [n for n in zf.namelist() if "\\" in n]
        if bad:
            raise AssertionError(f"backslash paths found in {zip_path.name}: {bad[:5]}")


def pack_db_sqlite(dest_zip: Path) -> None:
    db_path = BACKEND_DIR / "db.sqlite3"
    if not db_path.exists():
        raise FileNotFoundError(f"Missing {db_path}")
    with zipfile.ZipFile(dest_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.write(db_path, "db.sqlite3")
    assert_no_backslashes(dest_zip)
    print(f"OK {dest_zip.name}: 1 file, {dest_zip.stat().st_size / 1024 / 1024:.1f} MB")


def pack_media(dest_zip: Path) -> None:
    media_dir = BACKEND_DIR / "media"
    if not media_dir.is_dir():
        raise FileNotFoundError(f"Missing {media_dir}")
    base = BACKEND_DIR.resolve()
    count = 0
    with zipfile.ZipFile(dest_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, _dirs, files in os.walk(media_dir):
            for f in files:
                full = os.path.join(root, f)
                rel = os.path.relpath(full, base)
                zf.write(full, rel.replace(os.sep, "/"))
                count += 1
    assert_no_backslashes(dest_zip)
    print(f"OK {dest_zip.name}: {count} files, {dest_zip.stat().st_size / 1024 / 1024:.1f} MB")


def main() -> None:
    parser = argparse.ArgumentParser(description="Pack hr.admsr.ru deploy archives")
    parser.add_argument(
        "--with-data",
        action="store_true",
        help="Include deploy_db_sqlite.zip and deploy_media.zip (scenario B)",
    )
    args = parser.parse_args()

    DEPLOY.mkdir(exist_ok=True)

    # 1. Backend code
    backend_zip = DEPLOY / "deploy_backend_code.zip"
    n = zip_dir(
        BACKEND_DIR,
        backend_zip,
        BACKEND_EXCLUDE_NAMES,
    )
    assert_no_backslashes(backend_zip)
    print(f"OK {backend_zip.name}: {n} files, {backend_zip.stat().st_size / 1024 / 1024:.1f} MB")

    # 2. Backend wheels (folder as top-level element)
    wheels_zip = DEPLOY / "deploy_backend_wheels.zip"
    wheels_src = ROOT / "backend" / "wheels_linux_cp312"
    with zipfile.ZipFile(wheels_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        wcount = 0
        for root, dirs, files in os.walk(wheels_src):
            for f in files:
                full = os.path.join(root, f)
                rel = os.path.relpath(full, wheels_src.parent)
                arcname = rel.replace(os.sep, "/")
                zf.write(full, arcname)
                wcount += 1
    assert_no_backslashes(wheels_zip)
    print(f"OK {wheels_zip.name}: {wcount} files, {wheels_zip.stat().st_size / 1024 / 1024:.1f} MB")

    # 3. Frontend static (.output/public contents at archive root)
    frontend_zip = DEPLOY / "deploy_frontend_static.zip"
    public_dir = ROOT / "frontend" / ".output" / "public"
    if not (public_dir / "200.html").exists():
        raise FileNotFoundError(f"Missing 200.html in {public_dir}")
    fcount = zip_dir(public_dir, frontend_zip, set())
    assert_no_backslashes(frontend_zip)
    print(f"OK {frontend_zip.name}: {fcount} files, {frontend_zip.stat().st_size / 1024 / 1024:.1f} MB")

    if args.with_data:
        pack_db_sqlite(DEPLOY / "deploy_db_sqlite.zip")
        pack_media(DEPLOY / "deploy_media.zip")

    print("\nAll archives ready in deploy/")
    for z in sorted(DEPLOY.glob("deploy_*.zip")):
        print(f"  {z.name}")


if __name__ == "__main__":
    main()
