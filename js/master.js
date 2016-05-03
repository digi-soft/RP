/// <reference path="../typings/jquery/jquery.d.ts" />

// back 650 / 3048 = 0.213254593
//Preloader

$(function () {


    $(window).load(function () {
        $('.preloader').fadeOut(1000);
    });


    /** Galeri Responsive Ayarı */
    var gridPhoto = $('.gridPhoto');
    function oran(e) {
        var oranHeight = e.width() / 1.33;
        e.height(oranHeight);
    }
    function scrSize() {
        var pageW = $(window).innerWidth();
        return pageW;
    }
    function mediaGrid(e) {
        if (scrSize() >= 900) {
            //Large
            e.each(function () {
                $(this).attr('data-width', 'lg');
                oran(gridPhoto);
            })
        }
        if (scrSize() < 900 && scrSize() >= 600) {
            //Medium
            e.each(function () {
                $(this).attr('data-width', 'md');
                oran(gridPhoto);
            })
        }
        if (scrSize() < 600) {
            //Small
            e.each(function () {
                $(this).attr('data-width', 'sm');
                oran(gridPhoto);
            })
        }

    }
    mediaGrid(gridPhoto);
    $(window).resize(function () {
        mediaGrid(gridPhoto);
        oran(gridPhoto);
    })
    /** Galeri Responsive Ayarı */

    /** Galeri Mobile Show */
    $('.gridYear').click(function () {
        $(this).parent().find('.gridPhoto').toggleClass('show');
    });
    /** Galeri Mobile Show */

    /** Galeri Renklendirme Ayarı */
    function hexToRGBA(hex, opacity) {
        return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function (l) { return parseInt(hex.length % 2 ? l + l : l, 16) }).concat(opacity || 1).join(',') + ')';
    }
    function gridYear(e) {
        e.each(function () {
            var years = $(this).find('.gridYearGroup');

            years.each(function () {
                var color = $(this).attr('data-renk');
                $(this).find('.gridYear').css('background', color);
               // $(this).find('.gridDesc').css('background', hexToRGBA(color, .3));
                $(this).find('.gridPhoto').css('border-bottom', '5px solid ' + color);
            });

        });
    }
    var gallery = $('.galleryGrid');
    gridYear(gallery);
    /** Galeri Renklendirme Ayarı */

    /** Galeri Sahne Slider */
    var etkinlik = $('.etkinlik');
    var photoSlideGrid = $('.gridPhoto');
    function etkinlikSlider(e) {
        var modalcontainer = e.find('.modalcontainer');
        var modalslider = modalcontainer.find('.modalslider');
        var ul = modalslider.find('ul');
        var li = ul.find('li');

        // (screen*70/100)*80/100
        // (screen%70)%80
        li.width(($(window).innerWidth() * modalcontainer.width() / 100) * modalslider.width() / 100);

        // ul = li-size * li-length
        ul.width(li.width() * li.length);

        var slideCount = 0;
          if (slideCount === 0) {
                $('#geri').hide();
          } else {
                $('#geri').show();
          }
        e.find('#ileri').click(function () {
            var indis = $(this).parent().parent().index();
            /*$(this).parent().parent().hide();
            modal(indis+1);*/
            var ulSel = $(this).parent().find('.modalcontainer > .modalslider > ul')
            var liSel = $(this).parent().find('.modalcontainer > .modalslider > ul > li');

            $('#geri').show();
            slideCount++;
            if (slideCount === liSel.length - 1) {
                $('#ileri').hide();
            } else {
                $('#ileri').show();
            }
            console.log(slideCount)

            ulSel.animate({ left: '-=' + liSel.width() + 'px' }, 300, function () {
                //$('.modalslider ul li:last-child').prependTo('.modalslider ul');
                //ulSel.css('left', '');

            });

            console.log(slideCount)

        });
        e.find('#geri').click(function () {
            var indis = $(this).parent().parent().index();
            /*$(this).parent().parent().hide();
            modal(indis-1);*/
            var ulSel = $(this).parent().find('.modalcontainer > .modalslider > ul')
            var liSel = $(this).parent().find('.modalcontainer > .modalslider > ul > li');

            $('#ileri').show();
            slideCount--;

            if (slideCount === 0) {
                $('#geri').hide();
            } else {
                $('#geri').show();
            }
            console.log(slideCount)

            ulSel.animate({ left: '+=' + liSel.width() + 'px' }, 300, function () {
                //$('.modalslider ul li:last-child').prependTo('.modalslider ul');
                // ulSel.css('left', '');

            });

            console.log(slideCount)
        });
    }

    etkinlikSlider(etkinlik);
    /** Galeri Sahne Slider */
});