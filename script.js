let litera0 = document.querySelector('#zero');
let litera1 = document.querySelector('#jeden');
let litera2 = document.querySelector('#dwa');
let litera3 = document.querySelector('#trzy');
let litera4 = document.querySelector('#cztery');
let string;
let input0 = document.querySelectorAll('input');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let pytanie = document.querySelector('#pytanie');

const slownik = new Map;
slownik.set('większe naczynie do picia herbaty?', 'kubek');
slownik.set('zewnętrzna osłona jaj robaków?', 'kokon');
slownik.set('kaktus rodzaj roślin południowych części USA?', 'agawa');
slownik.set('samiec z grzebiacych?','kogut');
slownik.set('znak zodiaku','baran');
slownik.set('zagraża światu?','covid');
slownik.set('substancja powłokotwórcza','farba');
slownik.set('do odpoczynku w ogrodzie','hamak');
slownik.set('zasłonięte lub czyste','niebo');
slownik.set('nie tylko w włoskim piecu','pizza');

const kartki = slownik.entries();
const a = (kartki.next().value)
const b = (kartki.next().value)
const c = (kartki.next().value)
const d = (kartki.next().value)
const e = (kartki.next().value)
const f = (kartki.next().value)
const g = (kartki.next().value)
const h = (kartki.next().value)
const i = (kartki.next().value)
const j= (kartki.next().value)

const karty = [a, b, c,d,e,f,g,h,i,j]
var haslo = karty[Math.floor(Math.random() * karty.length)]
console.log(haslo[0])
console.log(haslo[1])

let wybierz = btn1.addEventListener('click', (e) => {
    
    
    pytanie.innerHTML = haslo[0];
    string = new String(haslo[1]);
})
let start=Date.now()
input0.forEach(pole => {
    pole.addEventListener('input', (e) => {
        let znak = e.target.value;

        if (znak === string[0]) {
            litera0.innerHTML = znak;
        }
        if (znak === string[1]) {
            litera1.innerHTML = znak;
        }
        if (znak === string[2]) {
            litera2.innerHTML = znak;
        }
        if (znak === string[3]) {
            litera3.innerHTML = znak;
        }
        if (znak === string[4]) {
            litera4.innerHTML = znak;
        }
        if (litera0.textContent + litera1.textContent + litera2.textContent + litera3.textContent + litera4.textContent == string) {
            let stop=Date.now()
            let wynik=(stop-start)/1000;
           
            pytanie.innerHTML = `<div class="blink_me">BRAWO ZGADŁEŚ w czasie${wynik}s</div>`;
            setTimeout("window.location.reload()", 1500);
        }
    })
})

