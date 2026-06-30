from django.contrib import admin
from .models import Tender, StaffMember, Vacancy, JobApplication, Branch, WorkSchedule, RequiredExperience, JobType, WorkingHours, AntiCorruptionDocument, AntiCorruptionInfo, CorruptionReport, BranchesGlobal, Feedback, VacancySubscription, Competition, CompetitionResult, StaffReserveInfo, YouthInfo, PracticeApplication, TrainingEvent, TrainingFeedback, NewsPost
from .adminsite import custom_admin_site


class BranchAdmin(admin.ModelAdmin):
    list_display = ['name', 'address']
    search_fields = ['name', 'address']


class TenderAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'show_on_main_page', 'created_at']
    list_filter = ['category']
    search_fields = ['name']
    list_editable = ['show_on_main_page']


class StaffMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'branch', 'surname', 'role', 'cabinet_number', 'order', 'is_active', 'show_on_honorboard', 'show_on_reserve']
    list_filter = ['is_active', 'show_on_honorboard', 'show_on_reserve']
    search_fields = ['name', 'surname', 'role', 'phone', 'email']
    list_editable = ['order', 'is_active', 'show_on_honorboard', 'show_on_reserve']


class VacancyAdmin(admin.ModelAdmin):
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


class AntiCorruptionDocumentAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'created_at']
    list_filter = ['category']
    search_fields = ['name', 'category']


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
    list_display = ['email', 'branch', 'work_schedule', 'required_experience', 'job_type', 'is_active', 'created_at']
    list_filter = ['is_active', 'work_schedule', 'required_experience', 'job_type', 'created_at']
    search_fields = ['email', 'branch']
    list_editable = ['is_active']


class CompetitionAdmin(admin.ModelAdmin):
    list_display = ['title', 'competition_type', 'date_start', 'date_end', 'is_active', 'created_at']
    list_filter = ['is_active', 'competition_type', 'created_at']
    search_fields = ['title', 'content']
    list_editable = ['is_active']


class CompetitionResultAdmin(admin.ModelAdmin):
    list_display = ['title', 'completed_at', 'created_at']
    list_filter = ['completed_at', 'created_at']
    search_fields = ['title']


class StaffReserveInfoAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'updated_at']
    fields = ['purpose', 'positions', 'additional_content']


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


custom_admin_site.register(Branch, BranchAdmin)
custom_admin_site.register(Tender, TenderAdmin)
custom_admin_site.register(StaffMember, StaffMemberAdmin)
custom_admin_site.register(Vacancy, VacancyAdmin)
custom_admin_site.register(WorkSchedule, WorkScheduleAdmin)
custom_admin_site.register(RequiredExperience, RequiredExperienceAdmin)
custom_admin_site.register(JobType, JobTypeAdmin)
custom_admin_site.register(WorkingHours, WorkingHoursAdmin)
custom_admin_site.register(JobApplication, JobApplicationAdmin)
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
custom_admin_site.register(YouthInfo, YouthInfoAdmin)
custom_admin_site.register(PracticeApplication, PracticeApplicationAdmin)
custom_admin_site.register(TrainingEvent, TrainingEventAdmin)
custom_admin_site.register(TrainingFeedback, TrainingFeedbackAdmin)
custom_admin_site.register(NewsPost, NewsPostAdmin)
