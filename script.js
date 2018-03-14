var imgCnt = 0;

$('.header__list li').on('click', function () {
  if (imgCnt < 13) {
    document.getElementById('sound').currentTime = 0;
    document.getElementById('sound').play();
  }
  imgCnt += 1;
  switch (imgCnt) {
    case 14:
      $('.header__list li').text('ーー');
      $('h1').text('ー');
      $('#js-man').show();
      break;
    case 13:
      $('.js-fall').hide();
      $('body').css('background-image', 'url("imgs/town_b_c.jpg")');
      break;
    case 12:
      setTimeout(function () {
        $('#js-fall1').show().animate({
          'top': '600px'
        }, {
          duration: 1500,
          easing: 'swing'
        });
      }, 600);
      setTimeout(function () {
        $('#js-fall2').show().animate({
          'top': '600px'
        }, {
          duration: 1600,
          easing: 'swing'
        });
      }, 200);
      setTimeout(function () {
        $('#js-fall3').show().animate({
          'top': '600px'
        }, {
          duration: 1200,
          easing: 'swing'
        });
      }, 100);
      setTimeout(function () {
        $('#js-fall4').show().animate({
          'top': '600px'
        }, {
          duration: 1700,
          easing: 'swing'
        });
      }, 350);
      setTimeout(function () {
        $('#js-fall5').show().animate({
          'top': '600px'
        }, {
          duration: 1100,
          easing: 'swing'
        });
      }, 450);
      break;
    default:
      $('body').css('background-image', 'url("imgs/town_b' + imgCnt + '.jpg")');
      break;
  }
})
