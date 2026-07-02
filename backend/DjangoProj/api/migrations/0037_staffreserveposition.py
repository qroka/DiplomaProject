# Generated manually

from django.db import migrations, models


DEFAULT_POSITIONS = [
    {
        'title': 'Заместитель начальника управления',
        'description': (
            'Курирует одно из приоритетных направлений работы администрации района. '
            'В резерв включаются специалисты с опытом координации межведомственных проектов, '
            'подготовки управленческих решений и организации работы структурных подразделений.'
        ),
        'order': 1,
    },
    {
        'title': 'Начальник отдела',
        'description': (
            'Обеспечивает руководство отраслевым подразделением, постановку задач и контроль исполнения. '
            'Кандидат в резерв должен иметь опыт управления командой, знание нормативной базы '
            'и навыки планирования деятельности подразделения.'
        ),
        'order': 2,
    },
    {
        'title': 'Главный специалист',
        'description': (
            'Выполняет экспертно-аналитические и организационные функции по профильному направлению. '
            'В резерв отбираются сотрудники, способные самостоятельно готовить проекты документов, '
            'консультировать подразделения и участвовать в реализации программ развития района.'
        ),
        'order': 3,
    },
    {
        'title': 'Советник главы администрации района',
        'description': (
            'Оказывает методическую и экспертную поддержку по вопросам внутренней политики '
            'и развития муниципального управления. Требуются глубокие знания отрасли, '
            'опыт аналитической работы и умение готовить предложения для принятия решений.'
        ),
        'order': 4,
    },
    {
        'title': 'Главный специалист отдела муниципальной службы и кадров',
        'description': (
            'Участвует в организации конкурсных процедур, кадрового учёта и развития муниципальной службы. '
            'В резерв формируются специалисты, знакомые с законодательством о муниципальной службе, '
            'кадровыми процессами и внутренними регламентами администрации.'
        ),
        'order': 5,
    },
    {
        'title': 'Консультант управления',
        'description': (
            'Обеспечивает информационно-справочную и организационную поддержку направлений работы управления. '
            'Подходит для включения в резерв сотрудников с опытом делопроизводства, взаимодействия '
            'с гражданами и органами власти, владения офисными и аналитическими инструментами.'
        ),
        'order': 6,
    },
]


def seed_staff_reserve_positions(apps, schema_editor):
    StaffReservePosition = apps.get_model('api', 'StaffReservePosition')
    if StaffReservePosition.objects.exists():
        return
    for item in DEFAULT_POSITIONS:
        StaffReservePosition.objects.create(**item)


def unseed_staff_reserve_positions(apps, schema_editor):
    StaffReservePosition = apps.get_model('api', 'StaffReservePosition')
    StaffReservePosition.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0036_alter_competitionresult_competition_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='StaffReservePosition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Должность')),
                ('description', models.TextField(
                    help_text='Кратко: зона ответственности и требования к кандидату в резерв на эту должность',
                    verbose_name='Описание',
                )),
                ('order', models.PositiveIntegerField(default=0, verbose_name='Порядок')),
                ('is_active', models.BooleanField(default=True, verbose_name='Показывать на сайте')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Создано')),
            ],
            options={
                'verbose_name': 'Должность кадрового резерва',
                'verbose_name_plural': 'Должности кадрового резерва',
                'ordering': ['order', 'title'],
            },
        ),
        migrations.RunPython(seed_staff_reserve_positions, unseed_staff_reserve_positions),
    ]
