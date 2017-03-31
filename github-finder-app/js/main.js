$('document').ready(() => {

    const API_URL = 'https://api.github.com/search/users';

    let searchResultOutput = $('#searchResultOutput');

    $('#searchInput').on("keyup", () => {

        let inputVal = $('#searchInput').val();

        $.get(API_URL + "?q=" + inputVal + "&in=login",
            (data, textStatus, jqXHR) => {
                console.log(data);
                searchResultOutput.html(data);
               
            }
        );



    });


});