from django.db import models
from django.core.exceptions import ValidationError


class Tender(models.Model):
    CATEGORY_CHOICES = [
        ('info', 'Информация о тендерах'),
        ('results', 'Результаты тендеров'),
        ('rules', 'Правила тендеров'),
    ]

    category = models.CharField('Категория', max_length=20, choices=CATEGORY_CHOICES)
    name = models.CharField('Название', max_length=255)
    link = models.FileField('Файл', upload_to='tenders/')
    show_on_main_page = models.BooleanField('Показывать на главной странице тендеров', default=False)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    class Meta:
        verbose_name = 'Тендер'
        verbose_name_plural = 'Тендеры'
        ordering = ['-created_at']

    def __str__(self):
        return f'[{self.get_category_display()}] {self.name}'


class Branch(models.Model):
    name = models.CharField('Название', max_length=255)
    address = models.CharField('Адрес', max_length=255)

    class Meta:
        verbose_name = 'Отделение'
        verbose_name_plural = 'Отделения'

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
    branch = models.ForeignKey(Branch, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Отделение')
    description = models.TextField('Описание', blank=True)
    image = models.ImageField('Фото', upload_to='staff/', blank=True, null=True)
    order = models.PositiveIntegerField('Порядок', default=0)
    is_active = models.BooleanField('Активен', default=True)
    show_on_honorboard = models.BooleanField('Показывать на доске почёта', default=True)
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

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.surname} {self.name} {self.patronym or ""}'.strip()


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
