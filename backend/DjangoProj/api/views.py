import time
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.db.models import Q

from .models import (
    Tender, Vacancy, StaffMember, WorkSchedule, RequiredExperience, JobType,
    AntiCorruptionDocument, AntiCorruptionDocumentCategory, AntiCorruptionInfo, CorruptionReport, BranchesGlobal, Feedback, VacancySubscription,
    Competition, CompetitionResult, StaffReserveInfo, StaffReserveDocument, VacancyDocument, WorkPartner, YouthInfo, PracticeApplication,
    TrainingEvent, TrainingFeedback, NewsPost, Department, Deputy,
)
from .serializers import (
    TenderSerializer, VacancySerializer, StaffMemberSerializer,
    JobApplicationSerializer, WorkScheduleSerializer,
    RequiredExperienceSerializer, JobTypeSerializer,
    AntiCorruptionDocumentSerializer, AntiCorruptionDocumentCategorySerializer, AntiCorruptionInfoSerializer, CorruptionReportSerializer,
    BranchesGlobalSerializer, WorkPartnerSerializer, FeedbackSerializer, VacancySubscriptionSerializer,
    CompetitionSerializer, CompetitionResultSerializer, StaffReserveInfoSerializer, StaffReserveDocumentSerializer, VacancyDocumentSerializer,
    YouthInfoSerializer, PracticeApplicationSerializer,
    TrainingEventSerializer, TrainingFeedbackSerializer, NewsPostSerializer,
    DepartmentSerializer, DeputySerializer,
)


@api_view(['GET'])
def hello(request):
    return Response({"message": "Hello from Django!"})

@api_view(['GET'])
def portal_search(request):
    query = (request.query_params.get('q') or '').strip()
    if len(query) < 2:
        return Response({'vacancies': [], 'contacts': [], 'documents': []})

    limit = 8

    vacancies = list(
        Vacancy.objects.filter(is_active=True, title__icontains=query)
        .values('id', 'title', 'branch')[:limit]
    )

    contacts = list(
        StaffMember.objects.filter(
            is_active=True,
            show_on_contacts=True,
        )
        .filter(
            Q(surname__icontains=query)
            | Q(name__icontains=query)
            | Q(patronym__icontains=query)
            | Q(role__icontains=query)
            | Q(phone__icontains=query)
            | Q(email__icontains=query)
        )
        .values('id', 'surname', 'name', 'patronym', 'role', 'phone', 'email')[:limit]
    )

    documents = []

    for item in Tender.objects.filter(is_active=True, name__icontains=query).values('id', 'name')[:limit]:
        documents.append({
            'kind': 'tender',
            'id': item['id'],
            'title': item['name'],
            'section': 'Конкурсы — документы',
            'to': '/tenders#competition-rules',
        })
        if len(documents) >= limit:
            break

    if len(documents) < limit:
        remaining = limit - len(documents)
        for item in CompetitionResult.objects.filter(title__icontains=query).values('id', 'title', 'competition_type')[:remaining]:
            documents.append({
                'kind': 'competition_result',
                'id': item['id'],
                'title': item['title'],
                'section': 'Конкурсы — результаты',
                'to': '/tenders?tab=results',
            })

    if len(documents) < limit:
        remaining = limit - len(documents)
        for item in VacancyDocument.objects.filter(is_active=True, name__icontains=query).values('id', 'name')[:remaining]:
            documents.append({
                'kind': 'vacancy_document',
                'id': item['id'],
                'title': item['name'],
                'section': 'Вакансии — документы',
                'to': '/vacancies#vacancies-documents',
            })

    if len(documents) < limit:
        remaining = limit - len(documents)
        for item in StaffReserveDocument.objects.filter(is_active=True, name__icontains=query).values('id', 'name')[:remaining]:
            documents.append({
                'kind': 'staff_reserve_document',
                'id': item['id'],
                'title': item['name'],
                'section': 'Кадровый резерв — документы',
                'to': '/staffreserve#reserve-documents',
            })

    if len(documents) < limit:
        remaining = limit - len(documents)
        for item in AntiCorruptionDocument.objects.filter(name__icontains=query).values('id', 'name')[:remaining]:
            documents.append({
                'kind': 'anti_corruption',
                'id': item['id'],
                'title': item['name'],
                'section': 'Противодействие коррупции — документы',
                'to': '/anti-corruption#anticorruption-documents',
            })

    return Response({
        'vacancies': vacancies,
        'contacts': contacts,
        'documents': documents,
    })


