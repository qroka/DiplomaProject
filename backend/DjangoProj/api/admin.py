from django.contrib import admin
from .models import Tender, StaffMember, Vacancy, JobApplication, Branch, WorkSchedule, RequiredExperience, JobType, WorkingHours, AntiCorruptionDocument, CorruptionReport, BranchesGlobal, Feedback
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


class CorruptionReportAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'created_at']
    list_filter = ['created_at']
    search_fields = ['full_name', 'email']


class BranchesGlobalAdmin(admin.ModelAdmin):
    list_display = ['name', 'link']
    search_fields = ['name']


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
custom_admin_site.register(CorruptionReport, CorruptionReportAdmin)
custom_admin_site.register(BranchesGlobal, BranchesGlobalAdmin)


class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['message', 'created_at']
    list_filter = ['created_at']
    search_fields = ['message']

custom_admin_site.register(Feedback, FeedbackAdmin)
