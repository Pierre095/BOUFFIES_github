from django.db import models

class Stadium(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    map = models.CharField(max_length=256, db_collation='utf8mb4_unicode_ci', blank=True, null=True)
    def __str__(self):
        return f"{self.name} ({self.location})"

    def boundingbox(self):
        return f"{float(self.longitude)-0.002},{float(self.latitude)-0.002},{float(self.longitude)+0.002},{float(self.latitude)+0.002}"
