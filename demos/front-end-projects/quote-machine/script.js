var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = "", currentAuthor = "";

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbal=0, scrollbars=1, location=0, statusbar=0, menubar=0, resizable=0');
}

function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "4oY2w29yt2mshlq76bZrI3ruZJzIp1mZrO9jsndZC5TsqsVvBO",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
        success: function (response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;
            // $("#text").text(r.quote);
            $(".quote-text").animate({
                opacity: 0
            }, 500,
                function () {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('#text').text(r.quote);
                });
            //$("#author").text(r.author);
            $(".quote-author").animate({
                opacity: 0
            }, 500,
                function () {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $('#author').html(r.author);
                });

            var color = Math.floor(Math.random() * colors.length);
            console.log(colors[color]);
            $("html body").animate({
                backgroundColor: colors[color],
                color: colors[color]
            }, 1000);
            $(".button").animate({
                backgroundColor: colors[color]
            }, 1000);
        }
    });
}

$(document).ready(function () {
    getQuote();
    $('#new-quote').on('click', getQuote);
    $('#tweet-quote').on('click', function () {
        openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    });
});
