from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0042_vacancy_branch_subdivision_labels'),
    ]

    operations = [
        migrations.CreateModel(
            name='StaffReserveDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Название')),
                ('file', models.FileField(upload_to='staff_reserve/documents/', verbose_name='Файл')),
                (
                    'is_active',
                    models.BooleanField(
                        default=True,
                        help_text='Неактивные документы не публикуются на сайте',
                        verbose_name='Активен',
                    ),
                ),
                ('order', models.PositiveIntegerField(default=0, verbose_name='Порядок')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')),
            ],
            options={
                'verbose_name': 'Документ кадрового резерва',
                'verbose_name_plural': 'Документы кадрового резерва',
                'ordering': ['order', '-created_at'],
            },
        ),
    ]
