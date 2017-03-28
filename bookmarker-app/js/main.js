
showBookmarks();

// listener for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(event) {
    //get values of input elements 
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteURL').value;

    if (!validate(siteName, siteUrl)) {
        return false;
    }

    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    //clear form
    document.getElementById('siteName').value = '';
    document.getElementById('siteURL').value = '';

    saveBookmarkToStorage(bookmark);
    showBookmarks();

    // prevent from default submiting (to / or action att. value); this can be at the end, this function will always complete first
    event.preventDefault();
}

function showBookmarks() {
    var bookmarsOutput = document.getElementById('result');
    bookmarsOutput.innerHTML = '';

    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (bookmarks !== null) {

        for (var i = 0; i < bookmarks.length; i++) {
            var name = bookmarks[i].name;
            var url = bookmarks[i].url;

            bookmarsOutput.innerHTML +=
                '<div class="well"><h3>' + name +
                ' <a class="btn btn-default" href="' + url + '" target="_blank">Go visit</a>' +
                ' <a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a>' +
                '</h3></div>';
        }
    }
}

function deleteBookmark(url) {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    for (var i = 0; i < bookmarks.length; i++) {
        var curUrl = bookmarks[i].url;
        if (curUrl === url) {
            bookmarks.splice(i, 1);
        }
        break;
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    showBookmarks();
}

function saveBookmarkToStorage(bookmark) {
    if (localStorage.getItem('bookmarks') === null) {
        //init new array
        var bookmarks = [];
        bookmarks.push(bookmark);
        //set it back
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //get existing
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        //re-set it back
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
}

function validate(siteName, siteUrl) {
    //simple validation
    if (!siteName || !siteUrl) {
        alert("You must fill in the form");
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert("Url not valid");
        return false;
    }
    return true;
}