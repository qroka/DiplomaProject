# Generated manually

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0034_tender_is_active_documents_label'),
    ]

    operations = [
        migrations.AddField(
            model_name='competitionresult',
            name='competition_type',
            field=models.CharField(
                choices=[
                    ('vacancy', 'На замещение вакантной должности'),
                    ('reserve', 'На формирование кадрового резерва'),
                ],
                default='vacancy',
                max_length=20,
                verbose_name='Тип конкурса',
            ),
        ),
    ]
