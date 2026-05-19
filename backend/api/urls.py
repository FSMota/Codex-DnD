from django.urls import path

from .views import hello_world
from .views import getallbeasts

urlpatterns = [
	path('', hello_world, name='hello_world'),
    path('bestiary/', getallbeasts , name='get_all_beasts'),
]