$(document).ready(() => {
    loadRandomQuote();
    $("#loadQuoteButton").on('click', loadRandomQuote);
});

function loadRandomQuote() {
    $.ajax({
        dataType: "json",
        url: "https://random-quote-generator.herokuapp.com/api/quotes/random",
        success: (result, status, xhr) => {
            //setup quote text html
            $("#author").html(result.author);
            $("#quote").html(result.quote);
            //setup tweet url
            $("#tweetQuoteButton").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' +  $("#quote").html() + '" ' +  $("#author").html()));
        }
    });
}
