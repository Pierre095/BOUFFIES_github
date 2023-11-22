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
                                `<a id="map" target="_blank" class='stade'><strong>Stade</strong> : ${stadiumData.name}</a>
                                <div class='match'>
                                    <p class='local'>Local : <strong> ${teamHomeData.country}</strong></p>
                                    <p class='visiteur'>Visiteur : <strong> ${teamAwayData.country}</strong></p>
                                </div>
                                <p class='date'>Date : <strong> ${formattedDate}</strong></p>
                                <p class='heure'>Heure : <strong> ${formattedTime}</strong></p>`
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
                            itemDiv.innerHTML =
                                `<a id="map" target="_blank" class='stade'><strong>Stade</strong> : ${stadiumData.name}</a>
                                <div class='match'>
                                    <p class='local'>Local : <strong> ? </strong></p>
                                    <p class='visiteur'>Visiteur : <strong> ? </strong></p>
                                </div>
                                <p class='date'>Date : <strong> ${formattedDate}</strong></p>
                                <p class='heure'>Heure : <strong> ${formattedTime}</strong></p>`
                        }
                    })
            });
        } else {
            contentDiv.innerHTML = '<p>Aucune donnée disponible.</p>';
        }
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

    clic_contentDiv = document.querySelector('.content_details_hide');
    fleche_retour = document.querySelector('.fleche_retour_hide');
    clic_contentDiv.classList.add('content_details_show');
    clic_contentDiv.classList.remove('content_details_hide');
    fleche_retour.classList.add('fleche_retour_show');
    fleche_retour.classList.remove('fleche_retour_hide');


    const itemDiv = document.getElementById('content_details_show');
    itemDiv.innerHTML =
                `<a id="map" target="_blank" class='stade'><strong>Stade</strong> : ${stadium}</a>
                <div class='match'>
                <p class='local'>Local : <strong> ${teamHome}</strong></p>
                <p class='visiteur'>Visiteur : <strong> ${teamAway}</strong></p>
                </div>
                <p class='date'>Date : <strong> ${start}</strong></p>
                <p class='heure'>Heure : <strong> ${start}</strong></p>`












}



function retour() {
    clic_contentDiv = document.querySelector('.content_details_show');
    fleche_retour = document.querySelector('.fleche_retour_show');
    clic_contentDiv.classList.add('content_details_hide');
    clic_contentDiv.classList.remove('content_details_show');
    fleche_retour.classList.add('fleche_retour_hide');
    fleche_retour.classList.remove('fleche_retour_show');
}
