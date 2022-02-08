$(function() {
    $('.menu__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<img class="slider__arrow slider__arrow-left " src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider__arrow slider__arrow-right " src="images/arrow-right.svg" alt="">',
        responsive: [{
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.gallery__slider').slick({
        centerMode: true,
        centerPadding: '180px',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="gallery__arrow gallery__arrow-left " src="images/gallery__arrow-left.png" alt="">',
        nextArrow: '<img class="gallery__arrow gallery__arrow-right " src="images/gallery__arrow-right.png" alt="">',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: false

                }
            }
        ]
    });
    $('.header__btn').on('click', function() {
        $('.header__nav-items').toggleClass('header__nav-item-active');
    });
});