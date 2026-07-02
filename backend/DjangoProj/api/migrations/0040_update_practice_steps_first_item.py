from django.db import migrations

NEW_FIRST_STEP = (
    '1. Определитесь, в каком отраслевом функциональном органе вы хотите проходить практику. '
    'Со структурой администрации можно ознакомиться в разделе [«О нас»](/about#admin-structure).'
)

OLD_DEFAULT = (
    '1. Ознакомьтесь с перечнем учебных заведений, с которыми заключены соглашения.\n'
    '2. Согласуйте прохождение практики с учебным заведением.\n'
    '3. Заполните и отправьте заявку на практику через форму на этой странице.\n'
    '4. Дождитесь ответа специалиста управления муниципальной службы, кадров и наград.'
)

NEW_DEFAULT = (
    f'{NEW_FIRST_STEP}\n'
    '2. Согласуйте прохождение практики с учебным заведением.\n'
    '3. Заполните и отправьте заявку на практику через форму на этой странице.\n'
    '4. Дождитесь ответа специалиста управления муниципальной службы, кадров и наград.'
)


def update_practice_steps(apps, schema_editor):
    YouthInfo = apps.get_model('api', 'YouthInfo')
    for obj in YouthInfo.objects.all():
        steps = obj.practice_steps or ''
        lines = [line.strip() for line in steps.splitlines() if line.strip()]
        if not lines:
            obj.practice_steps = NEW_DEFAULT
            obj.save(update_fields=['practice_steps'])
            continue

        first_line = lines[0]
        if first_line.startswith('1. Ознакомьтесь с перечнем учебных заведений'):
            lines[0] = NEW_FIRST_STEP
            obj.practice_steps = '\n'.join(lines)
            obj.save(update_fields=['practice_steps'])
        elif steps.strip() == OLD_DEFAULT.strip():
            obj.practice_steps = NEW_DEFAULT
            obj.save(update_fields=['practice_steps'])


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0039_rename_preferred_department_verbose_name'),
    ]

    operations = [
        migrations.RunPython(update_practice_steps, migrations.RunPython.noop),
    ]
