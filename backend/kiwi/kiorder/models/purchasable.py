from django.db import models
from sortedm2m.fields import SortedManyToManyField

from .mixins import UserOwnable, FranchiseOwnable
from .purchasable_option import PurchasableOption

class Purchasable(UserOwnable, FranchiseOwnable):
    name = models.CharField(max_length=255)
    base_price = models.DecimalField(max_digits=19, decimal_places=10)

    image = models.ImageField(upload_to="images/thumbnail/", null=True)

    purchasable_options = SortedManyToManyField(PurchasableOption, blank=True)

    def __str__(self):
        return self.name

