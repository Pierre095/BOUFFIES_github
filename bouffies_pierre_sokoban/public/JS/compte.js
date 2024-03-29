document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/get-username')
        .then(response => {
            if (!response.ok) {
                throw new Error('La récupération du username a échoué');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('nomUtilisateur').textContent = data.username || 'utilisateur inconnu';
        })
        .catch(error => {
            console.error(error);
            document.getElementById('nomUtilisateur').textContent = 'Erreur lors de la récupération';
        });
});