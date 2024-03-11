document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const backgroundmenu = document.querySelector('.background-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 261) {
            menu.classList.add('scroll');
            backgroundmenu.classList.add('scroll');
        }
        else {
            menu.classList.remove('scroll');
            backgroundmenu.classList.remove('scroll');
        }
        if (window.scrollY <= menu.offsetTop) {
            menu.style.postion = 'fixed';
            menu.style.top = 0;
        }
    });
});

const check = document.getElementById("check")
let imgpicture = document.querySelector('#picture')
let imglogo_nozama = document.querySelector('#img-realisation1')
let imglogo_teamcroquette = document.querySelector('#img-realisation3')

if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
}

const link = document.createElement('link');
link.rel = 'stylesheet';
document.getElementsByTagName('HEAD')[0].appendChild(link);

checkStatus()

function checkStatus() {

    if (localStorage.getItem('darkMode') === "true") {
        check.checked = true;
        link.href = './CSS/common_darkmode.css';
        imgpicture.src = "IMG/logo/logo_sans-fond-blanc.png";
        imglogo_nozama.src = "IMG/realisation/nozama/logo_nozama_sans_fond_blanc.png";
        imglogo_teamcroquette.src = "IMG/realisation/teamcroquette/logo_teamcroquette_sans_fond_blanc.png";

    } else {
        check.checked = false;
        link.href = '';
        imgpicture.src = "IMG/logo/logo_sans-fond-noir.png";
        imglogo_nozama.src = "IMG/realisation/nozama/logo_nozama_sans_fond_noir.png";
        imglogo_teamcroquette.src = "IMG/realisation/teamcroquette/logo_teamcroquette_sans_fond_noir.png";

    }
}

function changeStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        localStorage.setItem('darkMode', "false");
        link.href = '';
        imgpicture.src = "IMG/logo/logo_sans-fond-noir.png";
        imglogo_nozama.src = "IMG/realisation/nozama/logo_nozama_sans_fond_noir.png";
        imglogo_teamcroquette.src = "IMG/realisation/teamcroquette/logo_teamcroquette_sans_fond_noir.png";
    } else {
        localStorage.setItem('darkMode', "true");
        link.href = './CSS/common_darkmode.css';
        imgpicture.src = "IMG/logo/logo_sans-fond-blanc.png";
        imglogo_nozama.src = "IMG/realisation/nozama/logo_nozama_sans_fond_blanc.png";
        imglogo_teamcroquette.src = "IMG/realisation/teamcroquette/logo_teamcroquette_sans_fond_blanc.png";
    }
}


























