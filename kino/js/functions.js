$('#m11').hover(function () {
    $('#movie11').toggleClass("hovered");
});

$('#m12').hover(function () {
    $('#movie12').toggleClass("hovered");
});

$('#m21').hover(function () {
    $('#movie21').toggleClass("hovered");
});

$('#m22').hover(function () {
    $('#movie22').toggleClass("hovered");
});

$('#m31').hover(function () {
    $('#movie31').toggleClass("hovered");
});

$('#m32').hover(function () {
    $('#movie32').toggleClass("hovered");
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
    'images/movie32-color.jpg'
];

$(window).load(function () {
    preload(imgArray);
});