// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: true, // Adds the dots on the bottom
    responsive:[
        {
            breakpoint: 1024,
            setiings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 900,
            setiings:{
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
            }
        },
        {
            breakpoint: 500,
            setiings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
    ]

  });