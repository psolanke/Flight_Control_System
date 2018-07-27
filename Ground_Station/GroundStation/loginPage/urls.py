from django.urls import path
from . import views

app_name = 'loginPage'
urlpatterns = [
    path(r'', views.LoginPage.as_view(), name='loginPage'),
    
]
