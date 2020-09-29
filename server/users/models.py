from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from stdimage import StdImageField

from .managers import CustomUserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):

    def avatar_directory_path(instance, filename):
        return 'users/user_{0}'.format(instance.CustomUser.id)

    username = models.CharField(max_length=32, unique=True, blank=True)
    first_name = models.CharField('First name', max_length=64, blank=True)
    last_name = models.CharField('Last name', max_length=64, blank=True)
    email = models.EmailField(_('Email address'), unique=True)
    avatar = StdImageField(upload_to=avatar_directory_path,
                           variations={'thumbnail': (100, 100)}, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=True)
    last_visit = models.DateTimeField(auto_now=True, editable=True)

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'

    objects = CustomUserManager()

    def __str__(self):
        return '%s %s %s %s' % (self.first_name, self.last_name, self.username, self.email)

    class Meta:
        verbose_name = u'User'
        verbose_name_plural = u'Users'
