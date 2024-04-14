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