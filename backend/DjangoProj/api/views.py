import time
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404

from .models import Tender, Vacancy, StaffMember, WorkSchedule, RequiredExperience, JobType, AntiCorruptionDocument, CorruptionReport, BranchesGlobal, Feedback
from .serializers import (TenderSerializer, VacancySerializer, StaffMemberSerializer,
                          JobApplicationSerializer, WorkScheduleSerializer,
                          RequiredExperienceSerializer, JobTypeSerializer,
                          AntiCorruptionDocumentSerializer, CorruptionReportSerializer,
                          BranchesGlobalSerializer, FeedbackSerializer)


@api_view(['GET'])
def hello(request):
    return Response({"message": "Hello from Django!"})


@api_view(['GET'])
def tenders(request):
    items = Tender.objects.all()
    serializer = TenderSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def staff_members(request):
    if request.query_params.get('reserve'):
        items = StaffMember.objects.filter(show_on_reserve=True)
    else:
        items = StaffMember.objects.filter(is_active=True, show_on_reserve=False)
        if request.query_params.get('honorboard'):
            items = items.filter(show_on_honorboard=True)

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


@api_view(['GET'])
def anti_corruption_documents(request):
    items = AntiCorruptionDocument.objects.all()
    serializer = AntiCorruptionDocumentSerializer(items, many=True, context={'request': request})
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