function textwriter(){
    const contentDiv = document.querySelector('.typing_effect');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = 'VOICI MON ENTREPRISE<span class="mot_page_typing"> SERVICE EXPERT ENTREPRISE</span> ';
    }
    
    setTimeout(() => {
        textwriter()
    }, 500);