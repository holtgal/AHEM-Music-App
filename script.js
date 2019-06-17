$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        console.log("hello")
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });
});

function getRequest(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet', 
        key: 'AIzaSyC4xO6dXivjnx0wrezKJeFYLNEiAb89hkw',
        q: searchTerm
    };
    console.log(searchTerm)
    $.getJSON(url, params, showResults);
};
var html = "";

function youtubeVid(){
    var videoId = "https://www.youtube.com/watch?v=" + html + "?rel=0">;
    <iframe src = videoId></iframe>
    $(#search-results).attr()
};

function showResults(results) {
    console.log(results)
    var entries = results.items;
    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;
        html += '<p>' + title + '</p>';
        html += '<img src="' + thumbnail + '">';
    });

    $('#search-results').html(html);
}

// Want to get the value of the videoID 
// create function of videoID