function textwriter(){
    const contentDiv = document.querySelector('.typing_effect');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = 'BONJOUR, <span class="mot_page_typing">BIENVENUE</span> SUR LE <span class="mot_page_typing">PORTFOLIO </span>DE <span class="mot_page_typing">PIERRE BOUFFIES </span> ';
    }
    
    setTimeout(() => {
        textwriter()
    }, 500);