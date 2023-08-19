let stars =document.getElementById('stars')
let moon =document.getElementById('moon')
let sun =document.getElementById('sun')
let mountains3 =document.getElementById('mountains3')
let mountains4 =document.getElementById('mountains4')
let river =document.getElementById('river')
let boat =document.getElementById('boat')
let mountains7 =document.getElementById('mountains7')
let code = document.getElementById('code')
let cards = document.getElementById('move')

window.onscroll = function(){
    let v = scrollY
    stars.style.left = v/2 + 'px';
    moon.style.top = v*4 + 'px';
    mountains3.style.top = v*2 +'px';
    mountains4.style.top = v*1.6 + 'px';
    river.style.top = v + 'px';
    boat.style.top = v + 'px';
    boat.style.left = v*3 + 'px';
    code.style.fontSize = v + 'px';
    cards.style.left = v +'px';
}