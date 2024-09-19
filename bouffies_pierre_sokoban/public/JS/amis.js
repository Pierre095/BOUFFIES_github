document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/get-amis')
        .then(response => response.json())
        .then(amis => {
            const liste = document.getElementById('listeAmis');
            if (amis.length > 0) {
                amis.forEach(ami => {
                    const amiElement = document.createElement('div');
                    amiElement.innerHTML = `Nom d'utilisateur: ${ami.Username} (ID: ${ami.PlayerID})`;
                    liste.appendChild(amiElement);
                });
            } else {
                liste.innerHTML = 'Vous n\'avez pas encore d\'amis ajoutés.';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des amis:', error);
            document.getElementById('listeAmis').innerHTML = 'Erreur lors de la récupération des amis.';
        });
});

function rechercherAmi() {
    const amiId = document.getElementById('amiId').value;
    fetch(`/rechercher-ami?id=${amiId}`)
        .then(response => response.json())
        .then(data => {
            if (data.Username) {
                document.getElementById('resultatRecherche').innerHTML =
                    `Nom d'utilisateur: ${data.Username} 
                <button onclick="ajouterAmi(${amiId})">+</button>`;
            } else {
                document.getElementById('resultatRecherche').innerHTML = 'Aucun ami trouvé avec cet ID.';
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            document.getElementById('resultatRecherche').innerHTML = 'Erreur lors de la recherche.';
        });
}

function ajouterAmi(amiId) {
    fetch('/api/ajouter-ami', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amiId: amiId })
    })
        .then(response => {
            if (response.ok) {
                alert('Ami ajouté avec succès!');
            } else {
                alert('Échec de l\'ajout de l\'ami');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
}
