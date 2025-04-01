FROM php:8-apache

# Mainteneur de l'image
MAINTAINER Thomas ESIEE "monmail@mail.com"

# Copier les fichiers sources de l'application dans le conteneur
COPY src/ /var/www/html/

# Exposer le port 80 pour accéder au serveur Apache
EXPOSE 80

# Lancer Apache en mode foreground
CMD ["apache2-foreground"]
