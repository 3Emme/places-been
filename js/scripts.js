function Destination(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

let Belize = new Destination ("Central America", ["barrier reef", "Mayan ruins"], "Summer", ["You might see a monkey while ziplining.", "There is actual blood at the ruins."]);

let Philadelphia = new Destination ("United States", ["Liberty Bell", "Philadelphia Museum of Art"], "Fall", ["The movie 'Rocky' made the steps at the PMA famous."]);

let NewOrleans = new Destination ("United States", ["The French Quarter", "Bourbon Street", "St. Louis Cathedral"], "Spring", ["There's a really great place for beginets; make sure to visit this spot again", "Do vampires really walk the streets of the French Quarter? I think so..."]);

let SanFrancisco = new Destination ("United States", ["The Financial District", "South of Market", "The Tenderloin"], "Fall", ["There's much better vegan food in the east bay", "Some streets smell real bad.", "Home of the Juul"]);