var ImgCnt = 0;

$(function() {

$(".header__list li").click(function(){
    if (ImgCnt < 13) {
    document.getElementById("Sound").currentTime = 0;
    document.getElementById("Sound").play();
    }
    ImgCnt += 1;
    switch (ImgCnt) {
        case 14:
        $(".header__list li").text("ーー");
        $(".header__logo").text("ー");
        $('#man').show();
            break;
        case 13:
        $("#fall1").hide();$("#fall2").hide();$("#fall3").hide();$("#fall4").hide();$("#fall5").hide();
        $('body').css('background', 'url("imgs/town_b_c.jpg") center/cover no-repeat');
            break;
        case 12:
        setTimeout(function(){
            $("#fall1").show().animate( {"top":"600px"}, { duration: 1500, easing: 'swing'});
        },600);
        setTimeout(function(){
            $("#fall2").show().animate( {"top":"600px"}, { duration: 1600, easing: 'swing'});
        },200);
        setTimeout(function(){
            $("#fall3").show().animate( {"top":"600px"}, { duration: 1200, easing: 'swing'});
        },100);
            setTimeout(function(){
            $("#fall4").show().animate( {"top":"600px"}, { duration: 1700, easing: 'swing'});
        },350);
            setTimeout(function(){
            $("#fall5").show().animate( {"top":"600px"}, { duration: 1100, easing: 'swing'});
        },450);
            break;
        case 11:
            $('body').css('background', 'url("imgs/town_b11.jpg") center/cover no-repeat');
            break;
        case 10:
            $('body').css('background', 'url("imgs/town_b10.jpg") center/cover no-repeat');
            break;
        case 9:
            $('body').css('background', 'url("imgs/town_b9.jpg") center/cover no-repeat');
            break;
        case 8:
            $('body').css('background', 'url("imgs/town_b8.jpg") center/cover no-repeat');
            break;
        case 7:
            $('body').css('background', 'url("imgs/town_b7.jpg") center/cover no-repeat');
            break;
        case 6:
            $('body').css('background', 'url("imgs/town_b6.jpg") center/cover no-repeat');
            break;
        case 5:
            $('body').css('background', 'url("imgs/town_b5.jpg") center/cover no-repeat');
            break;
        case 4:
            $('body').css('background', 'url("imgs/town_b4.jpg") center/cover no-repeat');
            break;
        case 3:
            $('body').css('background', 'url("imgs/town_b3.jpg") center/cover no-repeat');
            break;
        case 2:
            $('body').css('background', 'url("imgs/town_b2.jpg") center/cover no-repeat');
            break;
        case 1:
            $('body').css('background', 'url("imgs/town_b1.jpg") center/cover no-repeat');
            break;
        }
})



})