let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slideDepa");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length){
        slideIndex2 = 1;
    }

    if (n < 1){
        slideIndex2 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex2-1].style.display = "block";  
}