from django.urls import path
from .views import (
    hello, tenders, competitions, competition_results, staff_members, vacancies, vacancy_detail,
    vacancy_filters, apply, anti_corruption_info, anti_corruption_documents, submit_corruption_report, branches_global,
    submit_feedback, vacancy_subscribe, staff_reserve_info, youth_info, submit_practice_application,
    training_events, submit_training_feedback, news_posts, departments, department_detail, deputies,
)

urlpatterns = [
    path('hello/', hello),
    path('tenders/', tenders),
    path('competitions/', competitions),
    path('competition-results/', competition_results),
    path('staff-reserve/', staff_reserve_info),
    path('youth/', youth_info),
    path('youth/practice-apply/', submit_practice_application),
    path('training-events/', training_events),
    path('training-feedback/', submit_training_feedback),
    path('news/', news_posts),
    path('staff/', staff_members),
    path('vacancies/<int:pk>/', vacancy_detail),
    path('vacancies/', vacancies),
    path('vacancy-filters/<str:field_name>/', vacancy_filters),
    path('apply/', apply),
    path('vacancy-subscribe/', vacancy_subscribe),
    path('anti-corruption-info/', anti_corruption_info),
    path('anti-corruption-documents/', anti_corruption_documents),
    path('submit-corruption-report/', submit_corruption_report),
    path('branches-global/', branches_global),
    path('departments/<slug:slug>/', department_detail),
    path('departments/', departments),
    path('deputies/', deputies),
    path('submit-feedback/', submit_feedback),
]