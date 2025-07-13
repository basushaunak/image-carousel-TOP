function runCarousel(){
    const carouselSlides = document.querySelector(".carousel-slides");
    const slides = Array.from(carouselSlides.children);
    const carouselNav = document.querySelector(".carousel-nav");
    const carouselBtnPrevious = document.querySelector(".carousel__btn-previous");
    const carouselBtnNext = document.querySelector(".carousel__btn-next");
    let currentSlideIndex = 0;
    let nextSlideIndex = -1;
    const totalSlides = slides.length;
    let btn;
    if(totalSlides === 0){
        return -1;
    }
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log(slides.length);
    slides.forEach((slide,index)=>{
        btn = document.createElement("button");
        btn.classList.add("carousel-nav--button");
        carouselNav.appendChild(btn);
        slide.style.left = (index * slideWidth) + "px";
    })
    const carouselNavButtons = Array.from(carouselNav.children);
    carouselNavButtons[0].classList.add("active-slide");
    carouselBtnPrevious.addEventListener("click",()=>{
        nextSlideIndex = currentSlideIndex - 1;
        if(nextSlideIndex < 0){
            nextSlideIndex = totalSlides - 1;
        };
        currentSlideIndex = moveSlide(currentSlideIndex, nextSlideIndex, carouselSlides,slides,carouselNavButtons);
    });
    carouselBtnNext.addEventListener("click",()=>{
        nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex >= totalSlides){
            nextSlideIndex = 0;
        };
        currentSlideIndex = moveSlide(currentSlideIndex, nextSlideIndex, carouselSlides,slides,carouselNavButtons);
    })
}

function moveSlide(currentSlideIndex, nextSlideIndex, carouselSlides, slides,carouselNavButtons){
    slides[currentSlideIndex].classList.remove("active-slide");
    slides[nextSlideIndex].classList.add("active-slide");

    carouselNavButtons[currentSlideIndex].classList.remove("active-slide");
    carouselNavButtons[nextSlideIndex].classList.add("active-slide");

    carouselSlides.style.transform = "translateX(-"+ slides[nextSlideIndex].style.left +")";
    console.log(slides[nextSlideIndex].style.left);
    
    currentSlideIndex = nextSlideIndex;
    nextSlideIndex = -1;
    return currentSlideIndex;
}

window.onload = runCarousel();