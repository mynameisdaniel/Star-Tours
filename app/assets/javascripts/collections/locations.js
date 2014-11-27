StarTours.Collections.Locations = Backbone.Collection.extend({

	url: "/api/locations",

	model: StarTours.Models.Location,

	getOrFetch: function(id){
		var locations = this;
		var location = this.get(id);
		if (!location) {
			location = new StarTours.Models.Location({id:id})
			location.fetch();
		} else {
			location.fetch();
		}
		return location;
	}
	
})

StarTours.Collections.locations = new StarTours.Collections.Locations()