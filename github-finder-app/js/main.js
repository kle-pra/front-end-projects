$('document').ready(() => {
    $('#searchInput').on("keyup", () => {
        displayResult();
    });
});

const API_URL = 'https://api.github.com/users';

function displayResult() {
    let searchResultOutput = $('#searchResultOutput');
    let inputVal = $('#searchInput').val();
    let output = '';
    
    $.get(API_URL + "/" + inputVal,
        (data, textStatus, jqXHR) => {
             output = '';
            $.get(data.repos_url,
                (repos, textStatus, jqXHR) => {
                    console.log(repos);
                    $.each(repos, function (indexInArray, valueOfElement) {
                        output +=
                            `
                        <div "well">                    
                            <ul class="list-group">
                                <li class="list-group-item">${valueOfElement.name}</li>
                                <li class="list-group-item">${valueOfElement.description}</li>
                                <li class="list-group-item">${valueOfElement.language}</li>
                                <li class="list-group-item">${valueOfElement.public_repos}</li>
                            </ul>                   
                        </div>`;
                    });
                    $('#repos').html(output);
                }
            );
            console.log(data);
            output =
                `<h2>${data.login}</h2>
                <div "well">                    
                    <ul class="list-group">
                        <li class="list-group-item">${data.login}</li>
                        <li class="list-group-item">${data.name}</li>
                        <li class="list-group-item">${data.organizations_url}</li>
                        <li class="list-group-item">${data.public_repos}</li>
                        <li class="list-group-item">${data.login}</li>
                    </ul>                   
                </div>
                <div id='repos' class='well'></div>`;
            searchResultOutput.html(output);
        }
    );
}