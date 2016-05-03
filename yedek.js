/// <reference path="../typings/jquery/jquery.d.ts" />
// resim boyut 1250 / 5863 = 0.2132378
var bodyscrpos = 0;
$(function () {

    // hesaplamalar
    function backimghesap() {
        var scrW = $(window).innerWidth();
        var scrH = $(window).innerHeight();
        var scrHcarpan = 0.2132378;
        imgW = scrH / scrHcarpan;

        $('#back , .scrollcontainer , .posRole').css({
            width: imgW,
            height: scrH,
        });

        bodyscrpos = imgW - scrW;
        $('body').scrollLeft(bodyscrpos);


        // cocuk hareket 
        var degis = 0;



        var i = 1;
        $(window).on('mousewheel', function (e) {


            degis = degis - e.deltaX;
            $('.degis').text(degis);
            if (degis > 0) {
                $('body').scrollLeft(bodyscrpos - degis*5);
            } else {
                degis = 1;
            }
            var scrleft = $('body').scrollLeft();
            var scrollWidth = imgW - scrW;
            var scrollPer = scrollWidth / 35;

            if (scrollWidth - (scrollPer * i) >= Math.round(scrleft)) {
                console.log(scrleft);
                $('#pos0' + i).css('z-index',999999-i).fadeIn(200);
                i++;
            } else if(scrollWidth - (scrollPer * i) <= Math.round(scrleft)) {
                console.log(scrleft);
                $('#pos0' + i).css('z-index',999999-i).fadeOut(200);
                i--;
            }
            
            e.preventDefault();
        });





    }
    // hesaplamalar  SON

    $(window).resize(function () {
        backimghesap();
    });
    backimghesap();




    // olaylarrrr





});




        // mouse sola kay
/*
        var back = $('body');
        var degis = 0;
        $(window).on('mousewheel', function (e) {
            degis = degis + e.deltaY;
            $('.degis').text(degis);
            if (degis <= -2188) {
                $('#_00 , #_01').fadeIn(100);
            }
            back.css('right', degis);
            e.preventDefault();
        });

*/


        ///////////////



       // var scrollWidth = imgW - scrW;
       //  var scrollPer = scrollWidth / 35;


     //   $('.hareketCont > img').css({ 'height': scrH });

/*
        $('body').scrollLeft(Math.round(imgW));

        $(window).scroll(function () {
            var scrleft = $('body').scrollLeft();
            var aqdeger = scrleft;
            $('.degis').text(scrleft);
            testdeger = scrollWidth - scrollPer;
            if (testdeger >= aqdeger) {
                $('#_01').addClass('goster');
            }

        });

*/