const API = 'http://www.omdbapi.com/?';

$(document).ready(() => {

    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);

        e.preventDefault();
    });

});


function getMovies(searchText) {

    axios.get(API + 's=' + searchText)
        .then((response) => {
            let movies = response.data.Search;
            console.log(movies);
            let output = '';
            $.each(movies, (movieIndex, movieValue) => {

                output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movieValue.Poster}"/>
                        <h5>${movieValue.Title}</h5>
                        <a onclick="movieSelected('${movieValue.imdbID}')" href="#">Details</a>
                    </div>
                </div>
            `;
            });

            $('#movies').html(output);

        }).catch((err) => {

        });
}

function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location.href = '/movie.html';
    return false;
}

function getMovie() {
    //read current from session storage and fetch data about movie
    let movieId = sessionStorage.getItem('movieId');
    let output = '';
    axios.get(API + 'i=' + movieId)
        .then((response) => {
            let movie = response.data;
            console.log(movie);

            output += `
            <div class="row">
                <div class="col-md-4">
                    <div class="well">
                        <img src="${movie.Poster} class="thumbnail"/>
                    </div>
                </div>
                <div class="col-md-8">

                    <div class="well text-center">
                        <h3>${movie.Title} <span class="badge">IMDB Rating: ${movie.imdbRating}</span></h3>
                        <ul class="list-group">
                            <li class="list-group-item">${movie.Year}  (${movie.Type})</li>
                            <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                            <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                            <li class="list-group-item"><strong>Language:</strong> ${movie.Language}</li>
                        </ul>
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <h4>Plot</h4>
                                ${movie.Plot}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="well text-center">
                         <a class="btn btn-default" href="/">Back to search</a>
                         <a class="btn btn-default" href="http://www.imdb.com/title/${movieId}">Imdb link</a>
                    </div>
                </div>
            </div>
            `;

            $('#movie').html(output);

        }).catch((err) => {

        });

}