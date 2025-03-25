from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about_us/', views.about_us, name='about_us'),
    path('servicesProduct/', views.servicesProduct, name='servicesProduct'),
    path('localizacao/', views.localizacao, name='localizacao'),
    
]