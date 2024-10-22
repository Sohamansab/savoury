$(document).ready(function () {
    // FAQ Accordion
    $('.faq-question').on('click', function () {
        // Toggle the answer visibility
        var answer = $(this).next('.faq-answer');
        answer.slideToggle(); // Smooth toggle for the answer

        // Close other answers
        $('.faq-answer').not(answer).slideUp(); // Close all other answers
    });

    // Additional animations for other sections
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        // Signature Dish Section Animation
        var menuPosition = $('.signature-dish').offset().top - windowHeight + 100;
        if (scroll > menuPosition) {
            $('.column').each(function (i) {
                setTimeout(function () {
                    $('.column').eq(i).addClass('show-zoom');
                }, i * 200);
            });
            $('.signature-dish').addClass('animate__animated animate__zoomIn');
        }

        // Starters & Appetizers Section Animation
        var newSectionPosition = $('.starters-appetizers-slider').offset().top - windowHeight + 100;
        if (scroll > newSectionPosition) {
            $('.starters-appetizers-slider').addClass('show-zoom');
        }
    });

    // Initialize the slider
    $('.slider-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Form Validation and Submission
    $('#contact-submit').on('click', function (event) {
        event.preventDefault();

        var isValid = true;

        if ($('#name').val().trim() === '') {
            isValid = false;
            $('#name').next('.error-message').text('Name is required');
        } else {
            $('#name').next('.error-message').text('');
        }

        if ($('#email').val().trim() === '') {
            isValid = false;
            $('#email').next('.error-message').text('Email is required');
        } else {
            $('#email').next('.error-message').text('');
        }

        if ($('#subject').val().trim() === '') {
            isValid = false;
            $('#subject').next('.error-message').text('Subject is required');
        } else {
            $('#subject').next('.error-message').text('');
        }

        if ($('#comment').val().trim() === '') {
            isValid = false;
            $('#comment').next('.error-message').text('Comment/Questions is required');
        } else {
            $('#comment').next('.error-message').text('');
        }

        if (isValid) {
            alert('Thank you for contacting us! We will get back to you shortly.');
            $('#contact-form')[0].reset();
        }
    });
});
