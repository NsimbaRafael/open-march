from django.shortcuts import render
from .models import Image, Servico, OM

# Create your views here.
def index(request):
    servico = Servico.objects.all()
    return render(request, 'index.html', {'servicos': servico})

def about_us(request):
    om = OM.objects.all()
    return render(request, 'about_us.html', {'om': om})

def servicesProduct(request):
    servico = Servico.objects.all()
    return render(request, 'produtoServices.html', {'servicos': servico})

def localizacao(request):
    om = OM.objects.all()
    return render(request, 'localizacao.html', {'om': om})

