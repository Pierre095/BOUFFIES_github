function estUtilisateurConnecte() {
    // Vérifie si la clé 'isLoggedIn' existe dans le stockage local et si elle est vraie
    return localStorage.getItem('isLoggedIn') === 'true';
}

document.addEventListener('DOMContentLoaded', (event) => {
    const choixCompte = document.getElementById('choixCompte');
    if (choixCompte) { // S'assure que l'élément existe
        choixCompte.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche l'action par défaut de l'élément

            if (estUtilisateurConnecte()) {
                console.log('Utilisateur connecté, redirection vers compte.html');
                window.location.href = 'compte.html';
            } else {
                console.log('Utilisateur non connecté, redirection vers login.html');
                window.location.href = 'login.html';
            }
        });
    }
});

const boutonDeconnexion = document.getElementById('boutonDeconnexion');
boutonDeconnexion.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('ticket_id');
    // Redirection immédiate vers la page de déconnexion réussie
    window.location.href = 'index.html';
});


document.addEventListener('DOMContentLoaded', () => {
    // Récupérer l'ID du ticket stocké dans localStorage
    const ticket = localStorage.getItem('ticket_id');

    // Vérifiez si ticket n'est pas null avant de l'utiliser
    if (ticket) {
        console.log("L'ID du ticket est :", ticket);
        // Vous pouvez maintenant utiliser la variable 'ticket' pour d'autres opérations
        const qrCode = document.getElementById('qrCodeImage');

        qrCode.src = `IMG/QRCODE/qrcode_${ticket}.png`; // Configurer l'image du QR code
        qrCode.style.display = 'block'; // S'assurer que l'image est visible
    } else {
        console.log("Aucun ticket_id trouvé dans localStorage.");
        // Gérer le cas où aucun ticket_id n'est trouvé ou initialiser les valeurs par défaut
    }
});

