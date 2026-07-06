from django.contrib import admin
from django.contrib.auth.admin import GroupAdmin as DjangoGroupAdmin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.contrib.auth.models import Group, User

from .roles import MODERATOR_GROUP_NAME


class SuperuserOnlyAdminMixin:
    def _allow_access(self, request):
        return request.user.is_active and request.user.is_superuser

    def has_module_permission(self, request):
        return self._allow_access(request)

    def has_view_permission(self, request, obj=None):
        return self._allow_access(request)

    def has_add_permission(self, request):
        return self._allow_access(request)

    def has_change_permission(self, request, obj=None):
        return self._allow_access(request)

    def has_delete_permission(self, request, obj=None):
        return self._allow_access(request)


class PortalUserAdmin(SuperuserOnlyAdminMixin, DjangoUserAdmin):
    list_display = ['username', 'email', 'first_name', 'last_name', 'is_staff', 'is_active', 'role_list']
    list_filter = ['is_staff', 'is_active', 'groups']
    search_fields = ['username', 'first_name', 'last_name', 'email']
    filter_horizontal = ['groups', 'user_permissions']
    ordering = ['username']

    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Персональные данные', {'fields': ('first_name', 'last_name', 'email')}),
        (
            'Права доступа',
            {
                'fields': ('is_active', 'is_staff', 'groups'),
                'description': (
                    'Для модератора включите «Статус персонала» и назначьте группу '
                    f'«{MODERATOR_GROUP_NAME}». Суперпользователь нужен только администраторам.'
                ),
            },
        ),
        ('Расширенные права', {'fields': ('user_permissions',), 'classes': ('collapse',)}),
        ('Суперпользователь', {'fields': ('is_superuser',)}),
    )
    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': ('username', 'password1', 'password2', 'email', 'first_name', 'last_name', 'is_staff', 'groups'),
            },
        ),
    )

    @admin.display(description='Роли')
    def role_list(self, obj):
        return ', '.join(group.name for group in obj.groups.all()) or '—'

    def get_readonly_fields(self, request, obj=None):
        readonly_fields = list(super().get_readonly_fields(request, obj))
        if not request.user.is_superuser:
            readonly_fields.append('is_superuser')
        return readonly_fields

    def save_model(self, request, obj, form, change):
        if not request.user.is_superuser:
            obj.is_superuser = False
        super().save_model(request, obj, form, change)


class PortalGroupAdmin(SuperuserOnlyAdminMixin, DjangoGroupAdmin):
    list_display = ['name']
    search_fields = ['name']
    filter_horizontal = ['permissions']

    def has_change_permission(self, request, obj=None):
        if obj and obj.name == MODERATOR_GROUP_NAME:
            return False
        return super().has_change_permission(request, obj)

    def has_delete_permission(self, request, obj=None):
        if obj and obj.name == MODERATOR_GROUP_NAME:
            return False
        return super().has_delete_permission(request, obj)


def register_auth_models(admin_site):
    admin_site.register(User, PortalUserAdmin)
    admin_site.register(Group, PortalGroupAdmin)
