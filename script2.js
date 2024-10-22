// aos animation
AOS.init(); 

// page counter
function countUp(id, end) {
    let count = 0;
    const element = document.getElementById(id);
    const interval = setInterval(function() {
        if (count < end) {
            count++;
            element.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 50); // Adjust speed
}

//  counters when the page loads
window.onload = function() {
    countUp("food-variant", 50);   // For Food Variant
    countUp("person-capacity", 100);  // For Person Capacity
};


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);


$(document).ready(function() {
    $('.testimonial-sliderss').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>',
    });
});



