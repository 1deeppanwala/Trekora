# Generated by Django 5.0.8 on 2024-09-11 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('worldtravel', '0009_alter_country_country_code'),
    ]

    
    operations = [
        migrations.AddField(
            model_name='country',
            name='capital',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
