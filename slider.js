const sliderBox = document.querySelector('.conteiner-img');
const slides = sliderBox.querySelectorAll('.imgs-container');
const btnPrev = sliderBox.querySelector('.sağ');
const sol = sliderBox.querySelector('.sol');
let counter = 0;


sol.addEventListener('click', function() {
    console.log('Next');
    slides[counter].classList.toggle('slider__item--current');
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    console.log(counter);
    slides[counter].classList.toggle('slider__item--current');
});
btnPrev.addEventListener('click', function() {
    console.log('Prev');
    slides[counter].classList.toggle('slider__item--current');
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    console.log(counter);
    slides[counter].classList.toggle('slider__item--current');
});



/*------------------Deneme------------*/

// var imgs = document.getElementsByClassName("imgs-container");
// var imgscontainer = fotograflar.children;

// imgscontainer[0].style.marginTop = "0px";
// imgscontainer[1].style.marginTop = "-1450px";
// imgscontainer[2].style.marginTop = "-1450px";
// imgscontainer[3].style.marginTop = "-1450px";


// var slider = 0;

// function tikla(opr) {
//     if (opr === "+") {
//         var imgs = document.getElementsByClassName("imgs-container");
//         imgs[slider].style.transform = "translateX(-1450px)";
//         slider < imgs.length ? slider++ : slider = 0;
//     } else {}
// }



// var fotograflar = document.getElementsByClassName("imgs")[0];
// var foto = fotograflar.children;

// foto[0].style.marginTop = "0px";
// foto[1].style.marginTop = "-1450px";
// foto[2].style.marginTop = "-1450px";
// foto[3].style.marginTop = "-1450px";



// function tikla() {
//     var sayac = 0;
//     var fotograflar = document.getElementsByClassName("imgs")[0];
//     var foto = fotograflar.children;

//     for (var i = 0; i < foto.length; i++) {
//         if (foto[i].style.marginTop = "-1450px") {

//             foto[i].style.marginTop = "0px";
//             foto[i].style.transition = "0.5s";
//             sayac++;
//         }

//     }

// foto[0].style.marginTop = "-1450px";
// foto[1].style.marginTop = "0px";

// for (var i = 0; i < foto.length; i++) {
//     if (i > 0) {
//         foto[1].style.marginBottom = "0px";
//     } else {
//         foto[0].style.marginTop = "-1450px";
//     }
// }








// }