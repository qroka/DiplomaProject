from django.core.management.base import BaseCommand

from api.models import Department, Deputy, DeputyDepartment

DEFAULT_INTRO = (
    'Отраслевой (функциональный) орган администрации Сургутского района обеспечивает '
    'реализацию полномочий в своей сфере деятельности и взаимодействует с жителями района.'
)

DEPARTMENTS = [
    {'slug': 'dep-vnutrenney-politiki', 'name': 'Департамент внутренней и информационной политики', 'order': 10},
    {'slug': 'yuridicheskiy-komitet', 'name': 'Юридический комитет', 'order': 20},
    {'slug': 'uo-it-cifra', 'name': 'Управление информационных технологий и цифрового развития', 'order': 30},
    {'slug': 'uo-municipal-sluzhba', 'name': 'Управление муниципальной службы, кадров и наград', 'order': 40},
    {
        'slug': 'uo-organizacii-deyatelnosti',
        'name': 'Управление по организации деятельности администрации района',
        'order': 50,
        'about_paragraphs': (
            'Это настоящие «мозг» и «сердце» нашей команды!\n'
            'Их работа важна и многогранна.\n'
            'Это чёткий, отлаженный механизм, который регулирует деятельность всей администрации.'
        ),
        'units': (
            'архивный отдел\n'
            'отдел делопроизводства\n'
            'отдел контроля и организационной работы\n'
            'отдел протокола\n'
            'отдел по работе с Думой Сургутского района'
        ),
        'tasks': (
            'организация деятельности — обеспечение работы главы, его первых заместителей, '
            'заместителей, Думы Сургутского района, председателя Думы Сургутского района '
            'и Контрольно-счётной палаты (КСП) Сургутского района\n'
            'документооборот — обработка всей корреспонденции, поступающей на имя главы\n'
            'контроль за исполнением поступающих документов — мало подписать документ, '
            'нужно проследить, чтобы его исполнили в срок\n'
            'хранители истории — учёт и хранение всех документов муниципального образования — '
            'зона ответственности сотрудников управления\n'
            'протокол и этикет — визиты, совещания, мероприятия и церемонии вручения наград — '
            'протокольное сопровождение деятельности главы полностью лежит на этом отделе\n'
            'работа с гражданами и помощь коллегам — специалисты управления своевременно реагируют '
            'на обращения граждан, оказывают методическую помощь по делопроизводству\n'
            'обеспечение справедливости — именно здесь составляют списки кандидатов в присяжные заседатели'
        ),
        'head_name': 'Ковыляев Денис Леонидович',
        'head_role': 'Начальник управления по организации деятельности',
        'head_phone': 'гор. 8 (3462) 52-65-07, внутр. 1507',
        'head_email': 'kdl@admsr.ru',
    },
    {
        'slug': 'dep-municipal-imushchestvo',
        'name': 'Департамент управления муниципальным имуществом и жилищной политики',
        'order': 60,
    },
    {'slug': 'dep-stroitelstvo-zemlya', 'name': 'Департамент строительства и земельных отношений', 'order': 70},
    {
        'slug': 'dep-zhkh-ekologiya',
        'name': 'Департамент жилищно-коммунального хозяйства, экологии, транспорта и связи',
        'order': 80,
    },
    {
        'slug': 'uo-investicii-predprinimatelstvo',
        'name': 'Управление инвестиционной политики, развития предпринимательства и проектного управления',
        'order': 90,
    },
    {'slug': 'dep-obrazovaniya', 'name': 'Департамент образования', 'order': 100},
    {
        'slug': 'uo-molodezhnaya-politika',
        'name': 'Управление молодёжной политики и реализации социальных инициатив',
        'order': 110,
    },
    {'slug': 'uo-kultury', 'name': 'Управление культуры', 'order': 120},
    {'slug': 'uo-fizkultury-sport', 'name': 'Управление физической культуры, туризма и спорта', 'order': 130},
    {
        'slug': 'otdel-komissii-nesovershennoletnih',
        'name': 'Отдел по осуществлению комиссии по делам несовершеннолетних и защите их прав',
        'order': 140,
    },
    {'slug': 'dep-finansov', 'name': 'Департамент финансов', 'order': 150},
    {'slug': 'dep-ekonomicheskogo-razvitiya', 'name': 'Департамент экономического развития', 'order': 160},
    {
        'slug': 'uo-finansovyy-kontrol',
        'name': 'Управление внутреннего муниципального финансового контроля',
        'order': 170,
    },
    {'slug': 'otdel-buhgalterii', 'name': 'Отдел бухгалтерского учёта и отчётности', 'order': 180},
    {'slug': 'dep-obschestvennoy-bezopasnosti', 'name': 'Департамент общественной безопасности', 'order': 190},
    {
        'slug': 'uo-go-chs',
        'name': 'Управление по делам гражданской обороны и чрезвычайным ситуациям',
        'order': 200,
    },
    {'slug': 'otdel-zags', 'name': 'Отдел ЗАГС', 'order': 210},
    {'slug': 'specsluzhba', 'name': 'Специальная служба', 'order': 220},
]

