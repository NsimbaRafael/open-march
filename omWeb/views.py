from django.shortcuts import render
from .models import Image, Servico

# Create your views here.
def index(request):
    servico = Servico.objects.all()
    return render(request, 'index.html', {'servicos': servico})

def about_us(request):
    teste = Image.objects.all()
    return render(request, 'about_us.html', {'testes': teste})

def servicesProduct(request):
    return render(request, 'produtoServices.html')

def localizacao(request):
    return render(request, 'localizacao.html')

