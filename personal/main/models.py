from django.db import models

# Create your models here.
class Message(models.Model):

    def __str__(self) -> str:
        return self.name
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField(max_length=2000)
