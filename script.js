var pitanja = [prvo, drugo, trece, cetvrto, peto, sesto, sedmo, osmo, deveto, deseto];
var trenutnoPitanje = 0;
var brojacZ = 0;

$(document).ready(function () {
    load_question();
});

function next() {
    if ($("#question-holder input[type='radio']:checked").val() != undefined) {
        if (pitanja[trenutnoPitanje-1].Z.indexOf($("#question-holder input[type='radio']:checked").val()) >= 0) {
            brojacZ++;
        }
        $("#question-holder input[type='radio']").removeAttr("checked");
        load_question();
    }
    else {
        console.log("error");
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
        console.log(brojacZ);
    }
};