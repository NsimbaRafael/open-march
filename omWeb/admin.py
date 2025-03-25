from django.contrib import admin
from .models import Image, Produto, Servico

# Register your models here.
admin.site.register(Image)
admin.site.register(Produto)
admin.site.register(Servico)
