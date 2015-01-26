var images = [img001, img002, img003, img004, img005, img006, img007, img008, img009, img010, img011, img012, img013, img014, img015, img016];

for (var i = images.length-1; i >= 0; i--) {
    $("#poni").append("<li></li>");
    console.log(i);
    $("#poni li:last-child").css("background-image", "url(" + images[i].url + ")");
};