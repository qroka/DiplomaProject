from django.contrib.admin import AdminSite
from django.contrib.admin.apps import AdminConfig


class CustomAdminSite(AdminSite):
    def get_app_list(self, request):
        app_list = super().get_app_list(request)

        api_app = next((a for a in app_list if a['app_label'] == 'api'), None)
        if not api_app:
            return app_list

        all_models = api_app['models']

        groups = {
            'Вакансии': {
                'app_label': 'vacancies_group',
                'models': ['Vacancy', 'JobApplication', 'WorkSchedule',
                           'RequiredExperience', 'JobType', 'WorkingHours'],
            },
            'Сотрудники': {
                'app_label': 'staff_group',
                'models': ['StaffMember', 'Branch'],
            },
            'Тендеры': {
                'app_label': 'tenders_group',
                'models': ['Tender'],
            },
            'Антикоррупция': {
                'app_label': 'anticorruption_group',
                'models': ['AntiCorruptionDocument', 'CorruptionReport'],
            },
        }

        new_app_list = []
        for name, config in groups.items():
            group_models = [
                m for m in all_models
                if m['object_name'] in config['models']
            ]
            if group_models:
                new_app_list.append({
                    'name': name,
                    'app_label': config['app_label'],
                    'models': group_models,
                })

        return new_app_list


custom_admin_site = CustomAdminSite(name='custom_admin')
