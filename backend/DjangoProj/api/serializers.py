from rest_framework import serializers
from .models import Tender, StaffMember, Vacancy, JobApplication, Branch, WorkSchedule, RequiredExperience, JobType, AntiCorruptionDocument, CorruptionReport, BranchesGlobal, Feedback


class TenderSerializer(serializers.ModelSerializer):
    link = serializers.SerializerMethodField()

    class Meta:
        model = Tender
        fields = ['id', 'category', 'name', 'link', 'created_at', 'show_on_main_page']

    def get_link(self, obj):
        if obj.link:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.link.url)
            return obj.link.url
        return None


class StaffMemberSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    branch_name = serializers.CharField(source='branch.name', read_only=True)
    branch_address = serializers.CharField(source='branch.address', read_only=True)

    class Meta:
        model = StaffMember
        fields = ['name', 'surname', 'patronym', 'phone', 'email', 'cabinet_number',
                  'role', 'branch', 'branch_name', 'branch_address', 'description', 'image',
                  'show_on_honorboard', 'show_on_reserve', 'order']

    def get_image(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None


class WorkScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkSchedule
        fields = ['id', 'name']


class RequiredExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredExperience
        fields = ['id', 'name']


class JobTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobType
        fields = ['id', 'name']


class VacancySerializer(serializers.ModelSerializer):
    employmentType = serializers.CharField(source='employment_type')
    isNew = serializers.BooleanField(source='is_new')
    workSchedule = serializers.CharField(source='work_schedule.name', read_only=True)
    requiredExperience = serializers.CharField(source='required_experience.name', read_only=True)
    jobType = serializers.CharField(source='job_type.name', read_only=True)
    skills = serializers.SerializerMethodField()
    detailsLink = serializers.SerializerMethodField()
    workingHours = serializers.CharField(source='working_hours.name', read_only=True, allow_null=True)

    class Meta:
        model = Vacancy
        fields = ['id', 'title', 'branch', 'location', 'salary', 'employmentType',
                  'experience', 'workSchedule', 'requiredExperience', 'jobType',
                  'isNew', 'description', 'skills', 'workingHours', 'detailsLink', 'created_at']

    def get_skills(self, obj):
        return [s.strip() for s in obj.skills.split('\n') if s.strip()]

    def get_detailsLink(self, obj):
        return f'/vacancyinfo/{obj.id}'


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = '__all__'
        read_only_fields = ['created_at']


class AntiCorruptionDocumentSerializer(serializers.ModelSerializer):
    file = serializers.SerializerMethodField()

    class Meta:
        model = AntiCorruptionDocument
        fields = ['id', 'category', 'name', 'file', 'created_at']

    def get_file(self, obj):
        if obj.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.file.url)
            return obj.file.url
        return None


class CorruptionReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorruptionReport
        fields = '__all__'
        read_only_fields = ['created_at']


class BranchesGlobalSerializer(serializers.ModelSerializer):
    class Meta:
        model = BranchesGlobal
        fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
