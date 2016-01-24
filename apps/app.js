$(function () {
    $('#search-button').click(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

$(document).on('keypress', function (key) {
    //keyCode == 13 is the ENTER key
    if (key.keyCode == 13) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    }
});


function getRequest(searchTerm) {
    var params = {
        part: 'snippet',
        maxResults: 12,
        key: 'AIzaSyDxjdr6VmreUT50yeO6GIL2jCEOZ0pnYOI',
        q: searchTerm
    };
    url = 'https://www.googleapis.com/youtube/v3/search';

    $.get(url, params, function (data) {
        showResults(data.items);
    }, 'json');

}


function showResults(results) {
    var html = "";
    $.each(results, function (index, value) {
        html += '<li><div class="title">' + value.snippet.title + '</div><div class="image"><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '" target="_blank"><img src="' + value.snippet.thumbnails.medium.url + '"/></a></div></li>';
    });
    $('#results-list').html(html);
}
