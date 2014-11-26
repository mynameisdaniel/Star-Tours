StarTours.Routers.Router = Backbone.Router.extend({

  initialize: function (){
    this.$rootEl = $('body')
  },

  routes:{
  	"":"rootView",
  	"test/":"test"
  },

  rootView: function(){
  	var view = new StarTours.Views.RootView();
  	this._swapView(view)

  },

  test: function(){
  	alert("map")
    $('#map-canvas').html("This is the backbone router test page")
  },

  _swapView: function(view){
  	this._current_view && this._current_view.remove();
  	this._current_view = view;
  	this.$rootEl.html(view.render().$el);
  }


});