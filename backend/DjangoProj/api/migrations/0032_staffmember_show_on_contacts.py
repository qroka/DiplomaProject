from django.db import migrations, models


def enable_contacts_for_active_staff(apps, schema_editor):
    StaffMember = apps.get_model('api', 'StaffMember')
    StaffMember.objects.filter(is_active=True, show_on_reserve=False).update(show_on_contacts=True)


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0031_department_deputy'),
    ]

    operations = [
        migrations.AddField(
            model_name='staffmember',
            name='show_on_contacts',
            field=models.BooleanField(default=False, verbose_name='Показывать в контактах'),
        ),
        migrations.RunPython(enable_contacts_for_active_staff, migrations.RunPython.noop),
    ]
