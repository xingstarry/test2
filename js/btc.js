$(function() {

    /*$('.extract').on('click', function(e) {
        shows();
        e.preventDefault();
    });

    function shows() {
        $('.extr_pop').show();
       /!* $('html').css('overflow-y', 'hidden');
        $('body').css('overflow-y', 'hidden');*!/
    }*/

    /***** 提取 *****/
    var extractBtn = $('.extract');
    var extr_pop = $('.extr_pop');
    var extractMask = $('.extr_pop .maskLayer');

    extractBtn.on('click', function(e) {
        extr_pop.show();
        // $('html').css('position','fixed');
        if(e.target.className.indexOf(".maskLayer") >= 0) {
            e.preventDefault();
        }
    });
    $('.public_num').on('touchmove', function(e) {
        e.preventDefault();
    });
    extr_pop.on('touchmove', function(e) {
        e.preventDefault();
    });
    extractMask.on('touchmove',function (e) {
        e.preventDefault();
    });
    extractMask.on('click',function (e) {
        extr_pop.hide();
        $('html').css('position','relative');
        return false;
    })
});