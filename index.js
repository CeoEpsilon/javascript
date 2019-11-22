
let who = ['El perro', 'Mi Abuela', 'Su tortuga', 'Mi Pajaro'];
let what = ['se comió', ' la ensució', ' la dañó', ' la rompió'];
let when = ['antes de clases', 'justo a tiempo', 'Cuando la terminaba', 'mientras almorzaba', 'mientras rezaba'];


function generator() {
    let random = Math.floor(Math.random() * (who.length));
    let whoWord = who[random];
        random = Math.floor(Math.random() * (what.length));
    let whatWord = what[random];
        random = Math.floor(Math.random() * (when.length));
    let whenWord = when[random];
    let finalExcuse = ("¡¡¡ "+ whoWord +" "+ whatWord+" "+ whenWord+" !!!");
    return finalExcuse;
}

document.getElementById('excuse').innerHTML = generator();
