var apiKey = 'AIzaSyDFgOsikUd4N7U-wnCcsZ8cRmUQEUQIfEo';
var url = 'https://www.googleapis.com/youtube/v3/search';

$(document).ready(function () {
    $('#search-form').submit(function (e) {
        e.preventDefault();
    });

    $('#submit-button').click(function (e) {
        e.preventDefault();
        search();
    })
});

function search() {

    // Clear the DOM
    $('#results').html('');
    $('#buttons').html('');

    // Get form input

    var query = $('#query').val();

    // GET REQUEST

    $.get(
        url, {
            part: 'snippet, id',
            q: query,
            type: 'video',
            maxResults: 1,
            key: apiKey
        },
        function (data) {
            console.log(data);
            var nextPageToken = data.nextPageToken;
            var prevPageToken = data.prevPageToken;

            $.each(data.items, function (index, item) {
                var output = buildOutput(item);
                // Display Results
                $('#results').append(output);
            });
        }
    )
}

function buildOutput(item) {

    var videoId = item.id.videoId;
    var title = item.snippet.title;
    var description = item.snippet.description;
    var thumbnail = item.snippet.thumbnails.high.url;
    var channelTitle = item.snippet.channelTitle;
    var videoDate = item.snippet.publishedAt;

    return `<div class="col-md-5 video-thumbnail">
                    <iframe width="440" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    <hr>
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <hr>
                    <p>Published By: ${channelTitle}</p>
                    <p>Published On: ${videoDate}</p>
                </div>`;
}