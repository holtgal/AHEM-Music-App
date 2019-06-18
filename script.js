// $(document).ready(function () {
//     $('#search-term').submit(function (event) {
//         event.preventDefault();
//         console.log("hello")
//         var searchTerm = $('#query').val();
//         getRequest(searchTerm);
//     });
// });

// function getRequest(searchTerm) {
//     var url = 'https://www.googleapis.com/youtube/v3/search';
//     var params = {
//         part: 'snippet', 
//         key: 'AIzaSyC4xO6dXivjnx0wrezKJeFYLNEiAb89hkw',
//         q: searchTerm
//     };
//     console.log(searchTerm)
//     $.getJSON(url, params, showResults);
// };
// var html = "";

// function youtubeVid(){
//     var videoId = "https://www.youtube.com/watch?v=" + html + "?rel=0">;
//     <iframe src = videoId></iframe>
//     $(#search-results).attr()
// };

// function showResults(results) {
//     console.log(results)
//     var entries = results.items;
//     $.each(entries, function (index, value) {
//         var title = value.snippet.title;
//         var thumbnail = value.snippet.thumbnails.default.url;
//         html += '<p>' + title + '</p>';
//         html += '<img src="' + thumbnail + '">';
//     });

//     $('#search-results').html(html);
// }

// Want to get the value of the videoID 
// create function of videoID
//hi
// $("#buttons").on("submit", function (event) {
//   event.preventDefault();
//   var query = $("#searchBar").val();
//   console.log(query)
//   $("#searchBar").empty()
//   var search = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + query + "&type=band&info=1&limit=3&k=338293-Project1-8GU1MS4N&type%20=band",
//     "method": "GET",
//   };

//   $.ajax(search).done(function (response) {
//     console.log(response.Similar.Results);
//     for (var i = 0; i < response.Similar.Results.length; i++)
//       $("#search-results").prepend("<p>" + response.Similar.Results[0].Name + "</p>" + "<p>" + response.Similar.Results[0].wTeaser + "</p>");
//   });
// });


// youtube api key = AIzaSyD4cRH3cY-73PziP3D8u-2zQSiE1yoofYw 
// $("#buttons").on("submit", function (event) {
//   event.preventDefault();

//   var query = $("#searchBar").val();
// console.log(query)
//   // var queryURL = "GET https://www.googleapis.com/youtube/v3/search?q=" + query + "&key=AIzaSyD4cRH3cY-73PziP3D8u-2zQSiE1yoofYw";
//   var queryURL = "https://www.googleapis.com/youtube/v3/search?q=jayz&key=AIzaSyD4cRH3cY-73PziP3D8u-2zQSiE1yoofYw";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//     console.log(response)

//   });
// });
var apiKey = 'AIzaSyDFgOsikUd4N7U-wnCcsZ8cRmUQEUQIfEo';
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
      "url": "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + question + "&type=band&info=1&limit=3&k=338293-Project1-8GU1MS4N&type%20=band",
      "method": "GET",
    };
  
    $.ajax(taste).done(function (data) {
      console.log(data.Similar.Results);
      for (var i = 0; i < data.Similar.Results.length; i++)
        $("#results").prepend("<p>" + data.Similar.Results[i].Name + "</p>" + "<p><a href='" + data.Similar.Results[i].wUrl + "'/a></p>" + "<p><a href='" +data.Similar.Results[i].yUrl + "'/a></p>");
    });
  });
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