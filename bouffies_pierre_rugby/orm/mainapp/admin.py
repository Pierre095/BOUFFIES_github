from django.contrib import admin

from mainapp.models import Event, Newsletter, Stadium, Team, Ticket, Client

admin.site.register(Event)
admin.site.register(Newsletter)
admin.site.register(Stadium)
admin.site.register(Team)
admin.site.register(Ticket)
admin.site.register(Client)
