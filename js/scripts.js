function Destination(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

let belize = new Destination ("Central America", ["barrier reef", "Mayan ruins"], "Summer", ["You might see a monkey while ziplining.", "There is actual blood at the ruins."]);

let philadelphia = new Destination ("United States", ["Liberty Bell", "Philadelphia Museum of Art"], "Fall", ["The movie 'Rocky' made the steps at the PMA famous."]);

let newOrleans = new Destination ("United States", ["The French Quarter", "Bourbon Street", "St. Louis Cathedral"], "Spring", ["There's a really great place for beginets; make sure to visit this spot again", "Do vampires really walk the streets of the French Quarter? I think so..."]);

let sanFrancisco = new Destination ("United States", ["The Financial District", "South of Market", "The Tenderloin"], "Fall", ["There's much better vegan food in the east bay", "Some streets smell real bad.", "Home of the Juul"]);

function hideDetails() {
  $("#belizeDetails").hide();
  $("#philadelphiaDetails").hide();
  $("#sanFranciscoDetails").hide();
  $("#newOrleansDetails").hide();
}

// Interface Logic
$(document).ready(function(){  
  $("h3#belize").click(function(){
    event.preventDefault();
    hideDetails();
    $("#belizeDetails").show();
    $("#belizeLocation").text(belize.location);
    $("#belizeLandmarks").text(belize.landmarks);
    $("#belizeSeason").text(belize.season);
    $("#belizeNotes").text(belize.notes);
  });
  $("h3#philadelphia").click(function(){
    event.preventDefault();
    hideDetails();
    $("#philadelphiaDetails").show();
    $("#philadelphiaLocation").text(philadelphia.location);
    $("#philadelphiaLandmarks").text(philadelphia.landmarks);
    $("#philadelphiaSeason").text(philadelphia.season);
    $("#philadelphiaNotes").text(philadelphia.notes);
  });
  $("h3#newOrleans").click(function(){
    event.preventDefault();
    hideDetails();
    $("#newOrleansDetails").show();
    $("#newOrleansLocation").text(newOrleans.location);
    $("#newOrleansLandmarks").text(newOrleans.landmarks);
    $("#newOrleansSeason").text(newOrleans.season);
    $("#newOrleansNotes").text(newOrleans.notes);
  });
  $("h3#sanFrancisco").click(function(){
    event.preventDefault();
    hideDetails();
    $("#sanFranciscoDetails").show();
    $("#sanFranciscoLocation").text(sanFrancisco.location);
    $("#sanFranciscoLandmarks").text(sanFrancisco.landmarks);
    $("#sanFranciscoSeason").text(sanFrancisco.season);
    $("#sanFranciscoNotes").text(sanFrancisco.notes);
  });

});