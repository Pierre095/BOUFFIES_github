from django.http import JsonResponse
from mainapp.models import Stadium, Event, Team, Ticket

def get_stadiums(request):
    stadiums = Stadium.objects.all()
    
    stadium_list = []
    
    for stadium in stadiums:
        stadium_data = {
            "ID": stadium.id,
            "name": stadium.name,
            "location": stadium.location,
            "latitude": stadium.latitude,
            "longitude": stadium.longitude,
        }
        stadium_list.append(stadium_data)
    data = {"stadiums": stadium_list}  
    response = JsonResponse(data, safe=False, json_dumps_params={'indent': 2})
    return response

def get_events(request):
    events = Event.objects.all()
    # data = {"liste des stades :" : list(events.values())}
    # return JsonResponse(data)
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

def get_teams(request):
    teams = Team.objects.all()
    team_list = []
    
    for team in teams:
        team_data = {
            "ID": team.id,
            "country": team.country,
            "country_alpha2": team.country_alpha2,
            "nickname": team.nickname,
            "color_first": team.color_first,
            "color_second": team.color_second,
        }
        team_list.append(team_data)
    data = {"stadiums": team_list}  
    response = JsonResponse(data, safe=False, json_dumps_params={'indent': 2})
    return response


def get_tickets(request):
    tickets = Ticket.objects.all()
    
    ticket_list = []
    
    for ticket in tickets:
        ticket_data = {
            "ID": ticket.id,
            "event_id": ticket.event_id,
            "category": ticket.category,
            "seat": ticket.seat,
            "price": ticket.price,
            "currency": ticket.currency,
        }
        ticket_list.append(ticket_data)
    data = {"tickets": ticket_list}  
    response = JsonResponse(data, safe=False, json_dumps_params={'indent': 2})
    return response


