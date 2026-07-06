MODERATOR_GROUP_NAME = 'Модератор'


def sync_moderator_group_permissions(using='default'):
    from django.contrib.auth.models import Group, Permission

    group, _ = Group.objects.using(using).get_or_create(name=MODERATOR_GROUP_NAME)
    permissions = Permission.objects.using(using).filter(content_type__app_label='api')
    group.permissions.set(permissions)
    return group, permissions.count()
