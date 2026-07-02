from django.db.models import Q
from django.contrib import admin
from .forms import DepartmentAdminForm, VacancyAdminForm
from .models import (
    Tender, ContactStaffMember, HonorBoardStaffMember, Vacancy, JobApplication, Branch,
    WorkSchedule, RequiredExperience, JobType, WorkingHours, AntiCorruptionDocument,
    AntiCorruptionDocumentCategory, AntiCorruptionInfo, CorruptionReport, BranchesGlobal, Feedback, VacancySubscription,
    Competition, CompetitionResult, StaffReserveInfo, StaffReservePosition, YouthInfo,
    PracticeApplication, TrainingEvent, TrainingFeedback, NewsPost, Department, Deputy,
    DeputyDepartment,
)
from .adminsite import custom_admin_site


STAFF_MEMBER_FORM_FIELDS = [
    'surname', 'name', 'patronym', 'role', 'branch',
    'phone', 'email', 'cabinet_number', 'description', 'image',
    'order', 'is_active', 'is_management_head', 'show_on_reserve',
]


class BranchAdmin(admin.ModelAdmin):
    list_display = ['name', 'address']
    search_fields = ['name', 'address']


class TenderAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'is_active', 'show_on_main_page', 'created_at']
    list_filter = ['category', 'is_active']
    search_fields = ['name']
    list_editable = ['is_active', 'show_on_main_page']


class ContactStaffMemberAdmin(admin.ModelAdmin):
    list_display = [
        'surname', 'name', 'role', 'branch', 'cabinet_number', 'phone',
        'order', 'is_active', 'is_management_head', 'show_on_reserve',
    ]
    list_filter = ['is_active', 'is_management_head', 'show_on_reserve', 'branch']
    search_fields = ['name', 'surname', 'patronym', 'role', 'phone', 'email']
    list_editable = ['order', 'is_active', 'is_management_head', 'show_on_reserve']
    fields = STAFF_MEMBER_FORM_FIELDS

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.filter(Q(show_on_contacts=True) | Q(is_management_head=True))

    def save_model(self, request, obj, form, change):
        obj.show_on_contacts = True
        if not change:
            obj.show_on_honorboard = False
        super().save_model(request, obj, form, change)


class HonorBoardStaffMemberAdmin(admin.ModelAdmin):
    list_display = [
        'surname', 'name', 'role', 'branch', 'order', 'is_active', 'show_on_reserve',
    ]
    list_filter = ['is_active', 'show_on_reserve', 'branch']
    search_fields = ['name', 'surname', 'patronym', 'role', 'description']
    list_editable = ['order', 'is_active', 'show_on_reserve']
    fields = STAFF_MEMBER_FORM_FIELDS

    def get_queryset(self, request):
        return super().get_queryset(request).filter(show_on_honorboard=True)

    def save_model(self, request, obj, form, change):
        obj.show_on_honorboard = True
        if not change:
            obj.show_on_contacts = False
        super().save_model(request, obj, form, change)


class VacancyAdmin(admin.ModelAdmin):
    form = VacancyAdminForm
    list_display = ['title', 'branch', 'location', 'salary', 'work_schedule', 'required_experience', 'job_type', 'is_new', 'is_active', 'created_at']
    list_filter = ['is_active', 'is_new', 'employment_type', 'work_schedule', 'required_experience', 'job_type']
    search_fields = ['title', 'branch']
    list_editable = ['is_active', 'is_new']
    fieldsets = [
        ('Основное', {'fields': ['title', 'branch', 'location', 'salary']}),
        ('Детали', {'fields': ['employment_type', 'experience', 'work_schedule', 'required_experience', 'job_type', 'working_hours', 'is_new', 'is_active']}),
        ('Описание и навыки', {'fields': ['description', 'skills']}),
    ]


class WorkScheduleAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class RequiredExperienceAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class JobTypeAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class WorkingHoursAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ['last_name', 'first_name', 'vacancy_title', 'email', 'phone', 'created_at']
    list_filter = ['vacancy_title', 'created_at', 'marital_status']
    search_fields = ['last_name', 'first_name', 'email', 'phone']
    readonly_fields = ['consent_false_info', 'consent_verification', 'consent_personal_data', 'consent_resume_forwarding']


class AntiCorruptionDocumentCategoryAdmin(admin.ModelAdmin):
    list_display = ['tab_label', 'slug', 'order']
    list_editable = ['order']
    search_fields = ['tab_label', 'slug', 'title']
    ordering = ['order', 'tab_label']


class AntiCorruptionDocumentAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'created_at']
    list_filter = ['category']
    search_fields = ['name']
    ordering = ['category__order', '-created_at']
    autocomplete_fields = ['category']


class AntiCorruptionInfoAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'updated_at']
    fields = ['intro', 'work_schedule', 'address', 'officials', 'esia_feedback_url']


class CorruptionReportAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'created_at']
    list_filter = ['created_at']
    search_fields = ['full_name', 'email']


class BranchesGlobalAdmin(admin.ModelAdmin):
    list_display = ['name', 'link']
    search_fields = ['name']


class VacancySubscriptionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'branch_display', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'email', 'branch']
    list_editable = ['is_active']
    readonly_fields = ['created_at']
    fields = ['name', 'email', 'branch', 'is_active', 'created_at']

    @admin.display(description='Отраслевой функциональный орган')
    def branch_display(self, obj):
        return obj.branch.strip() if obj.branch else 'Любой ОФО / не имеет значения'


class CompetitionAdmin(admin.ModelAdmin):
    list_display = ['title', 'competition_type', 'date_start', 'date_end', 'is_active', 'created_at']
    list_filter = ['is_active', 'competition_type', 'created_at']
    search_fields = ['title', 'content']
    list_editable = ['is_active']


