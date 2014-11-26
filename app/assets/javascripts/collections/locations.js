StarTours.Collections.Locations = Backbone.Collection.extend({

	url: "/api/locations",

	model: StarTours.Models.Location
	
})

StarTours.Collections.locations = new StarTours.Collections.Locations()