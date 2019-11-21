//const element = document.getElementById('excuse');
//const sum = 2 * 2 * 2;


let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];


function generator() {
    let whoRandom = Math.floor(Math.random() * (who.length));
    let whoWord = who[whoRandom];
    let whatRandom = Math.floor(Math.random() * (what.length));
    let whatWord = what[whatRandom];
    let whenRandom = Math.floor(Math.random() * (when.length));
    let whenWord = when[whenRandom];
    let finalExcuse = console.log(whoWord +" "+ whatWord +" "+ whenWord);
    return finalExcuse;
}

//element.innerHTML = generator()
console.log(generator());