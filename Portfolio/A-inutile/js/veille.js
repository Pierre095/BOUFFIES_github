function myFonction(arg1) {
    console.log('-->', arg1);
    let imgpicture = document.querySelector('#picture');
    let paragraphe = document.querySelector('#paragraphe');
    let span = document.querySelector('#span');
    let showmonth = document.querySelector('#Showmonth');


if (arg1==='monthlist'){
    const Showmonth = ["janvier","fevrier","mars","avril"]

    Showmonth.forEach(item =>{
        const newli = document.createElement('li')
        newli.innerText = item;

        constparent = document.querySelector('#Showmonth ')
        showmonth.innerHTML = item
        console.log(item)
    })
    
}
}