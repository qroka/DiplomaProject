from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0028_news_posts'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancysubscription',
            name='name',
            field=models.CharField(blank=True, max_length=150, verbose_name='Имя'),
        ),
    ]
