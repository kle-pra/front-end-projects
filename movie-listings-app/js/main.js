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
          
            output += `
                <div class="col-md-4">
                    <div class="well text-center">
                        <img src="${movie.Poster}"/>
                        <div class="alert alert-success" role="alert">${movie.Actors}</div>
                        <div class="alert alert-info" role="alert">${movie.Awards}</div>
                        <div class="alert alert-warning" role="alert">${movie.Director}</div>
                        <div class="alert alert-danger" role="alert">${movie.Genre}</div>
                    </div>
                </div>
                <div class="col-md-8">

                    <div class="well text-center">
                        <h5>${movie.Title}</h5>
                        <div class="alert alert-success" role="alert">${movie.Actors}</div>
                    </div>
                </div>
            `;

            $('#movie').html(output);

        }).catch((err) => {

        });

}