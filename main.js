let stars =document.getElementById('stars')
let moon =document.getElementById('moon')
let sun =document.getElementById('sun')
let mountains3 =document.getElementById('mountains3')
let mountains4 =document.getElementById('mountains4')
let river =document.getElementById('river')
let boat =document.getElementById('boat')
let mountains7 =document.getElementById('mountains7')
let code = document.getElementById('code')

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

// let onLine = document.querySelector('.online')
// let offLine = document.querySelector('.offline')
// let body = document.querySelector('body')

// window.onload = function(){
//     if(window.navigator.onLine){
//         online()
//     }
//     else{
//         offline()
//     }
// }

// window.addEventListener("online", function(){
//     online();
// });

// window.addEventListener("offline", function(){
//     offline();
// });

// reload.onclick = function(){
//     window.location.reload()
// }


// function online(){
//     offLine.classList.add('hide');
//     onLine.classList.remove('hide');
//     body.classList.remove('off-body')
// }

// function offline(){

//     offLine.classList.remove('hide');
//     onLine.classList.add('hide');
//     body.classList.add('off-body')
// }


$(window).on('load', function() { // نتأكد من إكتمال الصفحة
    $('#status').delay(3500).fadeOut('slow'); //Loading هنا نقوم بإخفاء عنصر 
    $('#preloader').delay(3500).fadeOut('slow'); //Loading إخفاء عنصر الأب لعنصر  
    $('body').delay(3500).css({'overflow':'visible'});// إظهار جسم الصفحة
});

