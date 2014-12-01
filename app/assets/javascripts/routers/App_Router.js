StarTours.Routers.Router = Backbone.Router.extend({

  initialize: function (options){
    this.$rootEl = options.$rootEl
  },

  routes:{
  	"":"rootView",
  	"master/":"masterView",
    "about":"aboutView",
    "contact":"contactView",

  	"locations/new": "locationNew",
  	"locations/:id": "locationShow",
    "locations/:id/reservations": "locationReservations",
    "locations/:id/reviews": "locationReviews"
  },

  contactView: function(){
    var view = new StarTours.Views.TestView();
    this._swapView(view)

  },

  aboutView: function(){
    var view = new StarTours.Views.TestView();
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