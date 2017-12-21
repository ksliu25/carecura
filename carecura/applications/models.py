from django.db import models
from users.models import User


class Application(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    child_name = models.CharField(max_length=100, unique=True, blank=False, null=False)
    child_birthday = models.DateField(blank=False, null=False)
    desired_enrollment_date = models.DateField(blank=False, null=False)
    user = models.ForeignKey('users.User', related_name='applications', on_delete=models.CASCADE, null=False)

    class Meta:
        ordering = ('created',)