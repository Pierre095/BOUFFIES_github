function textwriter(){
const contentDiv = document.querySelector('.typing_effect');
contentDiv.innerHTML = '';
contentDiv.innerHTML = 'ET, ENFIN VOICI LE <span class="mot_page_typing">BILAN</span> DE MON <span class="mot_page_typing">ÉVOLUTION</span>';
}

setTimeout(() => {
    textwriter()
}, 500);
