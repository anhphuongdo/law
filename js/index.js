function glider(){
    /* const card = document.querySelector('.card');
    const side = document.querySelector('.side');
    const right = document.getElementById('#right_side');
    const left = document.getElementById('#left_side');

    var card_width = card.offsetWidth;
    var side_width = side.offsetWidth; */


    const swiper = new Swiper('.swiper', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1
        },  
        /* autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }, */
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            dynamicMainBullets: 1,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 200,
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
function get_slider_width(){
    var card_width = document.querySelector('.card').offsetWidth;
    alert(card_width);
}