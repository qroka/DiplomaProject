from django.db import models
from django.core.exceptions import ValidationError


class Tender(models.Model):
    CATEGORY_CHOICES = [
        ('info', 'Информация'),
        ('results', 'Результаты'),
        ('rules', 'Положения и правила'),
    ]

    category = models.CharField('Категория', max_length=20, choices=CATEGORY_CHOICES)
    name = models.CharField('Название', max_length=255)
    link = models.FileField('Файл', upload_to='tenders/')
    is_active = models.BooleanField('Активен', default=True, help_text='Неактивные документы не публикуются на сайте')
    show_on_main_page = models.BooleanField('Показывать на главной странице конкурсов', default=False)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'
        ordering = ['-created_at']

    def __str__(self):
        return f'[{self.get_category_display()}] {self.name}'


class Branch(models.Model):
    name = models.CharField('Название', max_length=255)
    address = models.CharField('Адрес', max_length=255)

    class Meta:
        verbose_name = 'Отдел'
        verbose_name_plural = 'Отделы'

    def __str__(self):
        return self.name


class StaffMember(models.Model):
    name = models.CharField('Имя', max_length=255, blank=True)
    surname = models.CharField('Фамилия', max_length=255, blank=True)
    patronym = models.CharField('Отчество', max_length=255, blank=True)
    phone = models.CharField('Телефон', max_length=20, blank=True)
    email = models.EmailField('Email', blank=True)
    cabinet_number = models.CharField('Номер кабинета', max_length=50, blank=True)
    role = models.CharField('Должность', max_length=255)
    branch = models.ForeignKey(Branch, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Отдел')
    description = models.TextField('Описание', blank=True)
    image = models.ImageField('Фото', upload_to='staff/', blank=True, null=True)
    order = models.PositiveIntegerField('Порядок', default=0)
    is_active = models.BooleanField('Активен', default=True)
    show_on_honorboard = models.BooleanField('Показывать на доске почёта', default=True)
    show_on_contacts = models.BooleanField('Показывать в контактах', default=False)
    is_management_head = models.BooleanField('Начальник управления (блок на странице контактов)', default=False)
    show_on_reserve = models.BooleanField('Показывать в кадровом резерве', default=False)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'
        ordering = ['order']

    def clean(self):
        if self.is_active and self.show_on_reserve:
            raise ValidationError(
                'Сотрудник не может быть одновременно активным и в кадровом резерве'
            )
        if self.is_management_head:
            others = StaffMember.objects.filter(is_management_head=True)
            if self.pk:
                others = others.exclude(pk=self.pk)
            if others.exists():
                raise ValidationError(
                    'Начальником управления может быть только один сотрудник'
                )

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.surname} {self.name} {self.patronym or ""}'.strip()


class ContactStaffMember(StaffMember):
    """Сотрудники для справочника контактов (proxy)."""

    class Meta:
        proxy = True
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'


class HonorBoardStaffMember(StaffMember):
    """Лауреаты доски почёта (proxy)."""

    class Meta:
        proxy = True
        verbose_name = 'Лауреат доски почёта'
        verbose_name_plural = 'Лауреаты доски почёта'


class WorkSchedule(models.Model):
    name = models.CharField('Название', max_length=100)

    class Meta:
        verbose_name = 'График работы'
        verbose_name_plural = 'Графики работы'

    def __str__(self):
        return self.name


class RequiredExperience(models.Model):
    name = models.CharField('Название', max_length=100)

    class Meta:
        verbose_name = 'Требуемый опыт'
        verbose_name_plural = 'Требуемый опыт'

    def __str__(self):
        return self.name


class JobType(models.Model):
    name = models.CharField('Название', max_length=100)

    class Meta:
        verbose_name = 'Тип должности'
        verbose_name_plural = 'Типы должностей'

    def __str__(self):
        return self.name


