$(document).ready(function(){
  // layout
  gnbEvent()
  // utilties
  formFile();
  tab();
  popup();
  // 페이지 개별 이벤트
  pageEvent();
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
# Common : Layout
- Gnb Evnet
************************************************************/
function gnbEvent(){
  $('.header-open').on('click', function(){
    $('.header-aside').addClass('is-show')
    dimOpen();
  })
  $('.header-close').on('click', function(){
    $('.header-aside').removeClass('is-show')
    dimClose();
  })
}
/************************************************************
# Common : Utilties
- Scroll Anchor
- Tab & Tab indicator
- File form
- Select box with text field
- Popup & Toast
- Dim
- Swiper : Popup img resize
- Swiper : Gallery swiper click, open popup
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
  pos = target.offset().top - 66 || 0;
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
  target = target || null;
  if(target.length !== 1) target = $('.tab .tab-title>.item:first-child');
  var $tab = target.closest('.tab');
  $tab.find('.tab-title .item').removeClass('is-active');
  target.addClass('is-active');
  $tab.find('.tab-content .content').removeClass('is-active').eq(target.index()).addClass('is-active');
  tabIndicator(target);
}
function tabIndicator(target = $('.tab-title .item.is-active')){
  if(target.length < 1) return;
  var $indicator = $('.tab-indicator');
  var tabIdx = target.index();
  var iWidth = getComputedStyle(target.get(0)).getPropertyValue('width');
  var tabPadding = getComputedStyle(document.querySelector('.tab-title')).getPropertyValue('padding-left');

  $indicator.css({
    'transform': `translate3d(calc( ${iWidth} * ${tabIdx} + ${tabPadding}), 0, 0)`,
    'width': `${iWidth}`
  })
}
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
function filterToggle(){
  var options = $('.filter-set');
  $('.filter #reset').on('click', function(){
    options.each(function(){
      $(this).find('.item input[type="radio"]').eq(0).prop('checked', true)
    })
  })
}
function slctWithTxt(){
  if($('.slct-txt').length < 1) return;
  $('.slct-txt').each(function(){
    var $this = $(this);
    var slct = $this.children('select')
    var txt = $this.children('input')

    slct.on('change', function(){
      var option = $(this).find('option:selected').val();
      if (option !== 'write' || txt.is(":visible")) {
        txt.val('').hide();
      } else{
        txt.val('').show().focus();
      }
    })
  })
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
}
function toastOpen(target){
  $('#'+target).finish().fadeIn(500).delay(500).fadeOut(500)
}
function popupOpen(target){
  var popup = $('#'+target) || null;
  var popSwiper = popup.find('.swiper-container');
  // popup except
  if(popup.length < 1) return;

  dimOpen();
  popup.addClass('is-show');
  // swiper update
  if(popSwiper.length > 0){
    if(popSwiper.hasClass('p-gallery-swiper')) popImgResize()
    popSwiper.get(0).swiper.update();
  }
  // draw scroll
  if(popup.hasClass('draw') && popup.height() > window.innerHeight - 54){
    popup.css('max-height', $(window).height());
    popup.find('.popup-header').addClass('is-fixed');
  }

  // filter func
  if($('.filter').length > 0) filterToggle();
}
function popupClose(target){
  var $target = $('#'+target);
  if(!$target.hasClass('draw')) {
    $target.removeClass('is-show').removeAttr('style');
  } else{
    $target.css('z-index', '5000').removeClass('is-show')
    setTimeout(function(){
      $target.removeAttr('style');
    }, 500)
  }
  if(!$('.header-aside').hasClass('is-show')) dimClose();
}
function popImgResize(){
  var height = document.documentElement.clientHeight;
  var imgs = $('.swiper-slide img');
  imgs.each(function(){
    var imgHeight = $(this).height();
    if(imgHeight > height){
      $(this).css({
        'width' : 'auto',
        "height" : '100%'
      })
    } 
  })
}
function swiperGallery(){
  if($('.gallery-swiper').length < 1) return;
  $('.gallery-swiper .swiper-slide').each(function(){
    $(this).on('click', function(e){
      idx = $(e.currentTarget).data('swiper-slide-index') || $('.gallery-swiper').get(0).swiper.clickedIndex
      mySwiper = $('.p-gallery-swiper').get(0).swiper;
      mySwiper.slideToLoop(idx)
      popupOpen('popGallery')
    })
  })
}
/************************************************************
# 페이지 별 이벤트
- Popup Gallery Swiper Common Param
- Swiper init
- Click Event
************************************************************/
var galleryParams = {
  loop: true,
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
    hideOnClick : true
  },
  on: {
    tap: function(e){
      if($(e.target).attr('role') == 'button') return;
      $('.p-gallery').find('.pop-close').toggleClass('pop-close-hidden');
      $('.p-gallery').find('.swiper-pagination').toggleClass('swiper-pagination-hidden');
    },
    resize: function(){
      this.update();
    }
  }
};
function pageEvent(){
  var pageClass = document.querySelector('.container') ? document.querySelector('.container').getAttribute('class').split(' ')[1] : undefined;
  switch (pageClass){
    case 'main':
      return mainEvent();
    case 'lucid':
      return lucidEvent();
    case 'contactus':
      return contactEvent();
  }
}
function mainEvent(){
  // scroll event
  var y = 0;
  $(window).on('scroll', function(){
    y = window.scrollY;
    if( y == 0 ){
      $('.header-top').css('border', '0 none')
    } else{
      $('.header-top').removeAttr('style')
    }

  })
  // swiper init
  var brand = new Swiper('.brand-swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  })
  var media = new Swiper('.media-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
  })
}
function lucidEvent(){
  // swiper init
  var idx = 0;
  var gallery = new Swiper('.gallery-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    loop: true
  })
  var popGallery = new Swiper('.p-gallery-swiper', galleryParams);
  // 갤러리 클릭시 팝업 오픈
  swiperGallery();
}
function contactEvent(){
  //accordion
  var privacy = $('.chk-privacy');
  $('.btn-acc').on('click', function(){
    privacy.toggleClass('is-open');
    $('.chk-privacy-content').finish().slideToggle();
  })
  slctWithTxt();
}