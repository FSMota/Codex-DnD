from django.http import JsonResponse
from .models import Beast

def get_all_beasts(request):
    # Pega todos os registros do banco e transforma em uma lista de dicionários
    data = list(Beast.objects.values())
    
    # safe=False é necessário para serializar listas em JSON
    return JsonResponse(data, safe=False)