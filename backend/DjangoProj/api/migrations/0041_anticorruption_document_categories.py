from django.db import migrations, models
import django.db.models.deletion


CATEGORY_SEED = [
    (
        'normative',
        'Нормативные акты',
        'Нормативные, правовые и иные акты в сфере противодействия коррупции',
        1,
    ),
    (
        'expertise',
        'Экспертиза',
        'Антикоррупционная экспертиза',
        2,
    ),
    (
        'methods',
        'Методические материалы',
        'Методические материалы',
        3,
    ),
    (
        'forms',
        'Формы документов',
        'Формы документов, связанные с противодействием коррупции, для заполнения',
        4,
    ),
    (
        'commission',
        'Комиссия',
        'Комиссия по соблюдению требований к служебному поведению и урегулированию конфликта интересов',
        5,
    ),
]

LEGACY_CATEGORY_MAP = {title: slug for slug, _tab, title, _order in CATEGORY_SEED}


def seed_categories_and_migrate_documents(apps, schema_editor):
    Category = apps.get_model('api', 'AntiCorruptionDocumentCategory')
    Document = apps.get_model('api', 'AntiCorruptionDocument')

    categories_by_slug = {}
    for slug, tab_label, title, order in CATEGORY_SEED:
        categories_by_slug[slug] = Category.objects.create(
            slug=slug,
            tab_label=tab_label,
            title=title,
            order=order,
        )

    default_category = categories_by_slug['normative']

    for document in Document.objects.all():
        legacy_category = document.category_legacy
        slug = LEGACY_CATEGORY_MAP.get(legacy_category)
        document.category = categories_by_slug.get(slug, default_category)
        document.save(update_fields=['category'])


def unseed_categories(apps, schema_editor):
    Category = apps.get_model('api', 'AntiCorruptionDocumentCategory')
    Category.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0040_update_practice_steps_first_item'),
    ]

    operations = [
        migrations.CreateModel(
            name='AntiCorruptionDocumentCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=50, unique=True, verbose_name='Код вкладки')),
                ('tab_label', models.CharField(max_length=120, verbose_name='Название вкладки')),
                ('title', models.CharField(max_length=255, verbose_name='Полное название категории')),
                ('order', models.PositiveSmallIntegerField(default=0, verbose_name='Порядок')),
            ],
            options={
                'verbose_name': 'Категория антикоррупционных документов',
                'verbose_name_plural': 'Категории антикоррупционных документов',
                'ordering': ['order', 'tab_label'],
            },
        ),
        migrations.RenameField(
            model_name='anticorruptiondocument',
            old_name='category',
            new_name='category_legacy',
        ),
        migrations.AddField(
            model_name='anticorruptiondocument',
            name='category',
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                related_name='documents',
                to='api.anticorruptiondocumentcategory',
                verbose_name='Категория',
            ),
        ),
        migrations.RunPython(seed_categories_and_migrate_documents, unseed_categories),
        migrations.RemoveField(
            model_name='anticorruptiondocument',
            name='category_legacy',
        ),
        migrations.AlterField(
            model_name='anticorruptiondocument',
            name='category',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name='documents',
                to='api.anticorruptiondocumentcategory',
                verbose_name='Категория',
            ),
        ),
    ]
