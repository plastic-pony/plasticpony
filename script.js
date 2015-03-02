var imagesL = [img001, img004, img007, img010, img013, img016, img022];
var imagesC = [img002, img005, img008, img011, img014, img017, img020];
var imagesR = [img003, img006, img009, img012, img015, img019, img021];

for (var i = imagesL.length - 1; i >= 0; i--) {
    $("#right").append("<li></li>");
    $("#center").append("<li></li>");
    $("#left").append("<li></li>");
    $("#left li:last-child").css("background-image", "url(" + imagesL[i].url + ")");
    $("#center li:last-child").css("background-image", "url(" + imagesC[i].url + ")");
    $("#right li:last-child").css("background-image", "url(" + imagesR[i].url + ")");
};
