var projekti = [me, kino, sven, franko, shocktoe, dogs];

function load(position) {
    var projekt = "";
    if (position > 0) {
        projekt = "<div class='project'><p class='name'>> " + projekti[position].ime + "</p>";
        projekt += "<img src=" + projekti[position].img1 + " /><img src=" + projekti[position].img2 + " /><img src=" + projekti[position].img3 + " />";
        projekt += "<p class='desc'>> " + projekti[position].opis + "</p><p>> <a href='" + projekti[position].url + "' class='url'";
        if (projekti[position].url != "") {
            projekt += "target='_blank'";
        }
        projekt += "> " + projekti[position].urltxt + "</a></p></div><div id='blink'>> <span class='blink'>_</span></div>";
    }
    else {
        projekt = "<div class='project'><p class='name'>> About me</p>";
        projekt += "<img src=" + projekti[position].img1 + " /><img src=" + projekti[position].img2 + " /><img src=" + projekti[position].img3 + " />";
        projekt += "<p class='desc'>> " + projekti[position].desc1 + "</p>";
        projekt += "<p class='desc'>> " + projekti[position].desc2 + "</p><p>> <a href='" + projekti[position].url + "' class='url' target='_blank'> " + projekti[position].urltxt + "</a></p></div>";
        projekt += "<div id='blink'>> <span class='blink'>_</span></div>";
    }

    $(".rightContent").html("").append(projekt);
};

function change() {
    if ($("body").hasClass("black")) {
        $(".black").addClass("white");
        $(".white").removeClass("black");
    }
    else {
        $(".white").addClass("black");
        $(".black").removeClass("white");
    }
};