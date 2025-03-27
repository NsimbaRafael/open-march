from django.contrib import admin
from .models import Image, Produto, Servico, OM

# Register your models here.
admin.site.register(Image)
admin.site.register(Produto)
admin.site.register(Servico)
admin.site.register(OM)
