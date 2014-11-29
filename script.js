var pitanja = [prvo, drugo, trece, cetvrto, peto, sesto, sedmo, osmo, deveto, deseto];
var trenutnoPitanje = 0;
var brojacZ = 0;

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
        $("#radio").empty();
        if (brojacZ >= 5) {
            $("#question").text("Samopouzdana si i vrckava i ekstra kul mačka. U srednjoj su se svi htjeli družit s tobom! Ti ne uzimaš 'ne' kao odgovor, što znači da je više-manje sve uvijek po tvom. Većina ljudi se umori samo gledajući u tvoj raspored. Impulzivna si i ponekad te to dovede u neprilike, ali svi znaju da se samo zabavljaš.");
        }
        else {
            $("#question").text("Imaš istančan smisao za humor koji gotovo nitko drugi ne razumije. Čula si za sve bendove prije nego su ih počeli puštat na radiju. Nakon dvije pive postaješ središte svakog partija, ali nitko nažalost ne dijeli s tobom to mišljenje. Uvijek pobjeđuješ u Magic: the Gathering-u.");
        }
    }
};