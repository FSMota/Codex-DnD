from django.http import JsonResponse


def hello_world(request):
    return JsonResponse({"message": "Hello, World!"})

def getallbeasts(request):
    beasts = [
        {"name": "Goblin", "challenge_rating": 0.25},
        {"name": "Orc", "challenge_rating": 0.5},
        {"name": "Troll", "challenge_rating": 5},
    ]
    return JsonResponse(beasts, safe=False)