class CompetitionResultAdmin(admin.ModelAdmin):
    list_display = ['title', 'competition_type', 'completed_at', 'created_at']
    list_editable = ['competition_type']
    list_filter = ['competition_type', 'completed_at', 'created_at']
    search_fields = ['title']
    fields = ['title', 'competition_type', 'decree_conduct', 'decree_results', 'completed_at']


class StaffReserveInfoAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'updated_at']
    fields = ['purpose', 'additional_content']


class StaffReservePositionAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'is_active', 'created_at']
    list_editable = ['order', 'is_active']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title', 'description']
    fields = ['title', 'description', 'order', 'is_active']


class YouthInfoAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'updated_at']
    fields = [
        'intro', 'practice_institutions', 'practice_steps',
        'internship_content', 'school_content',
    ]


class PracticeApplicationAdmin(admin.ModelAdmin):
    list_display = [
        'last_name', 'first_name', 'educational_institution', 'course',
        'practice_period', 'created_at',
    ]
    list_filter = ['created_at', 'educational_institution']
    search_fields = ['last_name', 'first_name', 'email', 'educational_institution']
    readonly_fields = ['consent_personal_data', 'created_at']


class TrainingEventAdmin(admin.ModelAdmin):
    list_display = ['title', 'event_type', 'event_date', 'location', 'is_published', 'created_at']
    list_filter = ['event_type', 'is_published', 'event_date']
    search_fields = ['title', 'description', 'location']
    list_editable = ['is_published']
    date_hierarchy = 'event_date'


class TrainingFeedbackAdmin(admin.ModelAdmin):
    list_display = ['name', 'department', 'message', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'department', 'message']
    readonly_fields = ['created_at']


class NewsPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'published_at', 'is_published', 'show_on_main', 'order', 'created_at']
    list_filter = ['is_published', 'show_on_main', 'published_at']
    search_fields = ['title', 'description']
    list_editable = ['is_published', 'show_on_main', 'order']
    date_hierarchy = 'published_at'


class DepartmentAdmin(admin.ModelAdmin):
    form = DepartmentAdminForm
    list_display = ['name', 'slug', 'vacancy_branch', 'is_published', 'order', 'updated_at']
    list_filter = ['is_published']
    search_fields = ['name', 'slug', 'vacancy_branch']
    list_editable = ['is_published', 'order']
    prepopulated_fields = {'slug': ('name',)}
    fieldsets = [
        ('Основное', {'fields': ['slug', 'name', 'intro', 'image', 'is_published', 'order']}),
        ('О деятельности', {'fields': ['about_paragraphs', 'units', 'tasks']}),
        ('Руководитель', {'fields': ['head_name', 'head_role', 'head_phone', 'head_email']}),
        ('Контакты', {'fields': ['phone', 'email', 'vacancy_branch']}),
    ]


class DeputyDepartmentInline(admin.TabularInline):
    model = DeputyDepartment
    extra = 1
    ordering = ['order']
    autocomplete_fields = ['department']


class DeputyAdmin(admin.ModelAdmin):
    list_display = ['surname', 'name', 'patronymic', 'role', 'is_published', 'order']
    list_filter = ['is_published']
    search_fields = ['surname', 'name', 'patronymic', 'role']
    list_editable = ['is_published', 'order']
    inlines = [DeputyDepartmentInline]
    fieldsets = [
        ('Основное', {'fields': ['role', 'surname', 'name', 'patronymic', 'image', 'is_published', 'order']}),
    ]


custom_admin_site.register(Branch, BranchAdmin)
custom_admin_site.register(Tender, TenderAdmin)
custom_admin_site.register(ContactStaffMember, ContactStaffMemberAdmin)
custom_admin_site.register(HonorBoardStaffMember, HonorBoardStaffMemberAdmin)
custom_admin_site.register(Vacancy, VacancyAdmin)
custom_admin_site.register(WorkSchedule, WorkScheduleAdmin)
custom_admin_site.register(RequiredExperience, RequiredExperienceAdmin)
custom_admin_site.register(JobType, JobTypeAdmin)
custom_admin_site.register(WorkingHours, WorkingHoursAdmin)
custom_admin_site.register(JobApplication, JobApplicationAdmin)
custom_admin_site.register(AntiCorruptionDocumentCategory, AntiCorruptionDocumentCategoryAdmin)
custom_admin_site.register(AntiCorruptionDocument, AntiCorruptionDocumentAdmin)
custom_admin_site.register(AntiCorruptionInfo, AntiCorruptionInfoAdmin)
custom_admin_site.register(CorruptionReport, CorruptionReportAdmin)
custom_admin_site.register(BranchesGlobal, BranchesGlobalAdmin)


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['message', 'created_at']
    list_filter = ['created_at']
    search_fields = ['message']

custom_admin_site.register(Feedback, FeedbackAdmin)
custom_admin_site.register(VacancySubscription, VacancySubscriptionAdmin)
custom_admin_site.register(Competition, CompetitionAdmin)
custom_admin_site.register(CompetitionResult, CompetitionResultAdmin)
custom_admin_site.register(StaffReserveInfo, StaffReserveInfoAdmin)
custom_admin_site.register(StaffReservePosition, StaffReservePositionAdmin)
custom_admin_site.register(YouthInfo, YouthInfoAdmin)
custom_admin_site.register(PracticeApplication, PracticeApplicationAdmin)
custom_admin_site.register(TrainingEvent, TrainingEventAdmin)
custom_admin_site.register(TrainingFeedback, TrainingFeedbackAdmin)
custom_admin_site.register(NewsPost, NewsPostAdmin)
custom_admin_site.register(Department, DepartmentAdmin)
custom_admin_site.register(Deputy, DeputyAdmin)
