from django.urls import path
from .views import hello, tenders, staff_members, vacancies, vacancy_detail, vacancy_filters, apply, anti_corruption_documents, submit_corruption_report

urlpatterns = [
    path('hello/', hello),
    path('tenders/', tenders),
    path('staff/', staff_members),
    path('vacancies/<int:pk>/', vacancy_detail),
    path('vacancies/', vacancies),
    path('vacancy-filters/<str:field_name>/', vacancy_filters),
    path('apply/', apply),
    path('anti-corruption-documents/', anti_corruption_documents),
    path('submit-corruption-report/', submit_corruption_report),
]