const text = baffle(".data");
text.set({
    characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
    speed: 100
});

text.start();
text.reveal(4000);


var apiKey = 'AIzaSyAZaVxKparELJBO6kH4ddJItn1RrGtIxaQ';
var url = 'https://www.googleapis.com/youtube/v3/search';

$(document).ready(function () {
    $('#search-form').submit(function (e) {
        e.preventDefault();
    });

    $('#submit-button').click(function (e) {
        e.preventDefault();
        search();
        var question = $("#query").val();
        console.log(question)
        // $("#search-form").empty()
        var taste = {
            "async": true,
            "crossDomain": true,
            "url": "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + question + "&type=band&info=1&limit=10&k=338293-Project1-8GU1MS4N&type%20=band",
            "method": "GET",
        };

        $.ajax(taste).done(function (data) {
            console.log(data.Similar.Results);
            for (var i = 0; i < data.Similar.Results.length; i++)
                $("#suggestions").prepend("<p>" + data.Similar.Results[i].Name + "</p>" + "<p><a href='" + data.Similar.Results[i].wUrl + "'>" + data.Similar.Results[i].wUrl + "</a></p>" + "<p><a href='" + data.Similar.Results[i].yUrl + "'>" + data.Similar.Results[i].yUrl + "/a></p>");
        });





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
                $('#resultsVideo').prepend(output);
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

    return `<div class="col-md-8 video-thumbnail">
                    <iframe width="440" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    <hr>
                    <div>
                    <h4>${title}</h4>
                    <p>${description}</p>
                </div>
                </div>`;
}
