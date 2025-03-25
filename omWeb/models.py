from django.db import models

class Image(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title
    
class Servico(models.Model):
    nome = models.CharField(max_length=150)
    desc = models.TextField()
    image = models.ImageField(upload_to='images/')
    
    def __str__(self):
        return self.nome
    

class Produto(models.Model):
    nome = models.CharField(max_length=150)
    desc = models.TextField()
    image = models.ImageField(upload_to='images/')
    
    def __str__(self):
        return self.nome