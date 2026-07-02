from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0041_anticorruption_document_categories'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='vacancy_branch',
            field=models.CharField(
                blank=True,
                help_text='ОФО из списка — должно совпадать с подразделением в вакансиях',
                max_length=500,
                verbose_name='Подразделение для вакансий',
            ),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='branch',
            field=models.CharField(
                blank=True,
                help_text='Отраслевой (функциональный) орган из утверждённого списка',
                max_length=255,
                verbose_name='Подразделение',
            ),
        ),
    ]
