function glider(){
    const swiper = new Swiper('.swiper', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

    /* 
    var glide1 = new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        focusAt: 'center',
        gap: 20,
        autoplay: 2500,
        hoverpause: true,
        animationDuration: 1000,
        breakpoints:{
            1000: {
                perView: 3
            },
            700: {
                perView: 2
            }
        }
    });

    glide1.mount(); */
}