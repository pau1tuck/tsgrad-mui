from django.db import models
from django.conf import settings


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=128)
    content = models.TextField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               related_name='post', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
