$(document).ready(function () {

    $(".day").css("height", $(window).height());

    $(".movie").mouseenter(function() {
        $(this).children('.title').css('opacity', 0.9);
    })
    $(".movie").mouseleave(function () {
        $(this).children('.title').css('opacity', 0);
    });

    $(".totop").click(function () {
        $("html, body").animate({
            scrollTop: 0}, 1500);
    });

    $("#end").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });

});

$(window).resize(function () {

    $(".day").css("height", $(window).height());

});

function goto(path) {
    $("html, body").animate({
        scrollTop: $(path).offset().top
    }, 1500);
};