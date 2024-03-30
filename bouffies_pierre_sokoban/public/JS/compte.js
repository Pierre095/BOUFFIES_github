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


    document.addEventListener('DOMContentLoaded', () => {
        fetch(`/api/dernier-temps?niveauId=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps1').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps1').textContent = 'Erreur lors de la récupération';
            });

            fetch(`/api/dernier-temps?niveauId=2`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps2').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps2').textContent = 'Erreur lors de la récupération';
            });

            fetch(`/api/dernier-temps?niveauId=3`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps3').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps3').textContent = 'Erreur lors de la récupération';
            });

            fetch(`/api/dernier-temps?niveauId=4`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps4').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps4').textContent = 'Erreur lors de la récupération';
            });

            fetch(`/api/dernier-temps?niveauId=5`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps5').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps5').textContent = 'Erreur lors de la récupération';
            });

            fetch(`/api/dernier-temps?niveauId=6`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps6').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps6').textContent = 'Erreur lors de la récupération';
            });

            fetch(`/api/dernier-temps?niveauId=7`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps7').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps7').textContent = 'Erreur lors de la récupération';
            });

            fetch(`/api/dernier-temps?niveauId=8`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('La récupération du MeilleurTemps a échoué');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('meilleurTemps8').textContent = data.MeilleurTemps || 'Pas de meilleur temps';
            })
            .catch(error => {
                console.error(error);
                document.getElementById('meilleurTemps8').textContent = 'Erreur lors de la récupération';
            });
    });