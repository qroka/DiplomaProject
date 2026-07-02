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
            'Главная': {
                'app_label': 'main_page_group',
                'models': ['NewsPost'],
            },
            'Вакансии': {
                'app_label': 'vacancies_group',
                'models': ['Vacancy', 'JobApplication', 'VacancySubscription', 'WorkSchedule',
                           'RequiredExperience', 'JobType', 'WorkingHours'],
            },
            'Сотрудники': {
                'app_label': 'staff_group',
                'models': ['ContactStaffMember', 'Branch'],
            },
            'Доска почёта': {
                'app_label': 'honorboard_group',
                'models': ['HonorBoardStaffMember'],
            },
            'Структура администрации': {
                'app_label': 'admin_structure_group',
                'models': ['Department', 'Deputy'],
            },
            'Кадровый резерв': {
                'app_label': 'staff_reserve_group',
                'models': ['StaffReserveInfo', 'StaffReservePosition'],
            },
            'Молодёжь': {
                'app_label': 'youth_group',
                'models': ['YouthInfo', 'PracticeApplication'],
            },
            'Профразвитие': {
                'app_label': 'profdev_group',
                'models': ['TrainingEvent', 'TrainingFeedback'],
            },
            'Конкурсы': {
                'app_label': 'tenders_group',
                'models': ['Tender', 'Competition', 'CompetitionResult'],
            },
            'Антикоррупция': {
                'app_label': 'anticorruption_group',
                'models': ['AntiCorruptionInfo', 'AntiCorruptionDocumentCategory', 'AntiCorruptionDocument', 'CorruptionReport'],
            },
            'Отделы': {
                'app_label': 'branches_group',
                'models': ['BranchesGlobal'],
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
