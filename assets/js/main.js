$('#brands').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navigation:true,
    dots: false,
    pagination: false,
    navigationText: [
       "<i class='fa fa-chevron-left'></i>",
       "<i class='fa fa-chevron-right'></i>"
    ],
    items:6,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }

    }
});

$('#clients').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navigation:true,
    dots: false,
    pagination: false,
    navigationText: [
       "<i class='fa fa-chevron-left'></i>",
       "<i class='fa fa-chevron-right'></i>"
    ],
    items:6,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }

    }
});