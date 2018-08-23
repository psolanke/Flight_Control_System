from django.urls import path
from . import views

app_name = 'backend'
urlpatterns = [
    path('arm', views.ArmDevice.as_view(), name='armAPI'),
    path('takeoff', views.TakeOff.as_view(), name='takeOffAPI'),
    path('land', views.Land.as_view(), name='landAPI')
]
