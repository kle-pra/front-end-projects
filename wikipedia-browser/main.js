$(document).ready(function () {


    var output="";

    $("#randomArticle").on("click", function () {
        window.location = "https://en.wikipedia.org/wiki/Special:Random";
    });

    $("#searchInput").on("keyup", function () {
        var output="";
        $.ajax({
            dataType: 'json',
            url: "https://en.wikipedia.org/w/api.php?action=query&generator=search&utf8=1&gsrsearch="+ $("#searchInput").val() +"&prop=extracts&exintro=1&exlimit=20&exchars=200&origin=*&format=json",
            // url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + $("#searchInput").val() + "&utf8=1&origin=*&format=json",
            success: function (result) {
                console.log(result);
                $.each(result.query.pages, function (index, value) {
                     output+="<div class='col-md-12'><p><h2>"+value.title+"</h2></p><p>"+value.extract+"<a id='link' href='https://en.wikipedia.org/?curid="+index+"'> to Wikipedia</a></p></div>";
                })

                $("#results").html(output);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});