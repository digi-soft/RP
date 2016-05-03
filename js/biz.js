/// <reference path="../typings/jquery/jquery.d.ts" />
$(function () {
    $('.fadeIn').fadeIn(1500);


    function topC() {
        var scrWnew = $(window).innerWidth();
        if (scrWnew >= 960) {
            $('.topCover').animate({ 'background-size': '101vw' }, 5000);
        }
        else if (scrWnew >= 600 && scrWnew <= 959) {
            $('.topCoverMed').animate({ 'background-size': '170vw' }, 5000);
        }
    }
    topC();

});


$(function () {
    function drive(e) {
        var basla = e.offset().top;
        var marginleft = parseInt(e.css('margin-left'));
        var baslangic = basla + marginleft - (e.height() / 2);
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            if (scroll >= baslangic) {
                sayac = scroll - baslangic;
                margin = marginleft + sayac;
                if (margin >= 0) {
                    margin = 0;
                }
                $(e).css('margin-left', margin + 'px');
                $(e).css('opacity', 0.96 + (margin / 1000));
                $(e).find('.aciklama').css('opacity',  1 -(-margin/300));
                $(e).find('.ana_baslik , .alt_baslik').css('margin-right', -margin/2 + 'px');
            }
        });
    }
    drive($('.iceceklerimizSec'));
    drive($('.bulusmaNoktaniz'));

    ///
    function driveR(e) {
        var basla = e.offset().top;
        var marginleft = parseInt(e.css('margin-left'));
        var baslangic = basla - marginleft - (e.height() / 2);
        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            if (scroll >= baslangic) {
                sayac = scroll - baslangic;
                margin = marginleft - sayac;
                if (margin <= 0) {
                    margin = 0;
                }
                $(e).css('margin-left', margin + 'px');
                $(e).css('opacity', 0.96 + (margin / 2));
                $(e).find('.aciklama').css('opacity',  1 -(margin/300));
                $(e).find('.ana_baslik , .alt_baslik').css('margin-left', margin/2 + 'px');

            }

        });
    }
    driveR($('.muzikaltyapi'));
    ///
});
