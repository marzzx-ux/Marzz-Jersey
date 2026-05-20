const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");

let index = 0;
const totalSlides = slideImages.length;

function autoSlide() {
    index++;
    slides.style.transition = "transform 1s ease-in-out";
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Kalau sudah sampai clone terakhir
    if (index === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = "none";
            index = 0;
            slides.style.transform = `translateX(0%)`;
        }, 1000);
    }
}

setInterval(autoSlide, 3000);