$(function() {
    $('.menu__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<img class="slider__arrow slider__arrow-left " src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider__arrow slider__arrow-right " src="images/arrow-right.svg" alt="">',
    });
    $('.gallery__slider').slick({
        centerMode: true,
        centerPadding: '180px',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="gallery__arrow gallery__arrow-left " src="images/gallery__arrow-left.png" alt="">',
        nextArrow: '<img class="gallery__arrow gallery__arrow-right " src="images/gallery__arrow-right.png" alt="">',
    });
});