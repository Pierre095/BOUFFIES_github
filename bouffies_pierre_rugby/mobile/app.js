const url_api_event = `http://127.0.0.1:8000/api/events/`;

// Compteurs pour générer des classes uniques
let classCounter = 1;

fetch(url_api_event)
    .then(response => response.json())
    .then(data => {
        // Construire le HTML en fonction des données reçues
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Effacer le contenu actuel

        if (data['events']) {
            const items = data['events'];
            items.forEach(event => {
                const itemDiv = document.createElement('div');
                const uniqueClass = `event_${classCounter++}`; // Générer une classe unique

                Promise.all([
                    fetch(`http://127.0.0.1:8000/api/stadiums/${event.stadium_id}`),
                    fetch(`http://127.0.0.1:8000/api/teams/${event.team_home_id}`),
                    fetch(`http://127.0.0.1:8000/api/teams/${event.team_away_id}`)
                ])
                    .then(responses => Promise.all(responses.map(response => response.json())))
                    .then(([stadiumData, teamHomeData, teamAwayData]) => {

                        if (stadiumData && teamHomeData && teamAwayData) {
                            const eventDate = new Date(event.start);
                            const formattedDate = eventDate.toLocaleDateString();
                            const formattedTime = eventDate.toLocaleTimeString();

                            itemDiv.innerHTML =
                                `<a id="map" target="_blank" class='stade'>Stade : ${stadiumData.name}</a>
                                <div class='match'>
                                    <p class='local'>Local : ${teamHomeData.country}</p>
                                    <p class='visiteur'>Visiteur : ${teamAwayData.country}</p>
                                </div>
                                <p class='date_heure'>Date : ${formattedDate} Heure : ${formattedTime}</p>`;
                            itemDiv.classList.add('event');
                            itemDiv.setAttribute('data-stadium', event.stadium_id);
                            itemDiv.setAttribute('data-team-home', event.team_home_id);
                            itemDiv.setAttribute('data-team-away', event.team_away_id);
                            itemDiv.setAttribute('data-start', event.start);

                            // Ajouter la classe unique à la div
                            itemDiv.classList.add(uniqueClass);

                            itemDiv.addEventListener('click', function () {
                                // Utiliser uniqueClass ici...
                                loadEvent(uniqueClass);
                            });

                            contentDiv.appendChild(itemDiv);
                        } else {
                            console.error('Données manquantes pour un événement.');
                        }
                    })
                    .catch(log => {
                        console.log('Erreur lors de la récupération des données supplémentaires :', log);
                    });
            });
        } else {
            contentDiv.innerHTML = '<p>Aucune donnée disponible.</p>';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });

function loadEvent(uniqueClass) {
    // Vous pouvez maintenant utiliser uniqueClass comme nécessaire...
    console.log(`Événement chargé pour la classe : ${uniqueClass}`);
    // Accéder aux attributs personnalisés pour obtenir des informations spécifiques
    const stadium = event.currentTarget.getAttribute('data-stadium');
    const teamHome = event.currentTarget.getAttribute('data-team-home');
    const teamAway = event.currentTarget.getAttribute('data-team-away');
    const start = event.currentTarget.getAttribute('data-start');
    console.log(`Événement chargé - Stade: ${stadium}, Local: ${teamHome}, Visiteur: ${teamAway}, Heure: ${start}`);

    // Cacher toutes les divs avec la classe 'event'
    const allEventDivs = document.querySelectorAll('.event');
    allEventDivs.forEach(div => div.classList.add('hide'));

    // Afficher la div spécifique avec la classe unique
    const specificEventDiv = document.querySelector(`.${uniqueClass}`);
    specificEventDiv.classList.remove('hide');
}
