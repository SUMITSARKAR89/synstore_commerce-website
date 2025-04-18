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

// ================faq control===============
const faqContent = document.querySelectorAll(".faq-content");

faqContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
})


// =================================== product ==================
const buttonsOne = document.querySelectorAll(".btn_one");

buttonsOne.forEach((btn) => {
    btn.addEventListener('click', () => {

        buttonsOne.forEach((btn) => {
            btn.classList.remove("active-one");
        });
        btn.classList.add("active-one");
    });
});

const contentOne = document.querySelectorAll(".slideOne-content");


function filterSelectionOne(category) {
    // Show all if category is 'all', otherwise filter by category
    contentOne.forEach((a) => {
      if (category === "all" || a.classList.contains(category)) {
        a.classList.add('active-one');
        
      } else {
        a.classList.remove('active-one');
        
      }
    });
  }  
  filterSelectionOne("all");



//   ======================================================

// ================faq control===============
const trendFaq = document.querySelectorAll(".trend-faq");

trendFaq.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    });
});


// ================form control===============
const subcribeCard = document.querySelector("#subcribe-card");
const sub = document.querySelector("#sub");
const subClose = document.querySelector("#sub-close");


sub.addEventListener("click", () => {
    subcribeCard.style.display = "flex";
});
subClose.addEventListener("click", () => {
    subcribeCard.style.display = "none";
   
});


// ================================================modal control---------------

const mainImages = document.querySelectorAll(".product-img img");
const modalBody = document.querySelector(".modal");
const modalImages = document.querySelector(".modal-img");
const modalText = document.querySelector(".modal-title");
const modalT = document.querySelectorAll(".modal-t");
const modalClosed = document.querySelector(".modal-back");

mainImages.forEach((image) => {
    image.addEventListener('click', () => {
        modalBody.classList.add('active');

        modalImages.src = image.src;
        modalText.innerHTML = image.alt;
        // Get the related product card info text
        const productCard = image.closest(".product-card");
        const productInfo = productCard.querySelector(".product-card-info p");

        // Set text in all modal-t elements (if more than one)
        modalT.forEach(el => {
            el.innerHTML = productInfo ? productInfo.innerHTML : "";
            el.style.color = "#000";
            el.style.fontSize = "18px";
            el.style.fontWeight = "800";
        });

        modalClosed.addEventListener('click', () =>{
            modalBody.classList.remove('active')
        })
    });

});

