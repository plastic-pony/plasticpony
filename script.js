$(document).ready(function () {

    $(".day").css("height", $(window).height());

    $(".movie").mouseenter(function() {
        $( this ).children('.title').css('opacity', 0.9);
    })
    $(".movie").mouseleave(function () {
        $(this).children('.title').css('opacity', 0);
  });

});

$(window).resize(function () {

    $(".day").css("height", $(window).height());

});