$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000, /*скорость авто смены блоко в карусели  */
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1  /* количество отобр. карточек при разных разрешениях экрана*/
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
