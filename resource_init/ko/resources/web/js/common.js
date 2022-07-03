$(document).ready(function(){
  // utilties
  scrollAnchor();
  tab();
  popup();
  //page
  pageEvent();
  sitemap()
})
function hashLoad(hash){
  if(hash == ''){
    scrollEvent($('.wrap'));
  } else if($('[href="'+hash+'"]').length > 0){
    tabActive($('[href="'+hash+'"]'))
    scrollEvent($('.tab'))
  }
}
window.onload = function(e){
  hashLoad(window.location.hash)
};
window.onhashchange = function(e){
  hashLoad(window.location.hash)
};
/************************************************************
# Common : Utilties
- Scroll Anchor
- File form
- Select box with text field
- Popup & Toast
- Dim
************************************************************/
function scrollAnchor(){
  var el = $('[data-anchor]') || undefined;
  if (el.length < 1) return;

  el.each(function(){
    $(this).on('click', function(){
      scrollEvent($('#'+$(this).data('anchor')));
    })
  })
}
function scrollEvent(target){
  pos = target.position().top || 0;
  $('html, body').animate({ scrollTop: pos}, 500);
}
function tab(){
  if($('.tab').length < 1) return;
  $('.tab').each(function(){
    $(this).find('.tab-title>.item').on('click',function(){
      tabActive($(this))
    })
  })
  tabIndicator();
}
function tabActive(target){
  target = target || $('.tab .tab-title>.item:first-child');
  var $tab = target.closest('.tab');
  $tab.find('.tab-title .item').removeClass('is-active');
  target.addClass('is-active');
  $tab.find('.tab-content .content').removeClass('is-active').eq(target.index()).addClass('is-active');
  tabIndicator(target);
}
function tabIndicator(target){
  if($('.tab-indicator').length < 1) return;
  target = target || $('.tab-title .item.is-active');
  var iWidth = target.outerWidth();
  var position = target.position().left;
  $('.tab-indicator').css({
    'transform': 'translate3d('+position+'px, 0, 0)',
    'width':  iWidth+'px'
  });
}
function dimOpen(){
  if(!($('.dim').length > 0)){
    // dim 여러개 생기는 것 방지
    var dim = "<div class='dim'></div>";
    $('body').prepend(dim);
  }
  $('html, body').addClass('not-scroll').on('scroll touchmove',function(e){
    e.preventDefault();
  })
}
function dimClose(){
  $('.dim').remove();
  $('html, body').removeClass('not-scroll').off('scroll touchmove')
}
function popup(){
  $('button[data-toast]').each(function(){
    $(this).on('click', function(){
      var target = $(this).data('toast')
      toastOpen(target)
    })
  })
  $('button[data-popup]').each(function(){
    $(this).on('click', function(){
      var target = $(this).data('popup')
      popupOpen(target);
    })
  });
  $('button.pop-close').on('click', function(){
    var target = $(this).closest('.popup').attr('id');
    popupClose(target);
  })
  $(document).on('click', '.dim', function(){
    var target = $('.is-show').attr('id')
    popupClose(target)
  })
}
function toastOpen(target){
  $('#'+target).finish().fadeIn(500).delay(500).fadeOut(500)
}
function popupOpen(target){
  var popup = $('#'+target) || null;
  // popup except
  if(popup.length < 1) return;
  dimOpen();
  popup.addClass('is-show');
}
function popupClose(target){
  var popup = $('#'+target) || null;
  var popSwiper = popup.find('.swiper-container');
  // popup except
  if(popup.length < 1) return;
  popup.removeClass('is-show').removeAttr('style');
  // swiper remove
  if(popSwiper.length > 0){
    popSwiper.get(0).swiper.destroy();
  }
  dimClose();
}
function popImgResize(){
  var height = document.documentElement.clientHeight || 0;
  var imgs = $('.p-gallery-swiper .swiper-slide img');
  imgs.each(function(){
    var imgHeight = $(this).height();
    if(imgHeight > height){
      $(this).css({
        'width' : 'auto',
        "height" : '590px'
      })
    }
  })
}
function swiperGallery(){
  if($('.gallery-swiper').length < 1) return;
  $('.gallery-swiper .swiper-slide').each(function(){
    $(this).on('click', function(e){
      idx = $(e.currentTarget).data('swiper-slide-index') || $('.gallery-swiper').get(0).swiper.clickedIndex
      var pGallery = new Swiper('.p-gallery-swiper', galleryParams)
      pGallery.slideToLoop(idx, 500);
      popupOpen('popGallery')
      popImgResize()
      pGallery.update()
    })
  })
}
// swiper button hover event
function swiperHover(block){
  var $btn = $(block).find('.swiper-button');
  var target = block+'-swiper, '+block+' .swiper-button';
  
  $btn.addClass('is-hide')
  
  $(target).on('mouseenter', function(){
    $btn.removeClass('is-hide')
  })
  $(target).on('mouseleave', function(){
    $btn.addClass('is-hide')
  })
}
// dropdown
function formEmail(){
  if($('.dropdown').length < 1) return;
  $('.dropdown').each(function(){
    var $dw = $(this);
    var $btn = $dw.find('.dropdown-btn');
    var $list = $dw.find('.dropdown-list');
    var $ip = $dw.siblings('input[type="email"]');
    $btn.on('click', function(){
      $dw.toggleClass('is-active');
      $list.finish().slideToggle(200)
    })
    $dw.find('.item').on('click', function(e){
      var value = $(e.target).attr('value');
      if(value=='write'){
        $ip.removeAttr('disabled').val('').focus();
      }else{
        $ip.attr('disabled','disabled').val(value);
      }
      $btn.attr('value', value).find('em').text($(e.target).text());
      $dw.removeClass('is-active')
      $list.finish().slideUp(200)
    })
  })
  $(document).on('click', function(e){
    // 다른영역클릭시, dw 닫기
    if(!$('.dropdown').has(e.target).length) {
      $('.dropdown').removeClass('is-active')
      $('.dropdown').find('.dropdown-list').slideUp(200)
    }
  })
}
// email
//file
function formFile(){
  var files = $('input[type="file"]');
  files.each(function(){
    var input = $(this).siblings('input[type="text"]');
    $(this).on('change', function(){
      var txt = $(this).val();
      if(txt == '') txt = '파일을 선택해주세요'
      input.attr('value', txt)
    })
  })
}
/************************************************************
# 페이지 별 이벤트
- Popup Gallery Swiper Common Param
- Swiper init
- Click Event
************************************************************/
//sitemap
function sitemap(){
  $('.sitemap-sub-link').each(function(){
    $(this).on('click',function(){
    var url = window.location.pathname.split('/');
    url = url[url.length-1]
    if( $(this).attr('href').indexOf(url) > 0 ){
      location.href = $(this).attr('href')
      location.reload(true);
    }
    })
  })
}
var galleryParams = {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>/<span class="' + totalClass + '"></span>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
};
function pageEvent(){
  var page = document.querySelector('.container') ? document.querySelector('.container').getAttribute('class').split(' ')[1] : undefined;
  switch (page){
    case 'main': 
      mainEvent(); break;
    case 'lucid': 
      lucidEvent(); break;
    case 'media': 
      mediaEvent(); break;
    case 'contactus': 
      contactEvent(); break;
    default: return;
  }
}
function mainEvent(){
  // swiper
  var thumb = new Swiper('.thumb-swiper', {
    slidesPerView: 1,
    spaceBetween: 65,
    loop: true,
    loopedSlides: 3, // 슬라이드 갯수의 절반
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  })
  var visual = new Swiper('.visual-swiper', {
    effect: 'fade',
    autoplay: {
      delay: 15000,
    },
    speed: 300,
    loop: true,
    loopedSlides: 3, // 슬라이드 갯수의 절반
    thumbs: {
      swiper: thumb,
    },
    navigation: {
      nextEl: '.visual-navigation-next',
      prevEl: '.visual-navigation-prev',
    },
  })                            
  var brand = new Swiper('.brand-swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.brand .swiper-pagination',
      clickable: true
    },
  })
  var media = new Swiper('.media-swiper', {
    slidesPerView: 3,
    spaceBetween: 18,
    pagination: {
      el: '.media .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.media .swiper-button-next',
      prevEl: '.media .swiper-button-prev',
    },
  })
  // navigation hover event
  swiperHover('.media')
  return;
}
function lucidEvent(){
  var gallery = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 12,
    navigation: {
      nextEl: '.swiper-button .swiper-button-next',
      prevEl: '.swiper-button .swiper-button-prev',
    },
  })
  // navigation hover event
  swiperHover('.gallery');
  swiperGallery();
  return;
}
function mediaEvent(){
  // init
  tabIndicator($("label[for='categoryAll']"));
  // onChange
  $('input:radio[name="category"]').on('change', function(){
    tabIndicator($("label[for='"+$(this).attr('id')+"']"));
  })
  return;
}
function contactEvent(){
  //accordion
  var privacy = $('.chk-privacy');
  $('.chk-privacy-tit').on('click', function(e){
    if(!$('.chk-privacy-tit').has(e.target).length) {
      privacy.toggleClass('is-open');
      $('.chk-privacy-content').finish().slideToggle();
    }
  })
  formEmail();
  formFile();
  return;
}