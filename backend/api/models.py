from django.db import models

class Beast(models.Model):
    name = models.CharField(max_length=100)
    hp = models.IntegerField()
    classe = models.CharField(max_length=50)
    cr = models.IntegerField()

    def __str__(self):
        return self.name