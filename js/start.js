let btnUp=document.getElementById("UpBtn");
let darkImg = document.getElementById("home")
let darkmode = localStorage.getItem('darkmode')
let loading=document.getElementById("Loading")
let themeSwitch = document.getElementById('theme-switch')
let catog = document.getElementById('catog');
let catogTop = catog.offsetTop + 300;
let catog1 = document.querySelector('.mian');
let main = document.querySelector('.main-item')
let oli = document.querySelector(".oli")
let olii = document.querySelector(".olii")


// window.onscroll = function() {
//   if (scrolly > catogTop) {
//     catog1.forEach(el => {
//       el.classList.add('animate__fadeInLeft');
//     });
//   } else {
//     catog1.forEach(el => {
//       el.classList.remove('animate__fadeInLeft');
//     });
//   }
// };
// Up button \\
btnUp.onclick = function () {
    window.scroll(0, 0);
}
window.onscroll = function () {

     if (scrollY > 300) {
                btnUp.style.opacity = "1"

    }
    else {
        btnUp.style.opacity = "0"

    }
}

// loading
// window.onload=function () {
//     loading.style.display="none";
//     document.body.style.overflow='auto';
// }
setTimeout(function () {
    loading.style.display="none";
    document.body.style.overflow='auto';
}, 1000)


// dark mode


let on = () => {
  document.body.classList.add('darkmode');
  document.body.style.backgroundColor = "#2a2a2a";
  darkImg.style.background = "url('../images/image.jpg') center center /cover";
  main.style.box = "0px 10px 30px rgba(255,255,255,0.2)";
  oli.style.background = "#3e3e3e2d";
  olii.style.background = "#3e3e3e2d";

  localStorage.setItem('darkmode', '1');
};

let off = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', '0');
};

let mode = localStorage.getItem('darkmode');
if (mode == '1') on();

themeSwitch.addEventListener('click', () => {
  localStorage.getItem('darkmode') !== '1' ? on() : off();
});

