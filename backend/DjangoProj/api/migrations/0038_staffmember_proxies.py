# Generated manually

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0037_staffreserveposition'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactStaffMember',
            fields=[],
            options={
                'verbose_name': 'Сотрудник',
                'verbose_name_plural': 'Сотрудники',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('api.staffmember',),
        ),
        migrations.CreateModel(
            name='HonorBoardStaffMember',
            fields=[],
            options={
                'verbose_name': 'Лауреат доски почёта',
                'verbose_name_plural': 'Лауреаты доски почёта',
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('api.staffmember',),
        ),
    ]
