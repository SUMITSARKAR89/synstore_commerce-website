// ================navBar menu control===============

const navBarOpen = document.querySelector(".navBaropen");
const navBarClose = document.querySelector(".navBarclose");
const navBarLink = document.querySelector(".navBar-link");
const navBar = document.querySelector("#navBar");

navBarOpen.addEventListener("click", () => {
    navBarOpen.style.display = "none";
    navBarClose.style.display = "block";
    navBarLink.style.display = "flex";
    navBar.style.width = "600px";
});
navBarClose.addEventListener("click", () => {
    navBarOpen.style.display = "block";
    navBarClose.style.display = "none";
     navBarLink.style.display = "none";
     navBar.style.width = "450px";
});

// ================scrollbar system control===============

window.onscroll = function(){
    scrollbarNavigation();
};
function scrollbarNavigation(){
    const headCard = document.querySelector(".head-card");
    const head = document.querySelector(".head");
    const navBar2 = document.querySelector("#navBar");

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop >40){
        headCard.style.opacity = "0";
        head.style.opacity = "0";
        navBar2.style.display = "flex";
        navBar2.style.opacity = "1";
    }else{
        headCard.style.opacity = "1";
        head.style.opacity = "1";
         navBar2.style.display = "none";
         navBar2.style.opacity = "0";
    }
};

// ================wheel slider system control===============

const reviewSlider = document.querySelector('.review-slider');
const sliderPrev = document.querySelector('#w-leftBtn');
const sliderNext = document.querySelector('#w-rightBtn');

reviewSlider.addEventListener('wheel', (i) => {
    i.preventDefault();
    reviewSlider.scrollLeft += i.deltaY;
    reviewSlider.style.scrollBehaviour = "auto";
});

sliderNext.addEventListener('click', () => {
    reviewSlider.style.scrollBehaviour = "smooth";
    reviewSlider.scrollLeft += 1200;

});
sliderPrev.addEventListener('click', () => {
    reviewSlider.style.scrollBehaviour = "smooth";
    reviewSlider.scrollLeft += -1200;

});