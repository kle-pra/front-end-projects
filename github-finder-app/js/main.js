$('document').ready(() => {
    $('#searchInput').on("keyup", () => {
        displayResult();
    });
});

const API_URL = 'https://api.github.com/users';

function displayResult() {
    let searchResultOutput = $('#searchResultOutput');
    let inputVal = $('#searchInput').val();
    let repoOutput = '';
    let output = '';
    
    $.get(API_URL + "/" + inputVal,
        (data, textStatus, jqXHR) => {
            
            $.get(data.repos_url,
                (repos, textStatus, jqXHR) => {
                    console.log(repos);
                    $.each(repos, function (indexInArray, valueOfElement) {
                        repoOutput +=
                            `
                        <div class='row'>
                            <div class="col-sm-12">
                                <div class='well'>                    
                                    <ul class="list-group">
                                        <li class="list-group-item">${valueOfElement.name}</li>
                                        <li class="list-group-item">${valueOfElement.description}</li>
                                        <li class="list-group-item">${valueOfElement.language}</li>
                                        <li class="list-group-item">${valueOfElement.public_repos}</li>
                                    </ul>                   
                                </div>
                            </div>                      
                        </div>`;
                    });
                    $('#repos').html(repoOutput);
                }
            );
            console.log(data);
            output +=
                `<h2>${data.login}</h2>
                <div class='row'>
                    <div class="col-md-4">
                         <a href="#" class="thumbnail">
                            <img src="https://avatars0.githubusercontent.com/u/2387907?v=3" alt="...">
                        </a>
                    </div>
                    <div class="col-md-8">                   
                        <ul class="list-group">
                            <li class="list-group-item">Name: ${data.name}</li>
                            <li class="list-group-item">URL ${data.url}</li>
                            <li class="list-group-item">Num. of repos: ${data.public_repos}</li>
                        </ul>                   
                    </div> 
                </div>
                <h3>Repos</h3>
                <div id='repos' class='well'></div>`;
            searchResultOutput.html(output);
        }
    );
}