function scan() {
    let varinput = document.getElementById("scan-img");
    let imginput = varinput.files[0];

    if (imginput) {
        QrScanner.scanImage(imginput)
            .then(async result => {
                // Appelez l'API avec l'ID extrait du QR code
                const ticketId = result;
                const apiUrl = `http://127.0.0.1:8000/api/tickets/${ticketId}`;

                try {
                    const response = await fetch(apiUrl);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const ticketData = await response.json();
                    displayTicketInfo(ticketData);
                } catch (error) {
                    console.error('Error fetching ticket information:', error);
                    alert('Erreur lors de la récupération des informations du billet.');
                }
            });
    }
}

function displayTicketInfo(ticketData) {
    const contentDiv = document.getElementById("content");
    contentDiv.style.display = 'block';
    contentDiv.innerHTML = `
        <div class='event'>
            <div class ='event-id'>
                <p>Event ID : <strong>${ticketData.event_id}</strong></p>
            </div>
            <div class ='category'>
                <p>Categorie : <strong>${ticketData.category}</strong></p>
            </div>
        </div>
        <p class='seat'>Place : <strong>${ticketData.seat}</strong></p>
        <p class='price'>Prix : <strong>${ticketData.price} ${ticketData.currency}</strong></p>`;
}


//team away
//team local
//date-heure
//stadiums
//prix
//place