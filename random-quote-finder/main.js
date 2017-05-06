$(document).ready(() => {
    loadRandomQuote();
    $("#loadQuoteButton").on('click', () => {
        loadRandomQuote();
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
        }
    });
}