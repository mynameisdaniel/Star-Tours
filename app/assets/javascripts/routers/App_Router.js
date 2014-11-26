StarTours.Routers.Router = Backbone.Router.extend({

  initialize: function (options){
    this.$rootEl = options.$rootEl
  },

  routes:{
  	"":"rootView",
  	"master/":"masterView",
    "about":"aboutView",
    "contact":"contactView",

  	// "locations/":" locationIndex",
  	// "locations/new": "locationNew",
  	// "locations/:id": "locationShow"
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

  locationShow: function(){
    alert("show");
   $('.main-content').html("This is the backbone location showpage");

  },

  locationNew: function(){
    alert("new");
    $('.main-content').html("This is the backbone location indexpage");

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