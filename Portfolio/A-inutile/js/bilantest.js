

function button_bilan(arg2) {
    console.log('-->', arg2);
    let imgpicture = document.querySelector('#image');
    let paragraphe = document.querySelector('#compétence');

    if (arg2 === 'organisation') {
        imgpicture.src = "IMG/organisation.jpg";
        paragraphe.innerHTML = " le premier paragraphe d'une longue liste"

    } else if (arg2 === 'travail dequipe') {
        imgpicture.src = "IMG/travail_equipe.jpg";
        paragraphe.innerHTML = " un deuxieme paragrape qui dit plein de chose"

    } else if (arg2 === 'autonomie') {
        imgpicture.src = "IMG/autonomie.jpg";
        paragraphe.innerHTML = " un paragraphe tres long en effet ...."

    } else if (arg2 === 'progres technique') {
        imgpicture.src = "IMG/techno.jpg";
        paragraphe.innerHTML = " il y a beaucoup de mot pour juste un paragraphe"

    } else if (arg2 === 'evolution') {
        imgpicture.src = "IMG/evolution.jpg";
        paragraphe.innerHTML = "l'avant dernier on y est presque"

    } else if (arg2 === 'confiance') {
        imgpicture.src = "IMG/confiance.jpg";
        paragraphe.innerHTML = "enfin le dernier pfiou ... j'avais mal aux mains"

    }
}
