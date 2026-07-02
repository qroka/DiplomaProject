from django.db import migrations, models

HR_MANAGEMENT_UNIT = 'Управление муниципальной службы, кадров и наград'


def seed_management_head(apps, schema_editor):
    Branch = apps.get_model('api', 'Branch')
    StaffMember = apps.get_model('api', 'StaffMember')

    branch, _ = Branch.objects.get_or_create(
        name=HR_MANAGEMENT_UNIT,
        defaults={'address': ''},
    )

    staff, created = StaffMember.objects.get_or_create(
        surname='Марданова',
        name='Кристина',
        patronym='Олеговна',
        defaults={
            'role': 'Начальник управления',
            'phone': '8 (3462) 52-65-16, внутр. 1516',
            'cabinet_number': '411',
            'branch': branch,
            'is_active': True,
            'show_on_contacts': True,
            'is_management_head': True,
            'order': 0,
        },
    )

    if not created:
        staff.role = 'Начальник управления'
        staff.phone = '8 (3462) 52-65-16, внутр. 1516'
        staff.cabinet_number = '411'
        staff.branch = branch
        staff.is_active = True
        staff.show_on_contacts = True
        staff.is_management_head = True
        staff.save()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0032_staffmember_show_on_contacts'),
    ]

    operations = [
        migrations.AddField(
            model_name='staffmember',
            name='is_management_head',
            field=models.BooleanField(
                default=False,
                verbose_name='Начальник управления (блок на странице контактов)',
            ),
        ),
        migrations.RunPython(seed_management_head, migrations.RunPython.noop),
    ]
