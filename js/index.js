$(function () {

  var $win = $(window);

  $win.on('load resize', function() {
    var windowWidth = $win.width();

    if (windowWidth > 1024) {
      // PCの処理

 // headerの設定
      var img1;
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > 93) {
     $('.header').css('background', '#025fbd');

      img1 = $('.header-log-header-link-symbol').attr('src');
      console.log(img1);

    if (img1 === './images/logo_black.png') {
      $('.header-log-header-link-symbol').attr('src', './images/logo_white.png');
      } else if(img1 === '../images/logo_black.png') {
        $('.header-log-header-link-symbol').attr('src', '../images/logo_white.png');
    }
  } else {

    img1 = $('.header-log-header-link-symbol').attr('src');
    if ( img1 === './images/logo_white.png') {
      $('.header-log-header-link-symbol').attr('src', './images/logo_black.png');
    } else if(img1 === '../images/logo_white.png') {
      $('.header-log-header-link-symbol').attr('src', '../images/logo_black.png');
    }
      $('.header').css('background', 'none');

     }
 });




$(window).on('scroll', function () {

  var h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );
  if ($(window).scrollTop() > h - 1190) {
    $('.footer-pageup').css('border', '1px solid #fff ');
    $('.footer-pageup-link').css('color', '#fff');
  } else {
    $('.footer-pageup').css('border', '1px solid #000');
    $('.footer-pageup-link').css('color', '#000');
  }
});

// 上部に飛ぶボタンを設定
$('.footer-pageup-link').on('click',function(event){
  // スクロールイベントの設定
  event.preventDefault();// href属性の停止
  $('body,html').animate({ scrollTop: 0 }, 1000);// スクロールの動きを設定
});

// 上部に飛ぶボタンを移動させえて色の変更



// スライダー画像切替
if ($('.sliderset-contents').length) {
  var $sliderContents = $('.sliderset-contents');
  var $target,src;

  $sliderContents.on({
    // カーソルのったら
    'mouseover': function () {
      $target = $(this).find('.sliderset-contents-images').children('img');
      src = $target.attr('src');

      $target.attr('src', src.replace(/(.+[0-9])-1\.png/, '$1-2.png'));
    },
    // カーソル外れたら
    'mouseout': function () {
      $target = $(this).find('.sliderset-contents-images').children('img');
      src = $target.attr('src');

      $target.attr('src', src.replace(/(.+[0-9])-2\.png/, '$1-1.png'));
    }
  });
}


$(function () {
  var $body = $('body');

  //開閉用ボタンをクリックでクラスの切替え
  $('#js__btn').on('click', function () {
    $body.toggleClass('open');
    if ($body.hasClass('open')) {
      $('#js__btn img').attr('src', './images/close-menu.png');
    } else {
      $('#js__btn img').attr('src', './images/sp-menu.png');
    }
  });

  //メニュー名以外の部分をクリックで閉じる
  $('#js__nav').on('click', function () {
      $body.removeClass('open');
  });
});

    } else if (windowWidth > 768) {
      // TABの処理
    } else {
      // SPの処理

 // headerの設定
 $(window).on('scroll', function () {
  if($(window).scrollTop() > 93){
    $('.header').css('background', '#025fbd');
  } else {
    $('.header').css('background', 'none');
  }
});

$(window).on('scroll', function () {

  var h = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] );
  if ($(window).scrollTop() > h - 1190) {
    $('.footer-pageup').css('border', '1px solid #fff ');
    $('.footer-pageup-link').css('color', '#fff');
  } else {
    $('.footer-pageup').css('border', '1px solid #000');
    $('.footer-pageup-link').css('color', '#000');
  }

});

// 上部に飛ぶボタンを設定
$('.footer-pageup-link').on('click',function(event){
  // スクロールイベントの設定
  event.preventDefault();// href属性の停止
  $('body,html').animate({ scrollTop: 0 }, 1000);// スクロールの動きを設定
});

// 上部に飛ぶボタンを移動させえて色の変更


$(function () {
  var $body = $('body');

  //開閉用ボタンをクリックでクラスの切替え
  $('#js__btn').on('click', function () {
    var src;
    $body.toggleClass('open');
    if ($body.hasClass('open')) {
      src = $('#js__btn img').attr('src');
      $('#js__btn img').attr('src',src.replace(/(.+images\/)sp-menu\.(png)/,'$1close-menu.$2'));
    } else {
      src = $('#js__btn img').attr('src');
      $('#js__btn img').attr('src',src.replace(/(.+images\/)close-menu\.(png)/,'$1sp-menu.$2'));
    }
  });

    //メニュー名以外の部分をクリックで閉じる
    $('#js__nav').on('click', function () {
        $body.removeClass('open');
    });
  });

    }
  });

  if ($('#slick').length) {
    $('#slick').on('init', function(event, slick) {
      $('.sliderset-number-current').text('0' + (slick.currentSlide + 1));
      $('.sliderset-number-all').text('0' + slick.slideCount);
    })
    .slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      transitionStyle: "fade",
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 670,
          settings: {
                slidesToShow: 1,
                autoplay: false,
                centerMode: true,
                centerPadding: '80px',
            }
        }
      ]
      })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.sliderset-number-current').text('0' + (nextSlide + 1));
    });
  }


  if ($(window).width() < 670 && $('#slick').length) {

  }
  });




