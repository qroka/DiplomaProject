from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0029_vacancy_subscription_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vacancysubscription',
            name='job_type',
        ),
        migrations.RemoveField(
            model_name='vacancysubscription',
            name='required_experience',
        ),
        migrations.RemoveField(
            model_name='vacancysubscription',
            name='work_schedule',
        ),
        migrations.AlterField(
            model_name='vacancysubscription',
            name='branch',
            field=models.CharField(
                blank=True,
                max_length=255,
                verbose_name='Отраслевой функциональный орган',
            ),
        ),
    ]
