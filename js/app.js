$(function(){
  // フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll',function(){
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    // $(this)はwindow
  });
  // SPメニュー
   $('.js-toggle-sp-menu').on('click',function(){
     $(this).toggleClass('active');
     $('.js-toggle-sp-menu-target').toggleClass('active');
   });//SPメニュー選択時に自動で閉じる
   $('.nav-menu a').on('click',function(){
     $('.js-toggle-sp-menu').toggleClass('active');
     $('.js-toggle-sp-menu-target').toggleClass('active');
   });
});
