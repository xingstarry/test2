$(function() {
    /***** 领取、绑定*****/
    // btnDone($('.draw'),"明天再来");
    // btnDone($('.bindPhone'),"已绑定");
    function btnDone(obj,text) {
        obj.css({
            'background-color': "#cccccc"
        });
        obj.text(text)
     }
    /*function btnDone(obj,text) {
        obj.on('click', function() {
            $(this).css({
                'background-color': "#cccccc"
            });
            $(this).text(text)
        });
    }*/

    /***** 邀请*****/
    /** 点击复制**/
    $('.copys').on('click',function () {

    });
    var acti_btn = $('.acti_btn');
    var inviteMask = $('.invite .maskLayer');
    acti_btn.on('click',function (e) {
        $('.invite').show();
        $('html').css('position','fixed');
        if(e.target.className.indexOf(".maskLayer") >= 0) {
            e.preventDefault();
        }
    });
    $('.tanchuan').on('touchmove', function(e) {
        e.preventDefault();
    });
    acti_btn.on('touchmove', function(e) {
        e.preventDefault();
    });
    inviteMask.on('touchmove',function (e) {
        e.preventDefault();
    });
    inviteMask.on('click',function (e) {
        $('.invite').hide();
        $('html').css('position','relative');
        return false;
    });


    /***** 关注二维码 *****/
    var codeBtn = $('.surpri');
    var codeMask = $('.attention .maskLayer');

    codeBtn.on('click', function(e) {
        $('.attention').fadeIn();
        $('html').css('position','fixed');
        if(e.target.className.indexOf(".maskLayer") >= 0) {
            e.preventDefault();
        }
    });
    $('.public_num').on('touchmove', function(e) {
        e.preventDefault();
    });
    codeBtn.on('touchmove', function(e) {
        e.preventDefault();
    });
    codeMask.on('touchmove',function (e) {
        e.preventDefault();
    });
    codeMask.on('click',function (e) {
        $('.attention').hide();
        $('html').css('position','relative');
        return false;
    })
});