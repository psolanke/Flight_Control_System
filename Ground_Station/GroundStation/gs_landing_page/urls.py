from django.urls import path
from . import views

app_name = 'gs_landing_page'
urlpatterns = [
    path(r'', views.default, name='default'),    
]
