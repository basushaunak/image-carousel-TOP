function runCarousel(){
    const slideList = document.querySelectorAll(".slide");
    const carouselNav = document.querySelector(".carousel-nav");
    const carouselButtonPrev = document.querySelector(".carousel-button--prev");
    const carouselButtonNext = document.querySelector(".carousel-button--next");
    const slidesContainer = document.querySelector(".slides-container");
    let isHoveringSlide;

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

    carouselButtonPrev.addEventListener("click",()=>{
        previousSlide();
    })
    carouselButtonNext.addEventListener("click",()=>{
        nextSlide();
    })

    carouselNav.addEventListener("click",(e)=>{
        if(e.target.tagName !== "BUTTON"){
            return;
        }
        let clickedButton = e.target.closest("button");
        for(let i = 0; i< carouselNavButtons.length;i++){
            if(carouselNavButtons[i] === clickedButton){
                targetSlide = i;
                break;
            }
        }
        updateCarousel();
    })

    slidesContainer.addEventListener("mouseleave",()=>{
        console.log("Mouse left slide");
        isHoveringSlide = false;
    })

    slidesContainer.addEventListener("mouseenter",()=>{
        console.log("Mouse entered slide");
        isHoveringSlide = true;
    })

    function nextSlide(){
        targetSlide = activeSlide + 1;
        if(targetSlide >= slideList.length){
            targetSlide = 0;
        }
        updateCarousel();
    }

    function previousSlide(){
        targetSlide = activeSlide - 1;
        if(targetSlide < 0){
            targetSlide = slideList.length-1;
        }
        updateCarousel();
    }

    function updateCarousel(){
        carouselNavButtons[activeSlide].classList.remove("slide-active");
        slideList[activeSlide].classList.remove("slide-active");
        carouselNavButtons[targetSlide].classList.add("slide-active");
        slideList[targetSlide].classList.add("slide-active");
        activeSlide = targetSlide;
        targetSlide = -1;
    }

    function autoLoopSlides(){
        if(isHoveringSlide){
            return;
        }
        nextSlide();
    }

    setInterval(autoLoopSlides,5000);
}
runCarousel();