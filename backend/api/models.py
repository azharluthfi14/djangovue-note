from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'notes'
        ordering = ("created_at",)
