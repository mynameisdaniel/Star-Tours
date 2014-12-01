StarTours.Models.Location = Backbone.Model.extend({

  urlRoot: "/api/locations",

	  pictures: function(){
	    if (this._pictures){
	      return this._pictures;
	    } else {
	      this._pictures = new StarTours.Collections.LocationPictures([], { location: this});
	      return this._pictures;
	    }
	  },

	  reservations: function(){
	  	if (this._reservations){
	  		return this._reservations;
	  	} else {
        this._reservations = new StarTours.Collections.LocationReservations([], { location: this});
	      return this._reservations;
	  	}
	  },

    reviews: function(){
	  	if (this._reviews){
	  		return this._reviews;
	  	} else {
        this._reviews = new StarTours.Collections.LocationReviews([], { location: this});
	      return this._reviews;
	  	}
	  },

  
    parse: function(response){
      if (response.pictures){
        this.pictures().set(response.pictures, {parse: true});
        delete response.pictures
      }
      if (response.reservations){
        this.reservations().set(response.reservations, {parse: true});
        delete response.reservations
      }
      if (response.reviews){
        this.reviews().set(response.reviews, {parse: true});
        delete response.reviews
      }
      return response;
    }

})