from django.urls import path
from . import views

app_name = 'loginPage'
urlpatterns = [
    path(r'', views.loginPage, name='loginPage'),
    
]
