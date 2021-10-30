from django.urls import path
from .views import ListNote, DetailNote


urlpatterns = [
    path('', ListNote.as_view(), name='list-notes'),
    path('<int:pk>', DetailNote.as_view(), name='detail-note'),
]
