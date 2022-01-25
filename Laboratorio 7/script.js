$(document).ready(function() {

var artists =[
    "louis tomlinson", "harry styles", "liam payne", "zayn malik", "niall horan", "the drums",
     "artic monkeys", "5sos", "fur", "bring me the horizon", "blackbear", 
     "caifanes", "tender", "enjambre", "hunny", "the neighbourhood", "1D"
];


for (let i = 0; i < artists.length; i++) {
   let artist = $("<button>")
    artist.addClass("artist-button")
    artist.text(artists[i])
    artist.attr("data-type", artists[i])
    $("#artist-buttons").append(artist)

}

$("#add").on("click", addArtist)

function addArtist(e){
    e.preventDefault()
    let artist = $("<button>")
    var res = $("#artist-input").val()
    $("#artist-buttons").append(artist)
    artist.text(res)
    artist.addClass("artist-button")
    artist.attr("data-type", res)
    
}

$("#artist-buttons").on("click", ".artist-button", function(){
    $("#artistas").empty()

    let search = $(this).attr("data-type")
    let query = "https://api.giphy.com/v1/gifs/search?q="+search+"&api_key=s5QoHDmEpxXg2qd92w8f2Hg0M4rKQJ7g"

    $.ajax({
        url: query
    })
    .then(function(response){
        let results = response.data

        for(let i = 0; i < results.length; i++ ){
            let artDiv = $("<div class = \"art-item\">")
            let rating = results[i].rating
            let p = $("<p>").text("Rating: "+ rating)
            let artImage = $("<img id = artImg >")
            artImage.attr("src", results[i].images.fixed_height_still.url)
            artImage.attr("data-still", results[i].images.fixed_height_still.url)
            artImage.attr("data-animate", results[i].images.fixed_height.url)
            artImage.attr("data-state","still")
            artDiv.append(p)
            artDiv.append(artImage)

            $("#artistas").append(artDiv)
        }
    })
});

$("#artistas").on("click", "img", function(){
    if ($(this).attr("data-state") == "still"){
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr("data-state", "animate")
    }else{
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-state", "still")
    }
});
});