StarTours.Views.LocationsIndex = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.collection, "sync", this.render)
  },

  template: JST["locations/index"],

  render: function(){
  	StarTours.Collections.locations.fetch();
  	var renderedContent = this.template({
  		locations: StarTours.Collections.locations
  	});
  	this.$el.html(renderedContent);
  	return this
  }

})