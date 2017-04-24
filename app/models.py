from django.db import models


class Song(models.Model):
    name = models.CharField(blank=None, max_length=255)
    artist = models.CharField(blank=None, max_length=255)
    lyrics = models.TextField(blank=None)
    chords = models.TextField(blank=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def lines(self):
        return [s.strip() for s in self.lyrics.splitlines()]
