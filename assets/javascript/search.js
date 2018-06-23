var apiKey = "33d087ebaa314bdc89805b34d942a5cc"

var searchInput = "";
var


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;


//  on click event to submit AJAX request for NY Times articles.
$("#searchClick").on("click", function() {

  // fetches NY Times Article data
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var articleBody = $(".card-text");

    for (var i = 0; i < aricleNum.length; i++) {

    }
  });

}


// clears our top articles card section
$("#clear-results").on("click", function() {
  $(".card-text").empty();
}
