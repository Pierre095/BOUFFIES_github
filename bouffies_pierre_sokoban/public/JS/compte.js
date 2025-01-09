document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/get-username')
        .then(response => {
            if (!response.ok) {
                throw new Error('Problème lors de la récupération des données');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('nomUtilisateur').textContent = data.username;
            document.getElementById('userId').textContent = data.PlayerID;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        });

    // Fonction pour récupérer le meilleur temps et le temps total pour un niveau donné
    function recupererEtAfficherMeilleurTemps(niveauId) {
        return fetch(`/api/dernier-temps?niveauId=${niveauId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`La récupération du meilleur temps pour le niveau ${niveauId} a échoué`);
                }
                return response.json();
            })
            .then(data => {
                if (data.MeilleurTemps === 99999999.99) {
                    document.getElementById(`meilleurTemps${niveauId}`).textContent = 'Pas encore de temps';
                } else {
                    document.getElementById(`meilleurTemps${niveauId}`).textContent = data.MeilleurTemps + 's' || 'Erreur lors de la récupération';
                }
                // Retourne le temps total pour ce niveau, 0 si non disponible
                return parseFloat(data.TempsTotal) || 0;
            })
            .catch(error => {
                console.error(error);
                document.getElementById(`meilleurTemps${niveauId}`).textContent = 'Pas de meilleur temps';
                return 0; // Retourne 0 en cas d'erreur
            });
    }

    // Récupérer et afficher les meilleurs temps pour tous les niveaux
    const niveaux = [1, 2, 3, 4, 5, 6, 7, 8]; // Supposons que vous avez 8 niveaux
    Promise.all(niveaux.map(niveauId => recupererEtAfficherMeilleurTemps(niveauId)))
        .then(tempsTotals => {
            const tempsTotal = tempsTotals.reduce((acc, temps) => acc + temps, 0);
            document.getElementById('tempsTotal').textContent = tempsTotal.toFixed(2) + 's';
        });
});


jQuery(document).ready(function($) {

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function() {
        moveLeft();
    });

    $('a.control_next').click(function() {
        moveRight();
    });

});