StarTours.Views.MasterView = Backbone.View.extend({

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render)

  },

  template: JST["root/master"],

  render: function(){
  	var renderedContent = this.template({locations: this.collection});
  	this.$el.html(renderedContent);

  	// var listIndexView = new StarTours.Views.LocationsIndex({
  	// 	collection: this.collection
  	// })
  	// this.$el.find("#listings-index").html(listIndexView)
  	return this
  }

})