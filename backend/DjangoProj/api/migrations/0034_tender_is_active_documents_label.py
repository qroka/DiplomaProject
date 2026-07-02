# Generated manually

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0033_staffmember_is_management_head'),
    ]

    operations = [
        migrations.AddField(
            model_name='tender',
            name='is_active',
            field=models.BooleanField(
                default=True,
                help_text='Неактивные документы не публикуются на сайте',
                verbose_name='Активен',
            ),
        ),
        migrations.AlterField(
            model_name='tender',
            name='category',
            field=models.CharField(
                choices=[
                    ('info', 'Информация'),
                    ('results', 'Результаты'),
                    ('rules', 'Положения и правила'),
                ],
                max_length=20,
                verbose_name='Категория',
            ),
        ),
        migrations.AlterField(
            model_name='tender',
            name='show_on_main_page',
            field=models.BooleanField(
                default=False,
                verbose_name='Показывать на главной странице конкурсов',
            ),
        ),
        migrations.AlterModelOptions(
            name='tender',
            options={
                'ordering': ['-created_at'],
                'verbose_name': 'Документ',
                'verbose_name_plural': 'Документы',
            },
        ),
    ]