DEPUTIES = [
    {
        'role': 'Первый заместитель главы',
        'surname': 'Марценковский',
        'name': 'Руслан',
        'patronymic': 'Федорович',
        'image': '/images/people/marcenkovskiy.png',
        'order': 10,
        'department_slugs': [
            'dep-vnutrenney-politiki',
            'yuridicheskiy-komitet',
            'uo-it-cifra',
            'uo-municipal-sluzhba',
            'uo-organizacii-deyatelnosti',
        ],
    },
    {
        'role': 'Первый заместитель главы',
        'surname': 'Маркова',
        'name': 'Юлия',
        'patronymic': 'Витальевна',
        'image': '/images/people/markova.png',
        'order': 20,
        'department_slugs': [
            'dep-municipal-imushchestvo',
            'dep-stroitelstvo-zemlya',
            'dep-zhkh-ekologiya',
            'uo-investicii-predprinimatelstvo',
        ],
    },
    {
        'role': 'Заместитель главы',
        'surname': 'Журавская',
        'name': 'Ольга',
        'patronymic': 'Руслановна',
        'image': '/images/people/zhuravskaya.png',
        'order': 30,
        'department_slugs': [
            'dep-obrazovaniya',
            'uo-molodezhnaya-politika',
            'uo-kultury',
            'uo-fizkultury-sport',
            'otdel-komissii-nesovershennoletnih',
        ],
    },
    {
        'role': 'Заместитель главы',
        'surname': 'Нигматуллин',
        'name': 'Максим',
        'patronymic': 'Эдуардович',
        'image': '/images/people/nigmatullin.png',
        'order': 40,
        'department_slugs': [
            'dep-finansov',
            'dep-ekonomicheskogo-razvitiya',
            'uo-finansovyy-kontrol',
            'otdel-buhgalterii',
        ],
    },
    {
        'role': 'Заместитель главы',
        'surname': 'Сидоров',
        'name': 'Павел',
        'patronymic': 'Анатольевич',
        'image': '/images/people/sidorov.png',
        'order': 50,
        'department_slugs': [
            'dep-obschestvennoy-bezopasnosti',
            'uo-go-chs',
            'otdel-zags',
            'specsluzhba',
        ],
    },
]


class Command(BaseCommand):
    help = 'Заполняет органы администрации и заместителей главы начальными данными'

    def handle(self, *args, **options):
        created_departments = 0
        updated_departments = 0

        for item in DEPARTMENTS:
            defaults = {
                'name': item['name'],
                'order': item['order'],
                'intro': DEFAULT_INTRO,
                'vacancy_branch': item['name'],
                'about_paragraphs': item.get('about_paragraphs', ''),
                'units': item.get('units', ''),
                'tasks': item.get('tasks', ''),
                'head_name': item.get('head_name', ''),
                'head_role': item.get('head_role', ''),
                'head_phone': item.get('head_phone', ''),
                'head_email': item.get('head_email', ''),
            }
            _, created = Department.objects.update_or_create(
                slug=item['slug'],
                defaults=defaults,
            )
            if created:
                created_departments += 1
            else:
                updated_departments += 1

        created_deputies = 0
        updated_deputies = 0

        for item in DEPUTIES:
            deputy, created = Deputy.objects.update_or_create(
                surname=item['surname'],
                name=item['name'],
                patronymic=item['patronymic'],
                defaults={
                    'role': item['role'],
                    'image': item['image'],
                    'order': item['order'],
                },
            )
            if created:
                created_deputies += 1
            else:
                updated_deputies += 1

            deputy.deputy_departments.all().delete()
            for order, slug in enumerate(item['department_slugs']):
                department = Department.objects.get(slug=slug)
                DeputyDepartment.objects.create(
                    deputy=deputy,
                    department=department,
                    order=order,
                )

        self.stdout.write(self.style.SUCCESS(
            f'Органы: создано {created_departments}, обновлено {updated_departments}. '
            f'Заместители: создано {created_deputies}, обновлено {updated_deputies}.'
        ))
