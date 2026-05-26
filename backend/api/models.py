from django.db import models

class Beast(models.Model):
    creature_type = models.CharField(max_length=100)
    challenge_level = models.IntegerField()
    armor_class = models.IntegerField()
    hit_points = models.IntegerField()
    actions = models.TextField()

#21:29Claude respondeu: O str é um método especial do Python (chamado de dunder method — "double underscore") 
#que define como o objeto é representado como texto quando você tenta impr…O __str__ é um método especial do Python 
#(chamado de dunder method — "double underscore") 
#que define como o objeto é representado como texto quando você tenta imprimi-lo ou convertê-lo em string.
def __str__(self):

    #O f indica uma f-string (formatted string), 
    #um recurso do Python que permite inserir variáveis diretamente dentro de uma string usando {}.
    return (
        f"Creature: {self.creature_type} | "
        f"Level: {self.challenge_level} | "
        f"AC: {self.armor_class} | "
        f"HP: {self.hit_points} | "
        f"Actions: {self.actions}"
    )
    
    
    