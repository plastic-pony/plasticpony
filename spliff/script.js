var pitanja = [prvo, drugo, trece, cetvrto, peto, sesto, sedmo, osmo, deveto, deseto];
var trenutnoPitanje = 0;
var brojacZ = 0;
var FB;

window.fbAsyncInit = function () {
    FB.init({
        appId: '747185868693965',
        xfbml: true,
        version: 'v2.2'
    });

    load_question();
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function next() {
    $("#missing").hide();
    if ($("#question-holder input[type='radio']:checked").val() != undefined) {
        if (pitanja[trenutnoPitanje - 1].Z.indexOf($("#question-holder input[type='radio']:checked").val()) >= 0) {
            brojacZ++;
        }
        $("#question-holder input[type='radio']").removeAttr("checked");
        load_question();
    }
    else {
        $("#missing").show();
    }
};

function load_question() {
    if (trenutnoPitanje < 10) {
        $("#question").text(pitanja[trenutnoPitanje].question);
        $(".a").text(pitanja[trenutnoPitanje].a);
        $(".b").text(pitanja[trenutnoPitanje].b);
        $(".c").text(pitanja[trenutnoPitanje].c);
        $(".d").text(pitanja[trenutnoPitanje].d);
        $(".e").text(pitanja[trenutnoPitanje].e);
        trenutnoPitanje++;
    }
    else {
        $("#question-holder").empty();
        $("#bkg").css("background-image", "url(images/end.jpg)");
        $("#next").css("background-image", "url(images/redo.png)");
        $("#next").attr("onclick", "redo()");

        if (brojacZ >= 5) {
            $("#Z").show();
        }
        else {
            $("#neZ").show();
        }
    }
};

function start() {
    $("#start-screen").hide();
    $("#bkg").show();
};

function redo() {
    trenutnoPitanje = 0;
    brojacZ = 0;
    location.reload();
};