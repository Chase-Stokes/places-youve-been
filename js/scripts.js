function PlacesIveBeen() {
    this.visitedPlace = {};
    this.currentId = 0;
}

PlacesIveBeen.prototype.addPlace = function(visitedPlace) {
  visitedPlace.id = this.assignId();
  this.visitedPlace[visitedPlace.id] = visitedPlace;
}

PlacesIveBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesIveBeen.prototype.findPlace = function(id) {
  if (this.visitedPlace[id] != undefined) {
    return this.visitedPlace[id];
  }
  return false;
}


function NewPlaces(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
} 

let visited = new PlacesIveBeen();

function displayLocationDetails(visitedToDisplay){
  let locationList = $("#places");
  let htmlForLocationInfo = "";
  Object.keys(visitedToDisplay.visitedPlace).forEach(function(key){
    const visitedPlace = visitedToDisplay.findPlace(key);
    htmlForLocationInfo += "<li id=" + visitedPlace.id + ">" + visitedPlace.location + "</li>";
  });
  locationList.html(htmlForLocationInfo);
};


function showPlaces(visitedPlaceId) {
  const place =  visited.findPlace(visitedPlaceId)
  console.log(place)
  $(".show-places").show();
  $(".name-of-place").html(place.location);
  $(".name-of-landmark").html(place.landmark);
  $(".time-of-year").html(place.timeOfYear);
  $(".notes").html(place.notes);
}

function attachEventListeners() {
  $("#places").on("click", "li", function(){
    showPlaces(this.id);
  });
  displayLocationDetails(visited);
};


$(document).ready(function() {
  attachEventListeners();
  $(".new-place").submit(function(event) {
    event.preventDefault();
    const inputtedLocation = $("#new-place").val();
    const inputtedLandmark = $("#new-landmark").val();
    const inputtedTimeOfYear = $("#new-time").val();
    const inputtedNotes = $("#new-note").val();

    $("#new-place").val("");
    $("#new-landmark").val("");
    $("#new-time").val("");
    $("#new-note").val("");

    let newPlaces = new NewPlaces(inputtedLocation, inputtedLandmark, inputtedTimeOfYear, inputtedNotes);
    visited.addPlace(newPlaces);
    displayLocationDetails(visited);
  })
})
// let place1 = new NewPlaces("Portland", "Pitock Mansion", "Summer", "It was fun");
// let place2 = new NewPlaces("Seattle", "Space Needle", "Winter", "It was wet");
// visited.addPlace(place1)
// visited.addPlace(place2)
