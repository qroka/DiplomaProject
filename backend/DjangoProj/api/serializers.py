from rest_framework import serializers
from .models import (
    Tender, StaffMember, Vacancy, JobApplication, Branch, WorkSchedule, RequiredExperience,
    JobType, AntiCorruptionDocument, AntiCorruptionDocumentCategory, AntiCorruptionInfo, CorruptionReport, BranchesGlobal, Feedback, VacancySubscription,
    Competition, CompetitionResult, StaffReserveInfo, StaffReservePosition, StaffReserveDocument, VacancyDocument, WorkPartner, YouthInfo, PracticeApplication,
    TrainingEvent, TrainingFeedback, NewsPost, Department, Deputy,
)


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
                  'show_on_honorboard', 'show_on_contacts', 'is_management_head', 'show_on_reserve', 'order']

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
    company = serializers.CharField(source='branch', read_only=True)
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
        fields = ['id', 'title', 'branch', 'company', 'location', 'salary', 'employmentType',
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
        fields = ['id', 'name', 'file', 'created_at']

    def get_file(self, obj):
        if obj.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.file.url)
            return obj.file.url
        return None


class AntiCorruptionDocumentCategorySerializer(serializers.ModelSerializer):
    documents = AntiCorruptionDocumentSerializer(many=True, read_only=True)

    class Meta:
        model = AntiCorruptionDocumentCategory
        fields = ['id', 'slug', 'tab_label', 'title', 'order', 'documents']


class AntiCorruptionInfoSerializer(serializers.ModelSerializer):
    officialsList = serializers.SerializerMethodField()

    class Meta:
        model = AntiCorruptionInfo
        fields = [
            'intro', 'work_schedule', 'address', 'officials', 'officialsList',
            'esia_feedback_url', 'updated_at',
        ]

    def get_officialsList(self, obj):
        return [line.strip() for line in obj.officials.splitlines() if line.strip()]


class CorruptionReportSerializer(serializers.ModelSerializer):
    MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024

    class Meta:
        model = CorruptionReport
        fields = '__all__'
        read_only_fields = ['created_at']

    def validate(self, data):
        total_size = 0
        for field in ('attachment', 'image'):
            file_obj = data.get(field)
            if file_obj:
                total_size += file_obj.size
        if total_size > self.MAX_ATTACHMENT_BYTES:
            raise serializers.ValidationError(
                'Суммарный объём вложений не должен превышать 10 МБ'
            )
        return data


class BranchesGlobalSerializer(serializers.ModelSerializer):
    class Meta:
        model = BranchesGlobal
        fields = '__all__'


class WorkPartnerSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = WorkPartner
        fields = ['id', 'name', 'url', 'image', 'order']

    def get_image(self, obj):
        if obj.logo_file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.logo_file.url)
            return obj.logo_file.url
        return obj.logo_path


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'


class VacancySubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = VacancySubscription
        fields = ['id', 'name', 'email', 'branch', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_email(self, value):
        return value.strip().lower()


class CompetitionSerializer(serializers.ModelSerializer):
    competitionTypeLabel = serializers.CharField(source='get_competition_type_display', read_only=True)

    class Meta:
        model = Competition
        fields = [
            'id', 'title', 'competition_type', 'competitionTypeLabel', 'content',
            'date_start', 'date_end', 'requirements', 'acceptance_info',
            'contact_phones', 'is_active', 'created_at',
        ]


class CompetitionResultSerializer(serializers.ModelSerializer):
    decreeConductLink = serializers.SerializerMethodField()
    decreeResultsLink = serializers.SerializerMethodField()
    competitionTypeLabel = serializers.CharField(source='get_competition_type_display', read_only=True)

    class Meta:
        model = CompetitionResult
        fields = [
            'id', 'title', 'competition_type', 'competitionTypeLabel',
            'decreeConductLink', 'decreeResultsLink', 'completed_at', 'created_at',
        ]

    def _file_url(self, obj, field_name):
        file_field = getattr(obj, field_name)
        if not file_field:
            return None
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(file_field.url)
        return file_field.url

    def get_decreeConductLink(self, obj):
        return self._file_url(obj, 'decree_conduct')

    def get_decreeResultsLink(self, obj):
        return self._file_url(obj, 'decree_results')


class StaffReservePositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaffReservePosition
        fields = ['id', 'title', 'description', 'order']


class StaffReserveDocumentSerializer(serializers.ModelSerializer):
    link = serializers.SerializerMethodField()

    class Meta:
        model = StaffReserveDocument
        fields = ['id', 'name', 'link', 'order', 'created_at']

    def get_link(self, obj):
        if obj.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.file.url)
            return obj.file.url
        return None


