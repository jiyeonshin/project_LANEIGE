$(document).ready(function (e) {

    var item = $('.online_item>ul>li');
    var recent_item = $('.recent_item>ul>li');
    var slide = $('.slider_content>ul>li');
    var slide_recent = $('.slider_content.recent>ul>li');
    var slideCount = $('.slider_content>ul>li').length;
    var leftArrow = $('.leftArrow');
    var rightArrow = $('.rightArrow');

    var recent_leftArrow = $('.recent_leftArrow');
    var recent_rightArrow = $('.recent_rightArrow');

    var idx = 0;

    item.addClass('f_off');
    recent_item.addClass('f_off');
    console.log('ready');
    item.on('click', function (e) {


        var key = $(this).index();
        slide.eq(key).fadeIn(200).siblings().fadeOut(100);

        item.eq(key).addClass('f_on').siblings().removeClass('f_on');


        if (key == slideCount - 1) {
            idx = -1;
        } else {
            idx = key;
        }

    });

    recent_item.on('click', function (e) {


        var key = $(this).index();
        slide_recent.eq(key).fadeIn(200).siblings().fadeOut(100);

        recent_item.eq(key).addClass('f_on').siblings().removeClass('f_on');


        if (key == slideCount - 1) {
            idx = -1;
        } else {
            idx = key;
        }

    });

    leftArrow.on('click', function (e) {

        idx--;
        slide.eq(idx).fadeIn(300).siblings().fadeOut(200);

        item.eq(idx).addClass('on').siblings().removeClass('on');

        if (idx == 0) {
            idx = slideCount;
        } else {
            idx = idx;
        }

    });

    rightArrow.on('click', function (e) {

        idx++;
        slide.eq(idx).fadeIn(300).siblings().fadeOut(200);

        item.eq(idx).addClass('on').siblings().removeClass('on');

        if (idx > slideCount - 2) {
            idx = -1;
        }

    });

    recent_leftArrow.on('click', function (e) {

        idx--;
        slide_recent.eq(idx).fadeIn(300).siblings().fadeOut(200);

        recent_item.eq(idx).addClass('on').siblings().removeClass('on');

        if (idx == 0) {
            idx = slideCount;
        } else {
            idx = idx;
        }

    });

    recent_rightArrow.on('click', function (e) {

        idx++;
        slide_recent.eq(idx).fadeIn(300).siblings().fadeOut(200);

        recent_item.eq(idx).addClass('on').siblings().removeClass('on');

        if (idx > slideCount - 2) {
            idx = -1;
        }

    });

});
