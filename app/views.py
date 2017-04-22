from django.http import HttpResponse
from django.shortcuts import render

from app.models import Song


def index(request):
    all_songs_list = Song.objects.order_by('-created_at')[:5]
    context = {'all_songs_list': all_songs_list}
    return render(request, 'app/index.html', context)
