StarTours.Views.LocationsShow = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.model, "sync", this.render)
  },

  template: JST["locations/show"],


  render: function(){
  	var renderedContent = this.template({
  		location: this.model
  	});
  	this.$el.html(renderedContent);
  	return this
  }

})