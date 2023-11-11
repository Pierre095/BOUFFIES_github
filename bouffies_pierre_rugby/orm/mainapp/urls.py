from django.urls import path
# Import des URLs de l'interface d'administration
from django.contrib import admin
# Import des vues qui sont déclarées dans leur propre module (dossier)
from .views import HomeView, StadiumsView, TeamsView, NewsletterView, UpdateView, MoreView
from .views import get_stadiums, get_teams, get_events, get_tickets

urlpatterns = (
    path("", HomeView.as_view(), name="home"),
    path("stadiums", StadiumsView.as_view(), name="stadiums"),
    path("teams", TeamsView.as_view(), name="teams"),
    path("newsletter", NewsletterView.as_view(), name="newsletter"),
    path("update", UpdateView.as_view(), name="update"),
    path("more", MoreView.as_view(), name="more"),
    # Dans un cadre de projet réel, il serait préférable d'utiliser une URL moins prévisible que "admin"
    path("admin", admin.site.urls),
    path('api/stadiums/<stadium_id>', get_stadiums, name='stadiums-list'),
    path('api/events/', get_events, name='events-list'),
    path('api/teams/<team_id>', get_teams, name='teams-list'),
    path('api/tickets/<ticket_id>/', get_tickets, name='ticket'),
)
