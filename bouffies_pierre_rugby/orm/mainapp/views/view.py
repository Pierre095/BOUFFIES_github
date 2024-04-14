from django.http import JsonResponse, HttpResponseNotFound
from mainapp.models import Stadium, Event, Team, Ticket, Client

def get_stadiums(request, stadium_id):
    try:
        stadium = Stadium.objects.get(id=stadium_id)
    

        stadium_data = {
            "ID": stadium.id,
            "name": stadium.name,
            "location": stadium.location,
            "latitude": stadium.latitude,
            "longitude": stadium.longitude,
            "map": stadium.map,
        }

        response = JsonResponse(stadium_data, safe=False, json_dumps_params={'indent': 2})
        return response
    except Team.DoesNotExist:
        return HttpResponseNotFound("Team not found")

def get_events(request):
    events = Event.objects.all()
    event_list = []
    
    for event in events:
        event_data = {
            "ID": event.id,
            "stadium_id": event.stadium_id,
            "team_home_id": event.team_home_id,
            "team_away_id": event.team_away_id,
            "start": event.start,
        }
        event_list.append(event_data)
    data = {"events": event_list}  
    response = JsonResponse(data, safe=False, json_dumps_params={'indent': 2})
    return response

def get_teams(request, team_id):
    try:
        team = Team.objects.get(id=team_id)

        team_data = {
            "ID": team.id,
            "country": team.country,
            "country_alpha2": team.country_alpha2,
            "nickname": team.nickname,
            "color_first": team.color_first,
            "color_second": team.color_second,
    
        }

        response = JsonResponse(team_data, safe=False, json_dumps_params={'indent': 2})
        return response
    except Team.DoesNotExist:
        return HttpResponseNotFound("Team not found")

def get_tickets(request, ticket_id):
    try:
        ticket = Ticket.objects.get(id=ticket_id)

        ticket_data = {
            "ID": ticket.id,
            "event_id": ticket.event_id,
            "category": ticket.category,
            "seat": ticket.seat,
            "price": ticket.price,
            "currency": ticket.currency,
        }

        response = JsonResponse(ticket_data, safe=False, json_dumps_params={'indent': 2})
        return response
    except Ticket.DoesNotExist:
        return HttpResponseNotFound("Ticket not found")

def get_clients(request, username):
    try:
        client = Client.objects.get(username=username)

        client_data = {
            "clientID": client.id,
            "username": client.username,
            "password": client.password,
            "ticket_id": client.ticket_id,
        }

        response = JsonResponse(client_data, safe=False, json_dumps_params={'indent': 2})
        return response
    except Client.DoesNotExist:
        return HttpResponseNotFound("Client not found")

#id ticket pour test : 0783f40c-1f31-4f93-aa23-63576c0e8074