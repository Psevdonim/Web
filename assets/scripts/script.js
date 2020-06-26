$(document).ready(function() {
  $('.header_burger,.header_link').click(function(ecvent){
    $('.header_burger,.header_menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
 
$(document).ready(function() {
  $('.register_value').click(function(ecvent){
var reValue = document.getElementsByClassName("register_value");
if (reValue.Value.value == "1d"){
  console.log("1")
  document.querySelector(".price").innerHTML = " 1200 рублей.";
}; 
if (reValue.Value.value == "2d"){
  console.log("2")
 document.querySelector(".price").innerHTML = " 1400 рублей.";
}; 
if (reValue.Value.value == "3d"){
  console.log("3")
document.querySelector(".price").innerHTML = " 1600 рублей.";
}; 
if (reValue.Value.value == "4d"){
  console.log("4")
document.querySelector(".price").innerHTML = " 1800 рублей.";
}; 
if (reValue.Value.value == "5d"){
  console.log("4")
document.querySelector(".price").innerHTML = " 2100 рублей.";
};
});
 });
$(document).ready(function() {
  $('.btn_cl,.register_close,.register__menu__close').click(function(ecvent){
    $('.register__menu,.register__menu__close').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function() {

  $('.under_thirst').click(function(ecvent){
     $('.footer__thirst,.under_thirst').toggleClass('active');
    $('.footer__first,.footer__second').removeClass('active');
  });
   $('.under_second').click(function(ecvent){
     $('.footer__second,.under_second').toggleClass('active')
    $('.footer__first,.footer__thirst').removeClass('active');
  });
    $('.under_first').click(function(ecvent){
        $('.footer__first,.under_first').toggleClass('active');
    $('.footer__second,.footer__thirst').removeClass('active');
  });
});



$(document).ready(function() {
  $('.oned,.oned_page').click(function(ecvent){
        $('.oned,.oned_page').addClass('active');
    $('.twod,.threed,.fourd,.twod_page,.threed_page,.fourd_page').removeClass('active');
  });
 $('.twod,.twod_page').click(function(ecvent){
     $('.twod,.twod_page').addClass('active')
    $('.oned,.threed,.fourd,.oned_page,.threed_page,.fourd_page').removeClass('active');
  });
  $('.threed,.threed_page').click(function(ecvent){
     $('.threed,.threed_page').addClass('active');
    $('.oned,.twod,.fourd,.twod_page,.oned_page,.fourd_page').removeClass('active');
  });
  $('.fourd,.fourd_page').click(function(ecvent){
     $('.fourd,.fourd_page').addClass('active');
    $('.oned,.threed,.twod,.twod_page,.threed_page,.oned_page').removeClass('active'); 
  });
});


$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 2,
    speed:1000,
    draggable:false,
    dots:true,
    responsive:
    [{breakpoint:550,
       settings: {
      slidesToShow: 1
        }
    }],
    });
});
$(document).ready(function() {
  $('.slider_start_page').slick({
    speed:1000,
    dots:true,
    draggable:false
    });
});

var swiper = new Swiper('.swiper-container,.left1,.right1', {
      navigation: {
        nextEl: '.right1',
        prevEl: '.left1',
      },

      effect: 'coverflow',
      grabCursor: false,
      centeredSlides: true,
      slidesPerView: '3',
      draggable:false,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows : true,
         },
         loop:true,
               
      
       });
