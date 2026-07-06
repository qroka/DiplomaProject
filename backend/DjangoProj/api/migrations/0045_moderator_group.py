from django.db import migrations

from api.roles import MODERATOR_GROUP_NAME


def create_moderator_group(apps, schema_editor):
    Group = apps.get_model('auth', 'Group')
    Permission = apps.get_model('auth', 'Permission')

    group, _ = Group.objects.get_or_create(name=MODERATOR_GROUP_NAME)
    permissions = Permission.objects.filter(content_type__app_label='api')
    group.permissions.set(permissions)


def remove_moderator_group(apps, schema_editor):
    Group = apps.get_model('auth', 'Group')
    Group.objects.filter(name=MODERATOR_GROUP_NAME).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0044_vacancydocument'),
    ]

    operations = [
        migrations.RunPython(create_moderator_group, remove_moderator_group),
    ]
