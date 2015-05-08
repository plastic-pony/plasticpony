
<!DOCTYPE html>
<head>
    <title></title>
    
    <link rel="canonical" href="https://apps.facebook.com/spliff_zabavni_kviz">
    <meta property="og:url" content="https://apps.facebook.com/spliff_zabavni_kviz">
    <meta property="og:title" content="Spliff zabavni kviz!" />
    <meta property="og:description" content="Rješi Spliff - Zabavni Kviz i otkrij koji si ti član Spliffa!" />
    <meta property="fb:app_id" content="747185868693965" />
    <meta property="article:publisher" content="https://www.facebook.com/spliff.the.band" />
    <meta property="og:image" content="http://imgur.com/TnAZXHk.jpg">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="627">
    
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="data.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
        <div class="container">
        <div id="start-screen">
            <div id="start" onclick="start()"></div>
        </div>
        <div id="bkg">
            <div id="question-holder">
                <div id="question"></div>
                <div id="radio">
                    <div class="pack">
                        <input type="radio" name="spliff" value="a" />
                        <label class="ans a"></label>
                    </div>
                    <div class="pack">
                        <input type="radio" name="spliff" value="b" />
                        <label class="ans b"></label>
                    </div>
                    <div class="pack">
                        <input type="radio" name="spliff" value="c" />
                        <label class="ans c"></label>
                    </div>
                    <div class="pack">
                        <input type="radio" name="spliff" value="d" />
                        <label class="ans d"></label>
                    </div>
                    <div class="pack">
                        <input type="radio" name="spliff" value="e" />
                        <label class="ans e"></label>
                    </div>
                </div>
                <div id="missing"></div>
            </div>
            <div id="Z"></div>
            <div id="neZ"></div>
            <div id="next" onclick="next()"></div>
        </div>
    </div>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>