@api_view(['GET'])
def tenders(request):
    items = Tender.objects.filter(is_active=True)
    serializer = TenderSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def competitions(request):
    items = Competition.objects.filter(is_active=True)
    competition_type = request.query_params.get('type')
    if competition_type in ('vacancy', 'reserve'):
        items = items.filter(competition_type=competition_type)
    serializer = CompetitionSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def staff_reserve_info(request):
    info = StaffReserveInfo.get_solo()
    serializer = StaffReserveInfoSerializer(info)
    return Response(serializer.data)


@api_view(['GET'])
def staff_reserve_documents(request):
    items = StaffReserveDocument.objects.filter(is_active=True)
    serializer = StaffReserveDocumentSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def vacancy_documents(request):
    items = VacancyDocument.objects.filter(is_active=True)
    serializer = VacancyDocumentSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def youth_info(request):
    info = YouthInfo.get_solo()
    serializer = YouthInfoSerializer(info)
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def submit_practice_application(request):
    serializer = PracticeApplicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {
                'message': 'Заявка на практику успешно отправлена!',
                'id': serializer.instance.id,
            },
            status=status.HTTP_201_CREATED,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def news_posts(request):
    items = NewsPost.objects.filter(is_published=True, show_on_main=True)
    serializer = NewsPostSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def news_post_detail(request, pk: int):
    try:
        item = NewsPost.objects.get(pk=pk, is_published=True)
    except NewsPost.DoesNotExist:
        return Response({'error': 'News post not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = NewsPostSerializer(item, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def training_events(request):
    items = TrainingEvent.objects.filter(is_published=True)
    event_type = request.query_params.get('type')
    if event_type in dict(TrainingEvent.TYPE_CHOICES):
        items = items.filter(event_type=event_type)
    serializer = TrainingEventSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def submit_training_feedback(request):
    cooldown_seconds = 60

    last_submit = request.COOKIES.get('training_feedback_cooldown')
    if last_submit:
        try:
            last_time = float(last_submit)
            if time.time() - last_time < cooldown_seconds:
                remaining = int(cooldown_seconds - (time.time() - last_time))
                return Response(
                    {'error': f'Слишком частая отправка. Подождите {remaining} сек.'},
                    status=status.HTTP_429_TOO_MANY_REQUESTS,
                )
        except ValueError:
            pass

    serializer = TrainingFeedbackSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()
        response = Response(
            {'message': 'Спасибо! Ваше предложение отправлено.', 'id': instance.id},
            status=status.HTTP_201_CREATED,
        )
        response.set_cookie(
            'training_feedback_cooldown',
            str(time.time()),
            max_age=cooldown_seconds,
            httponly=True,
            samesite='Lax',
        )
        return response
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def competition_results(request):
    items = CompetitionResult.objects.all()
    competition_type = request.query_params.get('type')
    if competition_type in (Competition.TYPE_VACANCY, Competition.TYPE_RESERVE):
        items = items.filter(competition_type=competition_type)
    serializer = CompetitionResultSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def staff_members(request):
    if request.query_params.get('management_head'):
        items = StaffMember.objects.filter(is_management_head=True, is_active=True)
        serializer = StaffMemberSerializer(items, many=True, context={'request': request})
        return Response(serializer.data)

    if request.query_params.get('reserve'):
        items = StaffMember.objects.filter(show_on_reserve=True)
    else:
        items = StaffMember.objects.filter(is_active=True, show_on_reserve=False)
        if request.query_params.get('honorboard'):
            items = items.filter(show_on_honorboard=True)
        if request.query_params.get('contacts'):
            items = items.filter(show_on_contacts=True, is_management_head=False)

    serializer = StaffMemberSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def vacancies(request):
    items = Vacancy.objects.filter(is_active=True)

    work_schedule = request.query_params.get('work_schedule')
    if work_schedule:
        items = items.filter(work_schedule_id=work_schedule)

    required_experience = request.query_params.get('required_experience')
    if required_experience:
        items = items.filter(required_experience_id=required_experience)

    job_type = request.query_params.get('job_type')
    if job_type:
        items = items.filter(job_type_id=job_type)

    branch = request.query_params.get('branch') or request.query_params.get('org')
    if branch:
        branch = branch.strip()
        items = items.filter(branch__iexact=branch)

    serializer = VacancySerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def vacancy_detail(request, pk):
    vacancy = get_object_or_404(Vacancy, pk=pk, is_active=True)
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)


@api_view(['GET'])
def vacancy_filters(request, field_name):
    model_map = {
        'work_schedule': (WorkSchedule, WorkScheduleSerializer),
        'required_experience': (RequiredExperience, RequiredExperienceSerializer),
        'job_type': (JobType, JobTypeSerializer),
    }

    entry = model_map.get(field_name)
    if entry is None:
        return Response({'error': f'Unknown filter field: {field_name}'}, status=404)

    model_cls, serializer_cls = entry
    items = model_cls.objects.all()
    serializer = serializer_cls(items, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def apply(request):
    serializer = JobApplicationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Заявка успешно отправлена!", "id": serializer.instance.id},
            status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def vacancy_subscribe(request):
    serializer = VacancySubscriptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {
                'message': 'Подписка оформлена. Уведомления о новых вакансиях будут приходить на указанный email.',
                'id': serializer.instance.id,
            },
            status=status.HTTP_201_CREATED,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def anti_corruption_info(request):
    info = AntiCorruptionInfo.get_solo()
    serializer = AntiCorruptionInfoSerializer(info)
    return Response(serializer.data)


@api_view(['GET'])
def anti_corruption_documents(request):
    from django.db.models import Prefetch

    categories = AntiCorruptionDocumentCategory.objects.prefetch_related(
        Prefetch(
            'documents',
            queryset=AntiCorruptionDocument.objects.order_by('-created_at'),
        ),
    ).order_by('order', 'tab_label')
    serializer = AntiCorruptionDocumentCategorySerializer(
        categories,
        many=True,
        context={'request': request},
    )
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def submit_corruption_report(request):
    cooldown_seconds = 60

    last_submit = request.COOKIES.get('corruption_cooldown')
    if last_submit:
        try:
            last_time = float(last_submit)
            if time.time() - last_time < cooldown_seconds:
                remaining = int(cooldown_seconds - (time.time() - last_time))
                return Response(
                    {'error': f'Слишком частая отправка. Подождите {remaining} сек.'},
                    status=status.HTTP_429_TOO_MANY_REQUESTS
                )
        except ValueError:
            pass

    serializer = CorruptionReportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        response = Response(
            {"message": "Сообщение успешно отправлено!", "id": serializer.instance.id},
            status=status.HTTP_201_CREATED
        )
        response.set_cookie(
            'corruption_cooldown',
            str(time.time()),
            max_age=cooldown_seconds,
            httponly=True,
            samesite='Lax'
        )
        return response
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def branches_global(request):
    items = BranchesGlobal.objects.all()
    serializer = BranchesGlobalSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def work_partners(request):
    items = WorkPartner.objects.filter(is_active=True)
    serializer = WorkPartnerSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def departments(request):
    items = Department.objects.filter(is_published=True)
    serializer = DepartmentSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def department_detail(request, slug):
    item = get_object_or_404(Department, slug=slug, is_published=True)
    serializer = DepartmentSerializer(item, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def deputies(request):
    items = Deputy.objects.filter(is_published=True).prefetch_related(
        'deputy_departments__department'
    )
    serializer = DeputySerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def submit_feedback(request):
    cooldown_seconds = 60

    last_submit = request.COOKIES.get('feedback_cooldown')
    if last_submit:
        try:
            last_time = float(last_submit)
            if time.time() - last_time < cooldown_seconds:
                remaining = int(cooldown_seconds - (time.time() - last_time))
                return Response(
                    {'error': f'Слишком частая отправка. Подождите {remaining} сек.'},
                    status=status.HTTP_429_TOO_MANY_REQUESTS
                )
        except ValueError:
            pass

    serializer = FeedbackSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()

        response = Response(
            {"message": "Сообщение отправлено!", "id": instance.id},
            status=status.HTTP_201_CREATED
        )
        response.set_cookie(
            'feedback_cooldown',
            str(time.time()),
            max_age=cooldown_seconds,
            httponly=True,
            samesite='Lax'
        )
        return response
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)