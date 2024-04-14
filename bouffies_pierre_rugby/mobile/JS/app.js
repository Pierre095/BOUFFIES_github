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


// pas au point mais je garde pour amélioration


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
    const detailsDiv = document.querySelector('.content_details_show');


    detailsDiv.innerHTML = `
        <a id="map" target="_blank" class='stade'><strong>Stade</strong> : ${stadium}</a>
        <div class='match'>
            <p class='local'>Local : <strong> ${teamHome}</strong></p>
            <p class='visiteur'>Visiteur : <strong> ${teamAway}</strong></p>
        </div>
        <p class='date'>Date : <strong> ${start}</strong></p>
        <p class='heure'>Heure : <strong> ${start}</strong>`;
}

// complémentaire avec la fonction loadevent

function retour() {
    const clicContentDiv = document.querySelector('.content_details_show');
    const flecheRetour = document.querySelector('.fleche_retour_show');
    clicContentDiv.classList.add('content_details_hide');
    clicContentDiv.classList.remove('content_details_show');
    flecheRetour.classList.add('fleche_retour_hide');
    flecheRetour.classList.remove('fleche_retour_show');
}





document.getElementById('formConnexion').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi traditionnel du formulaire

    const username = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;

    // Construire l'URL avec l'username
    const urlWithUsername = `http://127.0.0.1:8000/api/client/${username}`;

    // Faire une requête pour obtenir les informations du client
    fetch(urlWithUsername)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Échec de la récupération des informations du client, statut = ${response.status}`);
            }
            return response.json();
        })
        .then(clientData => {
            // Ici, vous vérifieriez le mot de passe
            // ATTENTION: Cela devrait être fait de manière sécurisée et idéalement sur le serveur!
            if (clientData.password === password) { // Cette vérification DOIT être remplacée par une méthode plus sécurisée
                window.location.href = 'connexion-reussi.html'; // Redirection vers la page de succès
            } else {
                console.log(clientData);
                alert('Le mot de passe est incorrect.');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue: ' + error.message);
        });
});





document.addEventListener('DOMContentLoaded', (event) => {
    const ticket_id = clientData.ticket_id;
    const qrCode = document.getElementById('qrCodeImage');
    const ticket = document.getElementById('ticket_id');

    fetch(urlWithUsername)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Échec de la récupération des informations du client, statut = ${response.status}`);
            }
            return response.json();
        })
        .then(clientData => {

            ticket.innerHTML = 'voici l id du ticket', ticket_id

            if (clientData.ticket_id === '22757c35-5264-4863-b936-fda521438115') {
                qrCode.src = `IMG/qrcode.png`
            } else if (clientData.ticket_id === '7d73929a-f6a2-4996-96c1-eb9ae2df70d3') {
                qrCode.src = `IMG/qrcode.png`
            } else if (clientData.ticket_id === '26d0206f-ff64-4182-aee9-1028d189ebd8') {
                qrCode.src = `IMG/qrcode.png`
            } else if (clientData.ticket_id === '45d75237-f682-4189-95b8-4bd5b1634b77') {
                qrCode.src = `IMG/qrcode.png`
            } else if (clientData.ticket_id === '01bf3108-e004-4722-8a85-d384cb2262ea') {
                qrCode.src = `IMG/qrcode.png`
            } else if (clientData.ticket_id === '0783f40c-1f31-4f93-aa23-63576c0e8074') {
                qrCode.src = `IMG/qrcode.png`
            }
            // Ici, vous vérifieriez le mot de passe
            // ATTENTION: Cela devrait être fait de manière sécurisée et idéalement sur le serveur!

        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue: ' + error.message);
        });


});

