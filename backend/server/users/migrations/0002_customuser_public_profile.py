# Generated by Django 5.0.8 on 2024-09-06 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    
    operations = [
        migrations.AddField(
            model_name='customuser',
            name='public_profile',
            field=models.BooleanField(default=False),
        ),
    ]