class VacancyDocumentSerializer(serializers.ModelSerializer):
    link = serializers.SerializerMethodField()

    class Meta:
        model = VacancyDocument
        fields = ['id', 'name', 'link', 'order', 'created_at']

    def get_link(self, obj):
        if obj.file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.file.url)
            return obj.file.url
        return None


class StaffReserveInfoSerializer(serializers.ModelSerializer):
    positions = serializers.SerializerMethodField()

    class Meta:
        model = StaffReserveInfo
        fields = ['purpose', 'positions', 'additional_content', 'updated_at']

    def get_positions(self, obj):
        items = StaffReservePosition.objects.filter(is_active=True)
        return StaffReservePositionSerializer(items, many=True).data


class YouthInfoSerializer(serializers.ModelSerializer):
    institutionsList = serializers.SerializerMethodField()

    class Meta:
        model = YouthInfo
        fields = [
            'intro', 'practice_institutions', 'institutionsList',
            'practice_steps', 'internship_content', 'school_content', 'updated_at',
        ]

    def get_institutionsList(self, obj):
        return [line.strip() for line in obj.practice_institutions.splitlines() if line.strip()]


class PracticeApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PracticeApplication
        fields = [
            'id', 'last_name', 'first_name', 'middle_name', 'birth_date', 'phone', 'email',
            'educational_institution', 'course', 'specialty', 'practice_period',
            'preferred_department', 'comment', 'application_letter', 'consent_personal_data',
            'created_at',
        ]
        read_only_fields = ['id', 'created_at']

    def validate_consent_personal_data(self, value):
        if not value:
            raise serializers.ValidationError('Необходимо согласие на обработку персональных данных')
        return value


class TrainingEventSerializer(serializers.ModelSerializer):
    eventTypeLabel = serializers.CharField(source='get_event_type_display', read_only=True)

    class Meta:
        model = TrainingEvent
        fields = [
            'id', 'title', 'event_type', 'eventTypeLabel', 'description',
            'event_date', 'location', 'created_at',
        ]


class TrainingFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingFeedback
        fields = ['id', 'name', 'department', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_message(self, value):
        if not value.strip():
            raise serializers.ValidationError('Введите текст предложения')
        return value.strip()


class NewsPostSerializer(serializers.ModelSerializer):
    date = serializers.DateField(source='published_at')
    imageUrl = serializers.SerializerMethodField()

    class Meta:
        model = NewsPost
        fields = ['id', 'title', 'description', 'content', 'date', 'published_at', 'imageUrl', 'order']

    def get_imageUrl(self, obj):
        if not obj.image:
            return None
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url


def _split_lines(value):
    return [line.strip() for line in value.splitlines() if line.strip()]


class DepartmentSerializer(serializers.ModelSerializer):
    aboutParagraphs = serializers.SerializerMethodField()
    units = serializers.SerializerMethodField()
    tasks = serializers.SerializerMethodField()
    head = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    vacancyBranch = serializers.CharField(source='vacancy_branch', read_only=True)

    class Meta:
        model = Department
        fields = [
            'slug', 'name', 'intro', 'aboutParagraphs', 'units', 'tasks',
            'head', 'phone', 'email', 'image', 'vacancyBranch',
        ]

    def get_aboutParagraphs(self, obj):
        paragraphs = _split_lines(obj.about_paragraphs)
        return paragraphs or None

    def get_units(self, obj):
        items = _split_lines(obj.units)
        return items or None

    def get_tasks(self, obj):
        items = _split_lines(obj.tasks)
        return items or None

    def get_head(self, obj):
        if not obj.head_name:
            return None
        head = {
            'name': obj.head_name,
            'role': obj.head_role,
        }
        if obj.head_phone:
            head['phone'] = obj.head_phone
        if obj.head_email:
            head['email'] = obj.head_email
        return head

    def get_image(self, obj):
        if not obj.image:
            return None
        request = self.context.get('request')
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url


class DeputySerializer(serializers.ModelSerializer):
    departmentSlugs = serializers.SerializerMethodField()

    class Meta:
        model = Deputy
        fields = ['role', 'surname', 'name', 'patronymic', 'image', 'departmentSlugs']

    def get_departmentSlugs(self, obj):
        return list(
            obj.deputy_departments.select_related('department')
            .order_by('order')
            .values_list('department__slug', flat=True)
        )
