$(document).ready(() => {
    loadRandomQuote();
    $("#loadQuoteButton").on('click', () => {
        loadRandomQuote();
    });

    $("#tweetQuoteButton").on('click', () => {
        tweetCurrentQuote();
    });
});

function loadRandomQuote() {
    console.log("call API and show data");
    $.ajax({
        dataType: "json",
        url: "https://random-quote-generator.herokuapp.com/api/quotes/random",
        success: (result, status, xhr) => {
            $("#author").html(result.author);
            $("#quote").html(result.quote);

            //setup tweet url
            $("#tweetQuoteButton").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=test&text='
     + encodeURIComponent('"' +  $("#quote").html() + '" ' +  $("#author").html()));


        }
    });
}