class WorkingHours(models.Model):
    name = models.CharField('Название', max_length=100)

    class Meta:
        verbose_name = 'Режим работы'
        verbose_name_plural = 'Режимы работы'

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    title = models.CharField('Название', max_length=255) 
    branch = models.CharField('Отдел', max_length=255, blank=True) 
    location = models.CharField('Локация', max_length=255) 
    salary = models.CharField('Зарплата', max_length=255) 
    employment_type = models.CharField('Тип занятости', max_length=100, blank=True) 
    experience = models.CharField('Опыт', max_length=100, blank=True) 
    work_schedule = models.ForeignKey(WorkSchedule, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='График работы')
    required_experience = models.ForeignKey(RequiredExperience, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Требуемый опыт')
    job_type = models.ForeignKey(JobType, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Тип должности')
    is_new = models.BooleanField('Новая вакансия', default=False) 
    description = models.TextField('Описание', blank=True)
    skills = models.TextField('Навыки', blank=True, help_text='Каждый навык с новой строки') 
    working_hours = models.ForeignKey(WorkingHours, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Режим работы')
    is_active = models.BooleanField('Активна', default=True)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class BranchesGlobal(models.Model):
    name = models.CharField('Название', max_length=255)
    link = models.CharField('Ссылка', max_length=500)

    class Meta:
        verbose_name = 'Отдел Администрации'
        verbose_name_plural = 'Все отделы Администрации'
        ordering = ['name']

    def __str__(self):
        return self.name


class AntiCorruptionDocument(models.Model):
    category = models.CharField('Категория', max_length=255)
    name = models.CharField('Название', max_length=255)
    file = models.FileField('Файл', upload_to='anti_corruption_docs/')
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Антикоррупционный документ'
        verbose_name_plural = 'Антикоррупционные документы'
        ordering = ['-created_at']

    def __str__(self):
        return f'[{self.category}] {self.name}'


class AntiCorruptionInfo(models.Model):
    intro = models.TextField(
        'Вводный текст',
        blank=True,
        default='Федеральный закон от 25.12.2008 № 273-ФЗ «О противодействии коррупции» устанавливает '
                'правовые и организационные основы предупреждения и борьбы с коррупцией.',
    )
    work_schedule = models.TextField(
        'График работы УМСКН',
        blank=True,
        default='Понедельник – четверг: 8:30 – 17:30\n'
                'Пятница: 8:30 – 16:15\n'
                'Перерыв: 13:00 – 13:45',
    )
    address = models.TextField(
        'Адрес',
        blank=True,
        default='628408, Ханты-Мансийский автономный округ — Югра, '
                'г. Сургут, ул. 30 лет Победы, д. 45/2',
    )
    officials = models.TextField(
        'Ответственные должностные лица',
        blank=True,
        help_text='Каждый сотрудник с новой строки: ФИО, должность, телефон',
    )
    esia_feedback_url = models.URLField(
        'Ссылка на Платформу обратной связи (ЕСИА)',
        blank=True,
        default='https://pos.gosuslugi.ru/landing/',
    )
    updated_at = models.DateTimeField('Обновлено', auto_now=True)

    class Meta:
        verbose_name = 'Страница «Противодействие коррупции»'
        verbose_name_plural = 'Страница «Противодействие коррупции»'

    def __str__(self):
        return 'Противодействие коррупции'

    @classmethod
    def get_solo(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class CorruptionReport(models.Model):
    full_name = models.CharField('ФИО нарушителя', max_length=255)
    email = models.EmailField('Email')
    message = models.TextField('Сообщение')
    attachment = models.FileField('Вложение', upload_to='corruption_reports/', blank=True, null=True)
    image = models.ImageField('Изображение', upload_to='corruption_images/', blank=True, null=True)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Репорт о коррупции'
        verbose_name_plural = 'Репорты о коррупции'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.full_name} ({self.created_at.strftime("%d.%m.%Y")})'


class JobApplication(models.Model):
    MARITAL_STATUS_CHOICES = [
        ('single', 'Холост/Не замужем'),
        ('married', 'Женат/Замужем'),
        ('divorced', 'Разведен(а)'),
        ('widowed', 'Вдовец/Вдова'),
    ]

    vacancy_title = models.CharField('Вакансия', max_length=255, blank=True)
    last_name = models.CharField('Фамилия', max_length=100)
    first_name = models.CharField('Имя', max_length=100)
    middle_name = models.CharField('Отчество', max_length=100, blank=True)
    birth_date = models.DateField('Дата рождения')
    phone = models.CharField('Телефон', max_length=20)
    email = models.EmailField('Email')
    registration_address = models.TextField('Адрес прописки')
    residence_address = models.TextField('Адрес проживания')
    citizenship = models.CharField('Гражданство', max_length=100)
    education = models.CharField('Образование', max_length=255)
    specialty = models.CharField('Специальность', max_length=255)
    municipal_experience = models.CharField('Стаж муниципальной службы', max_length=255, blank=True)
    work_experience = models.TextField('Трудовая деятельность', blank=True)
    marital_status = models.CharField('Семейное положение', max_length=20, choices=MARITAL_STATUS_CHOICES)
    children = models.CharField('Наличие детей', max_length=255, blank=True)
    photo = models.FileField('Фото', upload_to='photos/', blank=True, null=True)
    resume = models.FileField('Резюме', upload_to='resumes/')
    vacancy_source = models.TextField('Откуда узнал(а)', blank=True)
    created_at = models.DateTimeField('Дата подачи', auto_now_add=True)

    # Required consent checkboxes (applicant must check all before submitting)
    consent_false_info = models.BooleanField(
        'Согласие с последствиями ложных сведений',
        default=False
        
    )
    consent_verification = models.BooleanField(
        'Согласие на проверочные мероприятия',
        default=False
    )
    consent_personal_data = models.BooleanField(
        'Согласие на обработку персональных данных (152-ФЗ)',
        default=False
    )
    consent_resume_forwarding = models.BooleanField(
        'Согласие на направление анкеты в поселения и организации района',
        default=False
    )

    class Meta:
        verbose_name = 'Заявка на вакансию'
        verbose_name_plural = 'Заявки на вакансии'

    def __str__(self):
        return f'{self.last_name} {self.first_name} — {self.vacancy_title or "без вакансии"}'


class Feedback(models.Model):
    message = models.TextField('Сообщение')
    photo = models.ImageField('Фото', upload_to='feedback_photos/', blank=True, null=True)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Обратная связь'
        verbose_name_plural = 'Обратная связь'
        ordering = ['-created_at']

    def __str__(self):
        return f'Обратная связь ({self.created_at.strftime("%d.%m.%Y %H:%M")})'


class VacancySubscription(models.Model):
    name = models.CharField('Имя', max_length=150, blank=True)
    email = models.EmailField('Email')
    branch = models.CharField('Отраслевой функциональный орган', max_length=255, blank=True)
    is_active = models.BooleanField('Активна', default=True)
    created_at = models.DateTimeField('Дата подписки', auto_now_add=True)

    class Meta:
        verbose_name = 'Подписка на вакансии'
        verbose_name_plural = 'Подписки на вакансии'
        ordering = ['-created_at']

    def __str__(self):
        who = self.name.strip() if self.name else self.email
        ofo = self.branch.strip() if self.branch else 'любой ОФО'
        return f'{who} — {ofo} ({self.created_at.strftime("%d.%m.%Y")})'


class Competition(models.Model):
    TYPE_VACANCY = 'vacancy'
    TYPE_RESERVE = 'reserve'
    TYPE_CHOICES = [
        (TYPE_VACANCY, 'На замещение вакантной должности'),
        (TYPE_RESERVE, 'На формирование кадрового резерва'),
    ]

    title = models.CharField('Название', max_length=255)
    competition_type = models.CharField('Тип конкурса', max_length=20, choices=TYPE_CHOICES, default=TYPE_VACANCY)
    content = models.TextField('Содержание (веб-контент)', blank=True)
    date_start = models.DateField('Дата начала приёма документов', null=True, blank=True)
    date_end = models.DateField('Дата окончания приёма документов', null=True, blank=True)
    requirements = models.TextField('Требования', blank=True)
    acceptance_info = models.TextField('Место и время приёма документов', blank=True)
    contact_phones = models.CharField('Телефоны ответственных лиц', max_length=500, blank=True)
    is_active = models.BooleanField('Действующий конкурс', default=True)
    created_at = models.DateTimeField('Дата публикации', auto_now_add=True)

    class Meta:
        verbose_name = 'Конкурс'
        verbose_name_plural = 'Конкурсы'
        ordering = ['-date_end', '-created_at']

    def __str__(self):
        return self.title


class CompetitionResult(models.Model):
    title = models.CharField('Название', max_length=255)
    competition_type = models.CharField(
        'Тип результата',
        max_length=20,
        choices=Competition.TYPE_CHOICES,
        default=Competition.TYPE_VACANCY,
    )
    decree_conduct = models.FileField('Постановление о проведении конкурса', upload_to='competitions/conduct/')
    decree_results = models.FileField('Постановление о результатах конкурса', upload_to='competitions/results/')
    completed_at = models.DateField('Дата завершения', null=True, blank=True)
    created_at = models.DateTimeField('Дата публикации', auto_now_add=True)

    class Meta:
        verbose_name = 'Результат конкурса'
        verbose_name_plural = 'Результаты конкурсов'
        ordering = ['-completed_at', '-created_at']

    def __str__(self):
        return self.title


class StaffReserveInfo(models.Model):
    purpose = models.TextField(
        'Цель формирования кадрового резерва',
        blank=True,
        default='Формирование кадрового резерва направлено на обеспечение администрации '
                'Сургутского района квалифицированными кадрами для замещения вакантных должностей.',
    )
    positions = models.TextField(
        'Должности, на которые формируется резерв',
        blank=True,
        help_text='Каждая должность с новой строки',
    )
    additional_content = models.TextField('Дополнительная информация', blank=True)
    updated_at = models.DateTimeField('Обновлено', auto_now=True)

    class Meta:
        verbose_name = 'Страница «Кадровый резерв»'
        verbose_name_plural = 'Страница «Кадровый резерв»'

    def __str__(self):
        return 'Информация о кадровом резерве'

    @classmethod
    def get_solo(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class StaffReservePosition(models.Model):
    title = models.CharField('Должность', max_length=255)
    description = models.TextField(
        'Описание',
        help_text='Кратко: зона ответственности и требования к кандидату в резерв на эту должность',
    )
    order = models.PositiveIntegerField('Порядок', default=0)
    is_active = models.BooleanField('Показывать на сайте', default=True)
    created_at = models.DateTimeField('Создано', auto_now_add=True)

    class Meta:
        verbose_name = 'Должность кадрового резерва'
        verbose_name_plural = 'Должности кадрового резерва'
        ordering = ['order', 'title']

    def __str__(self):
        return self.title


class YouthInfo(models.Model):
    intro = models.TextField(
        'Вводный текст',
        blank=True,
        default='Раздел предназначен для популяризации муниципальной службы и ранней профориентации.',
    )
    practice_institutions = models.TextField(
        'Учебные заведения (соглашения)',
        blank=True,
        help_text='Каждое учебное заведение с новой строки',
    )
    practice_steps = models.TextField(
        'Этапы: как попасть на практику в АСР',
        blank=True,
        default='1. Определитесь, в каком отраслевом функциональном органе вы хотите проходить практику. '
                'Со структурой администрации можно ознакомиться в разделе [«О нас»](/about#admin-structure).\n'
                '2. Согласуйте прохождение практики с учебным заведением.\n'
                '3. Заполните и отправьте заявку на практику через форму на этой странице.\n'
                '4. Дождитесь ответа специалиста управления муниципальной службы, кадров и наград.',
    )
    internship_content = models.TextField(
        'Стажировка',
        blank=True,
        default='Информация о стажировках будет размещена дополнительно.',
    )
    school_content = models.TextField(
        'Школьникам',
        blank=True,
        default='Информация для школьников будет размещена дополнительно.',
    )
    updated_at = models.DateTimeField('Обновлено', auto_now=True)

    class Meta:
        verbose_name = 'Страница «Муниципальная служба для молодёжи»'
        verbose_name_plural = 'Страница «Муниципальная служба для молодёжи»'

    def __str__(self):
        return 'Муниципальная служба для молодёжи'

    @classmethod
    def get_solo(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class PracticeApplication(models.Model):
    last_name = models.CharField('Фамилия', max_length=100)
    first_name = models.CharField('Имя', max_length=100)
    middle_name = models.CharField('Отчество', max_length=100, blank=True)
    birth_date = models.DateField('Дата рождения')
    phone = models.CharField('Телефон', max_length=20)
    email = models.EmailField('Email')
    educational_institution = models.CharField('Учебное заведение', max_length=255)
    course = models.CharField('Курс', max_length=50)
    specialty = models.CharField('Специальность', max_length=255)
    practice_period = models.CharField('Желаемый период практики', max_length=255)
    preferred_department = models.CharField('Желаемый орган', max_length=255, blank=True)
    comment = models.TextField('Комментарий', blank=True)
    application_letter = models.FileField(
        'Сопроводительное письмо',
        upload_to='practice_applications/',
        blank=True,
        null=True,
    )
    consent_personal_data = models.BooleanField(
        'Согласие на обработку персональных данных (152-ФЗ)',
        default=False,
    )
    created_at = models.DateTimeField('Дата подачи', auto_now_add=True)

    class Meta:
        verbose_name = 'Заявка на практику'
        verbose_name_plural = 'Заявки на практику'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.last_name} {self.first_name} — {self.educational_institution}'


class TrainingEvent(models.Model):
    TYPE_TRAINING = 'training'
    TYPE_LEADERSHIP = 'leadership'
    TYPE_MASTERCLASS = 'masterclass'
    TYPE_BEST_PRACTICE = 'best_practice'
    TYPE_CHOICES = [
        (TYPE_TRAINING, 'Обучающее мероприятие'),
        (TYPE_LEADERSHIP, 'Встреча с руководством'),
        (TYPE_MASTERCLASS, 'Мастер-класс'),
        (TYPE_BEST_PRACTICE, 'Лучшая практика'),
    ]

    title = models.CharField('Название', max_length=255)
    event_type = models.CharField('Тип', max_length=20, choices=TYPE_CHOICES, default=TYPE_TRAINING)
    description = models.TextField('Описание', blank=True)
    event_date = models.DateTimeField('Дата и время')
    location = models.CharField('Место проведения', max_length=255, blank=True)
    is_published = models.BooleanField('Опубликовано', default=True)
    created_at = models.DateTimeField('Создано', auto_now_add=True)

    class Meta:
        verbose_name = 'Обучающее мероприятие'
        verbose_name_plural = 'Обучающие мероприятия'
        ordering = ['event_date']

    def __str__(self):
        return f'{self.title} ({self.event_date.strftime("%d.%m.%Y")})'


class TrainingFeedback(models.Model):
    name = models.CharField('Имя', max_length=150, blank=True)
    department = models.CharField('Подразделение', max_length=255, blank=True)
    message = models.TextField('Предложение')
    created_at = models.DateTimeField('Дата отправки', auto_now_add=True)

    class Meta:
        verbose_name = 'Предложение по обучению'
        verbose_name_plural = 'Предложения по обучению'
        ordering = ['-created_at']

    def __str__(self):
        label = self.name or 'Анонимно'
        return f'{label} ({self.created_at.strftime("%d.%m.%Y %H:%M")})'


class Department(models.Model):
    slug = models.SlugField('URL-идентификатор', max_length=100, unique=True)
    name = models.CharField('Название', max_length=500)
    intro = models.TextField(
        'Краткое описание',
        blank=True,
        default='Отраслевой (функциональный) орган администрации Сургутского района обеспечивает '
                'реализацию полномочий в своей сфере деятельности и взаимодействует с жителями района.',
    )
    about_paragraphs = models.TextField(
        'О деятельности',
        blank=True,
        help_text='Каждый абзац с новой строки',
    )
    units = models.TextField(
        'Структурные подразделения',
        blank=True,
        help_text='Каждое подразделение с новой строки',
    )
    tasks = models.TextField(
        'Задачи',
        blank=True,
        help_text='Каждая задача с новой строки',
    )
    head_name = models.CharField('Руководитель: ФИО', max_length=255, blank=True)
    head_role = models.CharField('Руководитель: должность', max_length=255, blank=True)
    head_phone = models.CharField('Руководитель: телефон', max_length=255, blank=True)
    head_email = models.EmailField('Руководитель: email', blank=True)
    phone = models.CharField('Телефон', max_length=255, blank=True)
    email = models.EmailField('Email', blank=True)
    image = models.ImageField('Фото', upload_to='departments/', blank=True, null=True)
    vacancy_branch = models.CharField(
        'Название для вакансий',
        max_length=500,
        blank=True,
        help_text='Должно совпадать с полем «Отдел» в вакансиях',
    )
    is_published = models.BooleanField('Опубликовано', default=True)
    order = models.PositiveIntegerField('Порядок', default=0)
    updated_at = models.DateTimeField('Обновлено', auto_now=True)

    class Meta:
        verbose_name = 'Орган администрации'
        verbose_name_plural = 'Органы администрации'
        ordering = ['order', 'name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.vacancy_branch:
            self.vacancy_branch = self.name
        super().save(*args, **kwargs)


class Deputy(models.Model):
    role = models.CharField('Должность', max_length=255)
    surname = models.CharField('Фамилия', max_length=100)
    name = models.CharField('Имя', max_length=100)
    patronymic = models.CharField('Отчество', max_length=100)
    image = models.CharField(
        'Фото (URL или путь)',
        max_length=500,
        blank=True,
        help_text='Например: /images/people/markova.png',
    )
    order = models.PositiveIntegerField('Порядок', default=0)
    is_published = models.BooleanField('Опубликовано', default=True)
    departments = models.ManyToManyField(
        Department,
        through='DeputyDepartment',
        related_name='deputies',
        verbose_name='Органы',
    )

    class Meta:
        verbose_name = 'Заместитель главы'
        verbose_name_plural = 'Заместители главы'
        ordering = ['order', 'surname']

    def __str__(self):
        return f'{self.surname} {self.name} {self.patronymic}'


class DeputyDepartment(models.Model):
    deputy = models.ForeignKey(
        Deputy,
        on_delete=models.CASCADE,
        related_name='deputy_departments',
        verbose_name='Заместитель',
    )
    department = models.ForeignKey(
        Department,
        on_delete=models.CASCADE,
        verbose_name='Орган',
    )
    order = models.PositiveIntegerField('Порядок', default=0)

    class Meta:
        verbose_name = 'Орган заместителя'
        verbose_name_plural = 'Органы заместителей'
        ordering = ['order']
        unique_together = [['deputy', 'department']]

    def __str__(self):
        return f'{self.deputy} — {self.department}'


class NewsPost(models.Model):
    title = models.CharField('Заголовок', max_length=255)
    description = models.TextField('Краткое описание')
    content = models.TextField('Полный текст', blank=True)
    image = models.ImageField('Изображение', upload_to='news/', blank=True, null=True)
    published_at = models.DateField('Дата публикации')
    is_published = models.BooleanField('Опубликовано', default=True)
    show_on_main = models.BooleanField('Показывать на главной', default=True)
    order = models.PositiveIntegerField('Порядок', default=0, help_text='Меньшее число — выше в списке')
    created_at = models.DateTimeField('Создано', auto_now_add=True)
    updated_at = models.DateTimeField('Обновлено', auto_now=True)

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['order', '-published_at']

    def __str__(self):
        return self.title
