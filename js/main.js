$(function () {

  //pc네비게이션
  let pcDepth01 = $('.pc.depth01 li');

  pcDepth01.mouseenter(function(){
    $('.gnb').removeClass('on');
    $('.gnb').eq($(this).index()).addClass('on');
  });
  $('.gnb').mouseleave(function(){
    $('.gnb').removeClass('on');
  });

  //tablet네비게이션

  $('.menu_btn').click(function(){
    if ($('.table_nav').css('display') == 'none') {
      $('.table_nav').slideDown(1000, 'easeInOutBack');
    } else {
      $('.table_nav').slideUp(1000, 'easeInOutBack');
    }
  });

  let tableDepth01 = $('.table_gnb .depth01 > a');
  let tableDepth02 = $('.table_gnb .depth01 .depth02')
  
  tableDepth01.click(function(){
    if ($(this).next().css('display') == 'none') {
      tableDepth02.removeClass('on');
      $(this).next().addClass('on');
    } else {
      $(this).next().removeClass('on');
    }
  });

  //스와이퍼슬라이드
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});//jquery end