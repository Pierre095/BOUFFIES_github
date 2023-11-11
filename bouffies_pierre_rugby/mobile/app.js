const url_api_event = `http://127.0.0.1:8000/api/events/`;
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
                

                Promise.all([
                    fetch(`http://127.0.0.1:8000/api/stadiums/${event.stadium_id}`),
                    fetch(`http://127.0.0.1:8000/api/teams/${event.team_home_id}`),
                    fetch(`http://127.0.0.1:8000/api/teams/${event.team_away_id}`)
                ])
                .then(responses => Promise.all(responses.map(response => response.json())))
                .then(([stadiumData, teamHomeData, teamAwayData]) => {
                // Formater la date et l'heure côté client
                const eventDate = new Date(event.start);
                const formattedDate = eventDate.toLocaleDateString();
                const formattedTime = eventDate.toLocaleTimeString();


                itemDiv.innerHTML =
                    // `<p class='stade'>Stade : Tokyo</p>
                    // <div class='match'>
                    //     <p class='local'>Local : Angleterre</p>
                    //     <p class='visiteur'>Visiteur : Fidji</p>
                    // </div>
                    // <p class='date_heure'>Heure : 19h30  Date : 12/07/2023</p>`;
                    `<p class='stade'>Stade : ${stadiumData.name}</p>
                    <div class='match'>
                        <p class='local'>Local : ${teamHomeData.country}</p>
                        <p class='visiteur'>Visiteur : ${teamAwayData.country}</p>
                    </div>
                    <p class='date_heure'>Date : ${formattedDate} Heure : ${formattedTime}</p>`;
                })
                itemDiv.classList.add('event');
                itemDiv.setAttribute('data-stadium', event.stadium_id);
                itemDiv.setAttribute('data-team-home', event.team_home_id);
                itemDiv.setAttribute('data-team-away', event.team_away_id);
                itemDiv.setAttribute('data-start', event.start);
                itemDiv.addEventListener('click', loadEvent);
                contentDiv.appendChild(itemDiv);
            });
        } else {
            contentDiv.innerHTML = '<p>Aucune donnée disponible.</p>';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });


    





function loadEvent(event) {
    // Accéder aux attributs personnalisés pour obtenir des informations spécifiques
    const stadium = event.currentTarget.getAttribute('data-stadium');
    const teamHome = event.currentTarget.getAttribute('data-team-home');
    const teamAway = event.currentTarget.getAttribute('data-team-away');
    const start = event.currentTarget.getAttribute('data-start');

    // Exemple d'utilisation des informations spécifiques à chaque événement
    console.log(`Événement chargé - Stade: ${stadium}, Local: ${teamHome}, Visiteur: ${teamAway}, Heure: ${start}`);
}



    // const url_api = `http://127.0.0.1:8000/api/${page}/`;

function loadPage(page) {
    // Construire l'URL de l'API en fonction de la page sélectionnée
    const url_api = `http://127.0.0.1:8000/api/${page}/`;


    // Faire une requête AJAX pour récupérer les données JSON
    fetch(url_api)
        .then(response => response.json())
        .then(data => {
            // Construire le HTML en fonction des données reçues
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = ''; // Effacer le contenu actuel

            if (data[page]) {
                const items = data[page];
                items.forEach(item => {
                    const itemDiv = document.createElement('div');


                // Appeler des API supplémentaires pour obtenir des détails sur les stades et les équipes
                

                    itemDiv.innerHTML = `<h2>${item.id}</h2>
                                <p>${item.name}</p>
                                <p>${item.location}</p>
                                <p>${item.latitude}, ${item.longitude}</p>`;

                    contentDiv.appendChild(itemDiv);
                });
            } else {
                contentDiv.innerHTML = '<p>Aucune donnée disponible.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
}