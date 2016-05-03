/// <reference path="../typings/jquery/jquery.d.ts" />
var ekranyukseklik = $(window).innerHeight();
//var ekrangenislik = $(window).innerWidth();




$(function () {

    // DIGI MODAL
    modal = function (id) {
        ose = function () {
            digimodal.fadeOut(300);
            $('.overlay').remove();
        };
        var digimodal = $('.digimodal[data-modal = ' + id + ']');
        digimodal.fadeIn(300);
        digimodal.prepend('<div class="overlay"></div>');
        $('.modalcontainer').append('<div class="kapatbuton"> KAPAT</div>');
        $('.kapatbuton').on('click', function () {
            ose();
        });
        $('.overlay').height(ekranyukseklik).on('click', function () {
            ose();
        });
        var modalwrappermargin = -(digimodal.find('.modalwrapper').height()) / 2 + 'px';
        digimodal.find('.modalwrapper').css('margin-top', modalwrappermargin);

        /* HTML STRUCTURE 
            <div data-modal="modalname" class="digimodal">
                <div class="modalwrapper">
                    <div class="modalcontainer">
                        
                    </div>
                </div>
            </div>   
            
            acivate link =  <a onclick="modal('modalname')"></a>
             
            */
    };


    // DIGI MODAL SON 
});

