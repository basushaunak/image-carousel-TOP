function runCarousel(){
    const slideList = document.querySelectorAll(".slide");
    const carouselNav = document.querySelector(".carousel-nav");
    let activeSlide = 0;
    let targetSlide = -1;
    let btn;
    for(let i=0;i<slideList.length;i++){
        btn = document.createElement("button");
        btn.classList.add("carousel-nav--button");
        carouselNav.appendChild(btn);
    }
    btn=null;
    const carouselNavButtons = document.querySelectorAll(".carousel-nav--button");
    carouselNavButtons[activeSlide].classList.add("slide-active");
    slideList[activeSlide].classList.add("slide-active");
}
runCarousel();