window.StarTours = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new StarTours.Routers.Router({$rootEl : $('.main-content')});
  	Backbone.history.start()
  }
};

$(document).ready(function(){
  StarTours.initialize();
});
