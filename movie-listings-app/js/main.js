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
    .then((response)=>{
        let movies = response.data.Search;
        console.log(movies);
        let output='';
        $.each(movies, (movieIndex, movieValue) => { 
            
            output +=`
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movieValue.Poster}"/>
                        <h5>${movieValue.Title}</h5>
                        <a onclick="movieselected('${movieValue.imdbID}')" href="#">Details</a>
                    </div>
                </div>
            `; 
        });
       
        $('#movies').html(output);

    }).catch((err)=>{

    });
}

function movieSelected(id){
    //set to session storage
}

function getMovie(){

//read current from session storage and fetch data about movie

}