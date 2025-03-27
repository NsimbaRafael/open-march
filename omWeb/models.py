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
    


class OM(models.Model):
    nome = models.CharField(max_length=150)
    ceo = models.CharField(max_length=250)
    ceo_words = models.TextField()
    visao = models.TextField()
    misao = models.TextField()
    objectivo = models.TextField()
    resposabilidade = models.TextField()
    desc_social_network = models.TextField()
    image_ceo = models.ImageField(upload_to='images/')
    
    def __str__(self):
        return self.nome