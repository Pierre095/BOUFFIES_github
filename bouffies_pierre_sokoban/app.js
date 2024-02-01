const check = document.getElementById("check")
let imgpicture = document.querySelector('#picture');

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
        link.href = 'style_darkmode.css';

    } else {
        check.checked = false;
        link.href = '';
    }
}

function changeStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        localStorage.setItem('darkMode', "false");
        link.href = '';
    } else {
        localStorage.setItem('darkMode', "true");
        link.href = 'style_darkmode.css';
    }
}