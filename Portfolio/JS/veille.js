function textwriter() {
    const contentDiv = document.querySelector('.typing_effect');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = 'MA <span class="mot_page_typing">VEILLE</span> PORTERA SUR LES <span class="mot_page_typing">CRYPTOMONNAIES</span>';
}

setTimeout(() => {
    textwriter()
}, 500);

sortArticles({ target: { value: "note" } })

//Fonction qui servira à trié par note date alphabet les article de veille



function sortArticles(event) {

    const sortType = event.target.value;
    const articlesList = document.querySelectorAll(".article");
    const articlesArray = Array.from(articlesList);

    articlesArray.sort((a, b) => {
        switch (sortType) {
            case "alpha":
                const titleA = a.querySelector(".article .titre").textContent;
                const titleB = b.querySelector(".article .titre").textContent;
                return titleA.localeCompare(titleB);

            case "date":
                const dateA = new Date(a.querySelector(".date").getAttribute("data-date"));
                const dateB = new Date(b.querySelector(".date").getAttribute("data-date"));
                return dateB - dateA;

            case "note":
                const noteA = parseFloat(a.querySelector(".note").getAttribute("data-note"));
                const noteB = parseFloat(b.querySelector(".note").getAttribute("data-note"));
                return noteB - noteA;

            default:
                return 0;
        }
    });

    const articleList = document.querySelector(".article-list");
    articlesArray.forEach((article, index) => {
        article.style.order = index; // Changez visuellement l'ordre des éléments en utilisant l'attribut order
        articleList.appendChild(article);
    });
}



function affiche_detail(arg) {
    let image_detail = document.querySelector('.img_paragraphe_detail .image');
    let paragraphe_detail = document.querySelector('.img_paragraphe_detail .paragraphe');
    let titre_detail = document.querySelector('.titre_article_detail');

    if (arg === 'article_1') {
        console.log('yes')
        titre_detail.innerHTML = `<a target="blink" href="https://www.bfmtv.com/crypto/blockchain/cryptomonnaies-societe-generale-emet-sa-premiere-obligation-verte-numerique-sur-ethereum_AV-202312040529.html">CRYPTOMONNAIES: SOCIÉTÉ GÉNÉRALE ÉMET SA PREMIÈRE OBLIGATION VERTE NUMÉRIQUE SUR ETHEREUM</a>`
        image_detail.src = `IMG/veille/image_article_1.png`
        paragraphe_detail.innerHTML = `
        Les banques explorent une nouvelle technologie appelée blockchain, qui est comme un grand livre numérique sécurisé.
        Plutôt que de l'utiliser uniquement pour les cryptomonnaies, elles créent des jetons numériques pour représenter des choses comme des obligations 
        (sorte de prêts financiers).`
    }

    if (arg === 'article_2') {
        console.log('yes')
        titre_detail.innerHTML = `<a target="blink" href="https://journalducoin.com/nft/nft-et-environnement-demeler-le-vrai-du-faux/">NFT ET ENVIRONNEMENT : DÉMÊLER LE VRAI DU FAUX</a>`
        image_detail.src = `IMG/veille/image_article_2.png`
        paragraphe_detail.innerHTML = `En 2021, Joanie Lemercier a découvert l'empreinte carbone des NFT via des recherches personnelles et un article de Memo Akten. 
        Ce constat a donné naissance au mouvement Clean NFT, incitant à utiliser des consensus moins énergivores. Malgré la transition d'Ethereum vers la preuve d'enjeu en 
        septembre 2022, les préoccupations environnementales persistent dans l'industrie crypto et NFT.`
    }

    if (arg === 'article_3') {
        console.log('yes')
        titre_detail.innerHTML = `<a target="blink" href="https://fr.cryptonews.com/news/suncontract-nft-energie-solaire.htm">SunContract, le projet qui permet de transformer ses NFT en énergie solaire</a>`
        image_detail.src = `IMG/veille/image_article_3.png`
        paragraphe_detail.innerHTML = `SunContract utilise la blockchain pour faciliter les échanges d'énergie solaire entre producteurs et consommateurs, 
        éliminant les intermédiaires. Débuté en Slovénie en 2015, il s'étend désormais à toute l'Europe. La plateforme va introduire les NFT, permettant la 
        tokenisation des panneaux solaires et offrant aux détenteurs une part des revenus. Son objectif est d'apporter de la liquidité à un marché en demande.`
    }

    if (arg === 'article_4') {
        console.log('yes')
        titre_detail.innerHTML = `<a target="blink" href="https://www.radiofrance.fr/franceinter/projets-environnementaux-finances-par-des-cryptomonnaies-des-millions-d-euros-perdus-dans-la-nature-4183513">Projets environnementaux financés par des cryptomonnaies : où sont passés les millions d'euros ?</a>`
        image_detail.src = `IMG/veille/image_article_4.png`
        paragraphe_detail.innerHTML = `Des investisseurs envisagent de porter plainte pour "escroquerie" contre une start-up qui promettait des investissements environnementaux 
        et sociaux via des cryptomonnaies. Seuls trois projets ont été concrétisés sur les nombreux annoncés, laissant les investisseurs insatisfaits. La start-up, désormais Erable, 
        refuse de répondre aux accusations et met en avant les projets réalisés, malgré les doutes sur ses méthodes et l'absence de transparence quant à l'utilisation des fonds.`
    }

    if (arg === 'article_5') {
        console.log('yes')
        titre_detail.innerHTML = `<a target="blink" href="https://trustmyscience.com/demande-electricite-centres-donnees-double-2026-ia/">La demande d’électricité des centres de données devrait doubler d’ici 2026</a>`
        image_detail.src = `IMG/veille/image_article_5.png`
        paragraphe_detail.innerHTML = `La demande croissante en électricité due aux centres de données, à l'IA et aux cryptomonnaies nécessite des solutions pour réduire l'impact 
        environnemental, comme l'efficacité énergétique et l'utilisation des énergies renouvelables. Cependant, des politiques énergétiques adaptées sont également nécessaires pour 
        encadrer cette transition vers une consommation d'énergie plus durable et pour soutenir les efforts des gestionnaires de centres de données dans leur quête de solutions plus
        respectueuses de l'environnement.`
    }

    if (arg === 'article_6') {
        console.log('yes')
        titre_detail.innerHTML = ``
        image_detail.src = `IMG/veille/gif-veille.gif`
        paragraphe_detail.innerHTML = `La veille technologique, élément de la veille stratégique, consiste à surveiller les
        évolutions
        techniques, les innovations dans un secteur d’activité donnée. La veille technologique comprend
        notamment la surveillance, la collecte, le partage et la diffusion d’information permettant d’anticiper
        ou de s’informer sur des changements en matière de recherche, développement, brevet, lancement de
        nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc…. Cela a pour but
        d’évaluer l’impact sur l’environnement et l’organisation.`
    }





    const clic_article = document.querySelector('.article_details_hide');
    const fleche_retour = document.querySelector('.fleche_retour_hide');
    clic_article.classList.remove('article_details_hide');
    clic_article.classList.add('article_details_show');
    fleche_retour.classList.remove('fleche_retour_hide');
    fleche_retour.classList.add('fleche_retour_show');
}

function retour() {
    const clic_article = document.querySelector('.article_details_show');
    const fleche_retour = document.querySelector('.fleche_retour_show');
    clic_article.classList.add('article_details_hide');
    clic_article.classList.remove('article_details_show');
    fleche_retour.classList.add('fleche_retour_hide');
    fleche_retour.classList.remove('fleche_retour_show');
}











