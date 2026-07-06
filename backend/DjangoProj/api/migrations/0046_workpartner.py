from django.db import migrations, models


PARTNERS = [
    {
        'name': 'Фонд социального страхования',
        'url': 'https://lk.fss.ru/',
        'logo_path': '/Icons/i-custom-fss.svg',
        'order': 1,
    },
    {
        'name': 'Министерство труда России',
        'url': 'https://mintrud.gov.ru',
        'logo_path': '/Icons/i-custom-mintrud.svg',
        'order': 2,
    },
    {
        'name': 'Администрация Сургутского района',
        'url': 'https://admsr.ru',
        'logo_path': '/Icons/i-custom-admsr.svg',
        'order': 3,
    },
    {
        'name': 'Администрация города Сургута',
        'url': 'https://admsurgut.ru',
        'logo_path': '/Icons/i-custom-admsur.svg',
        'order': 4,
    },
]


def seed_work_partners(apps, schema_editor):
    WorkPartner = apps.get_model('api', 'WorkPartner')
    if WorkPartner.objects.exists():
        return

    for item in PARTNERS:
        WorkPartner.objects.create(**item, is_active=True)


def unseed_work_partners(apps, schema_editor):
    WorkPartner = apps.get_model('api', 'WorkPartner')
    WorkPartner.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0045_moderator_group'),
    ]

    operations = [
        migrations.CreateModel(
            name='WorkPartner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('url', models.CharField(max_length=500, verbose_name='Ссылка')),
                (
                    'logo_file',
                    models.ImageField(
                        blank=True,
                        help_text='Загрузите PNG, SVG или JPG. Имеет приоритет над путём к статичному файлу.',
                        null=True,
                        upload_to='partners/logos/',
                        verbose_name='Логотип (файл)',
                    ),
                ),
                (
                    'logo_path',
                    models.CharField(
                        blank=True,
                        help_text='Например /Icons/i-custom-fss.svg — используется, если файл не загружен.',
                        max_length=500,
                        verbose_name='Логотип (путь на сайте)',
                    ),
                ),
                ('order', models.PositiveIntegerField(default=0, verbose_name='Порядок')),
                ('is_active', models.BooleanField(default=True, verbose_name='Показывать на главной')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
            ],
            options={
                'verbose_name': 'Партнёр',
                'verbose_name_plural': 'С нами работают',
                'ordering': ['order', 'name'],
            },
        ),
        migrations.RunPython(seed_work_partners, unseed_work_partners),
    ]
