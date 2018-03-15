var imgCnt = 0;
var fall1 = null;
var fall2 = null;
var fall3 = null;
var fall4 = null;
var fall5 = null;

$('.js-btn').on('click', function () {
  if (imgCnt < 13) {
    document.getElementById('sound').currentTime = 0;
    document.getElementById('sound').play();
  }
  imgCnt += 1;
  switch (imgCnt) {
    case 14:
      $('.header__list li').text('ーー');
      $('h1').hide();
      $('.header__eye').show();
      $('#js-man').show();
      $('.js-btn').off('click');
      break;
    case 13:
      clearTimeout(fall1);
      clearTimeout(fall2);
      clearTimeout(fall3);
      clearTimeout(fall4);
      clearTimeout(fall5);
      $('.js-fall').hide();
      $('body').css('background-image', 'url("imgs/town_b_c.jpg")');
      break;
    case 12:
      fall1 = setTimeout(function () {
        $('#js-fall1').show().animate({
          'top': '600px'
        }, {
          duration: 1500,
          easing: 'swing'
        });
      }, 600);
      fall2 = setTimeout(function () {
        $('#js-fall2').show().animate({
          'top': '600px'
        }, {
          duration: 1600,
          easing: 'swing'
        });
      }, 200);
      fall3 = setTimeout(function () {
        $('#js-fall3').show().animate({
          'top': '600px'
        }, {
          duration: 1200,
          easing: 'swing'
        });
      }, 100);
      fall4 = setTimeout(function () {
        $('#js-fall4').show().animate({
          'top': '600px'
        }, {
          duration: 1700,
          easing: 'swing'
        });
      }, 350);
      fall5 = setTimeout(function () {
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
