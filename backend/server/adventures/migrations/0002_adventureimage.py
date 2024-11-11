# Generated by Django 5.0.8 on 2024-08-15 23:17

import django.db.models.deletion
import django_resized.forms
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adventures', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AdventureImage',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('image', django_resized.forms.ResizedImageField(crop=None, force_format='WEBP', keep_meta=True, quality=75, scale=None, size=[1920, 1080], upload_to='images/')),
                ('adventure', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='adventures.adventure')),
                ('user_id', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]