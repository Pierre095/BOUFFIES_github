
from django.db import models
from django.contrib.auth.hashers import check_password

class Client(models.Model):

    username = models.CharField(max_length=191, unique=True)
    password = models.CharField(max_length=255)
    ticket_id = models.CharField(max_length=255)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)