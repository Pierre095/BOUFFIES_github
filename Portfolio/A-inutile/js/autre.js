appel=1
moi = 0
encore_moi = 0
nameShow = true ;
nameShow2 = true ;
function myFonction(arg1) {
    console.log('-->', arg1);
    let imgpicture = document.querySelector('#picture');
    let paragraphe = document.querySelector('#paragraphe');
    let span = document.querySelector('#span');

    appel += 1 ;
    if(appel==30){
        alert("!! Molo tu vas casser ta souris !!")
        appel=0
    }

//    if (arg1==='button') {
//        if(appel%2 == 0){
//            imgpicture.src = "IMG/hero.png";
//        }else{
//            imgpicture.src = "IMG/jeux video.png";
//        }
//    }

    if(arg1==='button'){
    if(nameShow === true){
        nameShow = false
        span.innerText ="Bonjour Pierre" ;
    }else if(nameShow ==+ false){
        nameShow=true
        span.innerText ="Bonjour" ;
    }
}
//    if(arg1==='button'){
//        if(appel%2 == 0){
//            span.innerHTML="Bonjour Pierre"
//        }else{
//            span.innerHTML="Bonjour"
//        }
//    }

    
    if (arg1==='ID') {
        imgpicture.src = "IMG/PhotoID.jpg";
        paragraphe.innerHTML = "Je suis Moi" ;
        moi += 1;
        encore_moi += 1
        if (moi == 1) {
        alert("Jsuis beau ta vu ;)")
        }
        if (encore_moi == 10) {
            alert("Jte le rappel au cas ou mais je suis beau n'est-ce pas ?")
            }

    }
    else if (arg1==='ville') {
        imgpicture.src = "IMG/Marines.jpg";
        paragraphe.innerHTML = "Marines n'apparait qu'au debut du haut Moyen Ã‚ge, il n'est qu'un pauvre village qui vit Ã  l'ombre de la localite voisine de Chars, dont la splendeur de l'eglise Saint-Sulpice reflÃ¨te encore sa prosperite ancienne. En 1250, Marines ne compte que vingt feux, c'est-Ã -dire foyers, et le hameau des Hautiers en compte autant, alors que Chars represente trois cent quarante feux. Les premiers habitants s'etaient installes aux Hautiers, sur le plateau du Caillouet, limite au nord-est par l'antique village du Rosnel, au sud par celui des Hautiers, a ete defriche vers 1050 par les moines du prieure Saint-Nicolas du Rosnel (sur l'actuelle commune de BreanÃ§on, prieure dependant de l'abbaye Saint-Martin de Pontoise et fonde par Drogon du Rosnel. Ces moines obtinrent, Ã  la fin du xiie siÃ¨cle, une partie de la dÃ®me du lieu-dit les Essarts. Les basses pentes du Caillouet sont alors mises en valeur par le captage des sources (Marguerite, Saint-Remyâ€¦) et le drainage des marais (lieu-dit les Glaises) le long des rus de la LevriÃ¨re et du Chesnel (aujourd'hui rue des Hautiers)"
    }
    else if (arg1==='travail') {
        imgpicture.src = "IMG/helpdesk.png";
        paragraphe.innerHTML = "A help desk is a department or person that provides assistance and information usually for electronic or computer problems.[1] In the mid-1990s, research by Iain Middleton of Robert Gordon University[2] studied the value of an organization's help desks. It found that value was derived not only from a reactive response to user issues, but also from the help desk's unique position of communicating daily with numerous customers or employees. Information gained in areas such as technical problems, user preferences, and satisfaction can be valuable for the planning and development work of other information technology units. Large help desks have a person or team responsible for managing the incoming requests, called ``issues``; they are commonly called queue managers or queue supervisors. The queue manager is responsible for the issue queues, which can be set up in various ways depending on the help desk size or structure. Typically, large help desks have several teams that are experienced in working on different issues. The queue manager will assign an issue to one of the specialized teams based on the type of issue raised. Some help desks may have telephone systems with ACD splits ensuring that calls about specific topics are put through to analysts with the requisite experience or knowledge.[3]";
    }
    else if (arg1==='entreprise'){
        imgpicture.src = "IMG/SEE.jpg";
        paragraphe.innerHTML ="Nos equipes de support et de service de proximite, installees en regions, sont Ã  taille humaine, dotees dâ€™une autonomie et dâ€™un pouvoir dâ€™agir pour vous apporter une reponse dans les meilleurs delais. " ;
    }
    else if (arg1==='passions') {
        imgpicture.src = "IMG/chat1.jpg";
        paragraphe.innerHTML = "Dort beaucoup"
    }
    
}



