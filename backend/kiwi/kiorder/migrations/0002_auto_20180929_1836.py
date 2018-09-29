# Generated by Django 2.1.1 on 2018-09-29 18:36

from django.db import migrations, models
import sortedm2m.fields


class Migration(migrations.Migration):

    dependencies = [
        ('kiorder', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='purchasable',
            name='image',
            field=models.ImageField(null=True, upload_to='images/thumbnail/'),
        ),
        migrations.AlterField(
            model_name='purchasable',
            name='purchasable_options',
            field=sortedm2m.fields.SortedManyToManyField(blank=True, help_text=None, to='kiorder.PurchasableOption'),
        ),
        migrations.AlterField(
            model_name='store',
            name='purchasable_categories',
            field=sortedm2m.fields.SortedManyToManyField(blank=True, help_text=None, to='kiorder.PurchasableCategory'),
        ),
    ]