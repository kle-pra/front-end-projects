//jquery:
$('document').ready(() => {
    $('#searchInput').on("keyup", () => {
        loadSearchResult();
    });
});

// plain js way:
// let searchElement = document.getElementById('searchInput');
// searchElement.addEventListener('keyup', loadSearchResult);


const API_URL = 'https://api.github.com/users';
//only for test, for production app call REST with credentails from backend:
const CLIENT_ID = '4ff8e2794e8670bb83f7';
const CLIENT_SECRET = 'e3b8042fb90ef5161902998f7c09daa7a57cdba5';
let credentials = {
    "client_id": CLIENT_ID,
    "client_secret": CLIENT_SECRET
};

function loadSearchResult() {
    let searchResultOutput = $('#searchResultOutput');
    let inputVal = $('#searchInput').val();
    let repoOutput = '';
    let output = '';

    $.get(API_URL + "/" + inputVal,
        credentials,
        (data, textStatus, jqXHR) => {

            $.get(data.repos_url,
                credentials,
                (repos, textStatus, jqXHR) => {
                    console.log(repos);
                    $.each(repos, function (indexInArray, repo) {
                        //check if field is not undefined else show empty string
                        let language = repo.language == undefined ? "" : repo.language;
                        repoOutput +=
                            `
                            <div class="col-sm-6 col-md-4">
                                <div class="thumbnail repo">
                                    <div class="caption">
                                        <h3>${repo.name} <span class="label label-info">${language}</span></h3>
                                        <p class="description">${repo.description}</p>
                                        <p class="text-center">
                                            <a href="${repo.html_url}" class="btn btn-primary" role="button" target="_blank">See on GitHub</a>
                                            <a href="repo.html?url=${repo.url}" class="btn btn-primary" role="button" target="_blank">Details</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            `;
                    });
                    $('#repos').html(repoOutput);
                }
            );

            console.log(data);
            output += `
                <div class='container'>
                    <div class='row'>
                        <div class="col-md-3">                                         
                        </div> 
                        <div class="col-md-6">
                            <div class="thumbnail text-center">                       
                                <img id="avatar" src=${data.avatar_url} alt="..."> 
                                <h2>${data.login}</h2>
                                <ul class="list-group">
                                    <li class="list-group-item">Name: ${data.name}</li>
                                    <li class="list-group-item">URL ${data.url}</li>
                                    <li class="list-group-item">Num. of repos: ${data.public_repos}</li>
                                </ul>  
                            </div>
                        </div>
                        <div class="col-md-3">                                         
                        </div> 
                    </div>
                    <h3>Repos</h3>
                    <div id='repos' class='row'>
                    </row>
                </div>`;
            searchResultOutput.html(output);
        }
    );
}

function loadRepoDetails() {
    let url = location.search.split('url=')[1];
    let output = '';
    //jquery ajax function example for get
    $.ajax({
        type: "GET",
        url: url,
        data: credentials,
        success: function (repo) {
            let language = repo.language == undefined ? "" : repo.language;
            output = `
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="text-center">
                            <h3>${repo.name} <span class="label label-success">${language}</span></h3>
                            <ul class="list-group">
                                <li class="list-group-item">Github: <a href="${repo.html_url}">Link</a> </li>
                                <li class="list-group-item">Num of watchers: <span class="badge">${repo.watchers}</span></li>
                                <li class="list-group-item">Homepage: ${repo.homepage}</li>
                                <li class="list-group-item">Num of forks: <span class="badge">${repo.forks}</span></li>
                                <li class="list-group-item">Clone url: ${repo.clone_url}</li>
                                
                            </ul>
                        </div>             
                        <div class="well">
                            <h3>Description</h3>
                            ${repo.description}
                        </div>
                    </div>
                </div>
            `;
            $('#repository_details').html(output);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("There was a error fetching data:  " + jqXHR.status + " " + errorThrown);
        }
    });
} 