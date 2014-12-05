StarTours.Collections.Users = Backbone.Collection.extend({

	url: "/users",

	model: StarTours.Models.User,

	getOrFetch: function(id){
		var users = this;
		var user = this.get(id);
		if (!user) {
			user = new StarTours.Models.User({id:id})
			user.fetch();
		} else {
			user.fetch();
		}
		return user;
	}
	
})

StarTours.Collections.users = new StarTours.Collections.Users()