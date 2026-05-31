from django.contrib import admin
from .models import Tender, StaffMember, Vacancy, JobApplication, Branch, WorkSchedule, RequiredExperience, JobType, WorkingHours, AntiCorruptionDocument, CorruptionReport


@admin.register(Branch)
class BranchAdmin(admin.ModelAdmin):
    list_display = ['name', 'address']
    search_fields = ['name', 'address']


@admin.register(Tender)
class TenderAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'created_at']
    list_filter = ['category']
    search_fields = ['name']


@admin.register(StaffMember)
class StaffMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'branch', 'surname', 'role', 'cabinet_number', 'order', 'is_active', 'show_on_honorboard']
    list_filter = ['is_active', 'show_on_honorboard']
    search_fields = ['name', 'surname', 'role', 'phone', 'email']
    list_editable = ['order', 'is_active', 'show_on_honorboard']


@admin.register(Vacancy)
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


@admin.register(WorkSchedule)
class WorkScheduleAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


@admin.register(RequiredExperience)
class RequiredExperienceAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


@admin.register(JobType)
class JobTypeAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


@admin.register(WorkingHours)
class WorkingHoursAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ['last_name', 'first_name', 'vacancy_title', 'email', 'phone', 'created_at']
    list_filter = ['vacancy_title', 'created_at', 'marital_status']
    search_fields = ['last_name', 'first_name', 'email', 'phone']


@admin.register(AntiCorruptionDocument)
class AntiCorruptionDocumentAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'created_at']
    list_filter = ['category']
    search_fields = ['name', 'category']


@admin.register(CorruptionReport)
class CorruptionReportAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'created_at']
    list_filter = ['created_at']
    search_fields = ['full_name', 'email']
