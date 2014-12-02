<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="data.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
    <div
        class="fb-like"
        data-share="true"
        data-width="450"
        data-show-faces="true">
    </div>
    <div class="container">
        <div id="start-screen">
            <div id="start" onclick="start()"></div>
        </div>
        <div id="header"></div>
        <div id="white-bkg">
            <div id="question-holder">
                <div id="question"></div>
                <div id="radio">
                    <input type="radio" name="a" value="a" />
                    <div class="ans a"></div>
                    <br />
                    <input type="radio" name="b" value="b" />
                    <div class="ans b"></div>
                    <br />
                    <input type="radio" name="c" value="c" />
                    <div class="ans c"></div>
                    <br />
                    <input type="radio" name="d" value="d" />
                    <div class="ans d"></div>
                    <br />
                    <input type="radio" name="e" value="e" />
                    <div class="ans e"></div>
                </div>
            </div>
            <div id="next" onclick="next()">Dalje</div>
        </div>
    </div>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>
