Description: NewPlaces()
Test: It will add a location to a place
Code: let place1 = new NewPlaces(Portland);
Expected Result: place1 = Portland

Test: It will add landmarks, time of year and notes as properties to variables
Code: let place1 = new NewPlaces("Portland", "Pittock Mansion", "Summer", "It was fun");
Expected Result: place1 = {location: "Portland", landmark: "Pittock Mansion", time: "Summer", notes: "It was fun")

Test: It can store mutliple variables
Code: let place2 = new NewPlaces("Seattle", "Space Needle", "Winter", "It was wet");
Expected Result: place2 = {location: 'Seattle', landmark: 'Space Needle', timeOfYear: 'Winter', notes: 'It was wet'}

Description: PlacesIveBeen()
Test: It should list every variable in NewPlaces()
Code: let visited = new PlacesIveBeen(place1, place2)
Expected Result: