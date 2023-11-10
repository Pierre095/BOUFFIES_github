const url_api = `http://127.0.0.1:8000/api/events/`;
fetch(url_api)
    .then(response => response.json())
    .then(data => {
        // Construire le HTML en fonction des données reçues
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Effacer le contenu actuel

        if (data['events']) {
            const items = data['events'];
            items.forEach(event => {
                const itemDiv = document.createElement('div');
                
                itemDiv.innerHTML = `
                    <p class='stade'>${event.stadium_id}</p>
                        <p class='local'>${event.team_home_id}</p>
                        <p class='visiteur>${event.team_away_id}</p>
                    <p class='date_heure'>${event.start}</p>`;

                itemDiv.classList.add('event');

                contentDiv.appendChild(itemDiv);
            });
        } else {
            contentDiv.innerHTML = '<p>Aucune donnée disponible.</p>';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });


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