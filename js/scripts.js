function PlacesIveBeen() {
    this.visitedPlace = {};
    // this.currentId = 0;
}

PlacesIveBeen.prototype.addPlace = function(visitedPlace) {
  this.visitedPlace[visitedPlace] = visitedPlace;
}


function NewPlaces(location, landmark, timeOfYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
} 

let visited = new PlacesIveBeen();

let place1 = new NewPlaces("Portland", "Pitock Mansion", "Summer", "It was fun");

let place2 = new NewPlaces("Seattle", "Space Needle", "Winter", "It was wet");
visited.addPlace(place1)
visited.addPlace(place2)
