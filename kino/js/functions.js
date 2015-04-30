$('#m11, #movie11').hover(function () {
    $('#disclaimer, #movie11, .m11, #m11').toggleClass('hovered');
});

$('#m12, #movie12').hover(function () {
    $('#disclaimer, #movie12, .m12, #m12').toggleClass('hovered');
});

$('#m21, #movie21').hover(function () {
    $('#disclaimer, #movie21, .m21, #m21').toggleClass('hovered');
});

$('#m22, #movie22').hover(function () {
    $('#disclaimer, #movie22, .m22, #m22').toggleClass('hovered');
});

$('#m31, #movie31').hover(function () {
    $('#disclaimer, #movie31, .m31, #m31').toggleClass('hovered');
});

$('#m32, #movie32').hover(function () {
    $('#disclaimer, #movie32, .m32, #m32').toggleClass('hovered');
});

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src', this).appendTo('body').css('display', 'none');
    });
}

imgArray = [
    'images/movie11-color.jpg',
    'images/movie12-color.jpg',
    'images/movie21-color.jpg',
    'images/movie22-color.jpg',
    'images/movie31-color.jpg',
    'images/movie32-color.jpg',
    'images/rep-color.png'
];

$(window).load(function () {
    preload(imgArray);
});