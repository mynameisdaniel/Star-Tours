StarTours.Routers.Router = Backbone.Router.extend({

  initialize: function (options){
    this.$rootEl = options.$rootEl
  },

  routes:{
  	"":"rootView",
  	"master/":"masterView",
    "about":"aboutView",
    "users":"userIndex",
    "users/:id":"userShowView",
  	"locations/new": "locationNew",
  	"locations/:id": "locationShow",
    "locations/:id/reservations": "locationReservations",
    "locations/:id/reviews": "locationReviews",
    "locations/:id/edit": "locationEdit"
  },

  userIndex: function(){
    StarTours.Collections.users.fetch();
    var view = new StarTours.Views.UserIndex({
      collection: StarTours.Collections.users
    });
    this._swapView(view)
  },

  userShowView: function(id){
    var user = StarTours.Collections.users.getOrFetch(id);
    var view = new StarTours.Views.AboutView({model: user});
    this._swapView(view)
  },

  aboutView: function(){
    var user = StarTours.Collections.users.getOrFetch(1);
    var view = new StarTours.Views.AboutView({model: user});
    this._swapView(view)
  },

  rootView: function(){
  	var view = new StarTours.Views.RootView();
  	this._swapView(view)
  },

  masterView: function(){
    StarTours.Collections.locations.fetch();
    var view = new StarTours.Views.MasterView({
      collection: StarTours.Collections.locations
    });
   	this._swapView(view)
  },

  locationIndex: function(){
    alert("index");
    $('.main-content').html("This is the backbone location indexpage");
  },

  locationShow: function(id){
    var location = StarTours.Collections.locations.getOrFetch(id);
    var view = new StarTours.Views.LocationsShow({ model: location});
    this._swapView(view);
  },

  locationReviews: function(id){
    var location = StarTours.Collections.locations.getOrFetch(id);
    var view = new StarTours.Views.LocationReviews({ model: location});
    this._swapView(view);
  },

  locationReservations: function(id){
    var location = StarTours.Collections.locations.getOrFetch(id);
    var view = new StarTours.Views.LocationReservations({ model: location});
    this._swapView(view);
    
  },

  locationEdit: function(id){
    var location = StarTours.Collections.locations.getOrFetch(id);
    var view = new StarTours.Views.LocationEdit({ model: location});
    this._swapView(view)

  },

  locationNew: function(){
    StarTours.Collections.locations.fetch();
    var newLocation = new StarTours.Models.Location();
    var view = new StarTours.Views.LocationsNew({
      model: newLocation,
      collection: StarTours.Collections.locations
    });
    this._swapView(view);
  }, 

  test: function(){
  	alert("testRoute - enjoy the map");
    $('.main-content').html("This is the backbone router test page");
  },

  _swapView: function(view){
  	this._current_view && this._current_view.remove();
  	this._current_view = view;
  	this.$rootEl.html(view.render().$el);
  }


});