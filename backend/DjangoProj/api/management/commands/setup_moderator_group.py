from django.core.management.base import BaseCommand

from api.roles import MODERATOR_GROUP_NAME, sync_moderator_group_permissions


class Command(BaseCommand):
    help = f'Создаёт или обновляет группу «{MODERATOR_GROUP_NAME}» со всеми правами на контент портала.'

    def handle(self, *args, **options):
        group, permissions_count = sync_moderator_group_permissions()
        self.stdout.write(
            self.style.SUCCESS(
                f'Группа «{group.name}» обновлена: назначено {permissions_count} прав на модели api.',
            ),
        )
