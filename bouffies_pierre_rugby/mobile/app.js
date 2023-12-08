const url_api_event = `http://127.0.0.1:8000/api/events/`;

let classCounter = 1;

fetch(url_api_event)
    .then(response => response.json())
    .then(data => {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';

        if (data['events']) {
            const items = data['events'];
            items.forEach(event => {
                const itemDiv = document.createElement('div');
                const uniqueClass = `event_${classCounter++}`;
                const fetchStadium = fetch(`http://127.0.0.1:8000/api/stadiums/${event.stadium_id}`)
                    .then(response => response.json());
                const fetchTeamHome = fetch(`http://127.0.0.1:8000/api/teams/${event.team_home_id}`)
                    .then(response => response.json())
                    .catch(error => null); // Capture l'erreur, mais continue l'exécution
                const fetchTeamAway = fetch(`http://127.0.0.1:8000/api/teams/${event.team_away_id}`)
                    .then(response => response.json())
                    .catch(error => null); // Capture l'erreur, mais continue l'exécution

                Promise.all([fetchStadium, fetchTeamHome, fetchTeamAway])
                    .then(([stadiumData, teamHomeData, teamAwayData]) => {
                        const eventDate = new Date(event.start);
                        const formattedDate = eventDate.toLocaleDateString();
                        const formattedTime = eventDate.toLocaleTimeString();
                        const teamHomeCountry = teamHomeData ? teamHomeData.country : 'Non-défini';
                        const teamAwayCountry = teamAwayData ? teamAwayData.country : 'Non-défini';
                        const teamHomeColorFirst = teamHomeData ? teamHomeData.color_first : '414141';
                        const teamHomeColorSecond = teamHomeData ? teamHomeData.color_second : 'cbcbcb';
                        const teamAwayColorFirst = teamAwayData ? teamAwayData.color_first : 'cbcbcb';
                        const teamAwayColorSecond = teamAwayData ? teamAwayData.color_second : 'a8a8a8';


                        itemDiv.innerHTML = `
                        
                            <div class="team-color" style="background : linear-gradient(0.25turn,#${teamHomeColorFirst},#${teamHomeColorSecond},#${teamAwayColorFirst},#${teamAwayColorSecond} )"></div>
                            
                            <a id="map" target="_blank" class='stade'><strong>Stade</strong> : ${stadiumData ? stadiumData.name : 'Informations non disponibles'}</a>
                            <div class='match'>
                                <div class ='local'>
                                    <p><strong>${teamHomeCountry}</strong></p>
                                </div>
                                <div class ='visiteur'>
                                    <p><strong>${teamAwayCountry}</strong></p>
                                </div>
                            </div>
                            <p class='date'>Date <strong>: ${formattedDate}</strong></p>
                            <p class='heure'>Heure <strong>: ${formattedTime}</strong>`;

                        itemDiv.classList.add('event', uniqueClass);
                        itemDiv.setAttribute('data-stadium', stadiumData ? stadiumData.name : 'N/A');
                        itemDiv.setAttribute('data-team-home', teamHomeCountry);
                        itemDiv.setAttribute('data-team-away', teamAwayCountry);
                        itemDiv.setAttribute('data-start', event.start);
                        itemDiv.addEventListener('click', function () {
                            loadEvent(uniqueClass);
                        });
                        contentDiv.appendChild(itemDiv);
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des données :', error);

                    });
                contentDiv.appendChild(itemDiv);
            });
        } else {
            contentDiv.innerHTML = '<p>Aucune donnée disponible.</p>';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });







function loadEvent(uniqueClass) {
    console.log(`Événement chargé pour la classe : ${uniqueClass}`);
    const itemDiv = document.querySelector(`.${uniqueClass}`);
    const stadium = itemDiv.getAttribute('data-stadium');
    const teamHome = itemDiv.getAttribute('data-team-home');
    const teamAway = itemDiv.getAttribute('data-team-away');
    const start = itemDiv.getAttribute('data-start');

    console.log(`Événement chargé - Stade: ${stadium}, Local: ${teamHome}, Visiteur: ${teamAway}, Heure: ${start}`);

    const clicContentDiv = document.querySelector('.content_details_hide');
    const flecheRetour = document.querySelector('.fleche_retour_hide');
    clicContentDiv.classList.add('content_details_show');
    clicContentDiv.classList.remove('content_details_hide');
    flecheRetour.classList.add('fleche_retour_show');
    flecheRetour.classList.remove('fleche_retour_hide');

    const detailsDiv = document.getElementById('content_details_show');
    detailsDiv.innerHTML = `
        <a id="map" target="_blank" class='stade'><strong>Stade</strong> : ${stadium}</a>
        <div class='match'>
            <p class='local'>Local : <strong> ${teamHome}</strong></p>
            <p class='visiteur'>Visiteur : <strong> ${teamAway}</strong></p>
        </div>
        <p class='date'>Date : <strong> ${start}</strong></p>
        <p class='heure'>Heure : <strong> ${start}</strong>`;
}







function retour() {
    const clicContentDiv = document.querySelector('.content_details_show');
    const flecheRetour = document.querySelector('.fleche_retour_show');
    clicContentDiv.classList.add('content_details_hide');
    clicContentDiv.classList.remove('content_details_show');
    flecheRetour.classList.add('fleche_retour_hide');
    flecheRetour.classList.remove('fleche_retour_show');
}
