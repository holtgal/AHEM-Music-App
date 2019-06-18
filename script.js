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
$("#buttons").on("submit", function (event) {
  event.preventDefault();
  var query = $("#searchBar").val();
  console.log(query)
  $("#searchBar").empty()
  var search = {
    "async": true,
    "crossDomain": true,
    "url": "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + query + "&type=band&info=1&limit=1&k=338293-Project1-8GU1MS4N&type%20=band",
    "method": "GET",
  };

  $.ajax(search).done(function (response) {
    console.log(response.Similar.Results);
    for (var i = 0; i < response.Similar.Results.length; i++)
      $("#search-results").append("<p>" + response.Similar.Results[0].Name + "</p>" + "<p>" + response.Similar.Results[0].wTeaser + "</p>");
  });
});


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