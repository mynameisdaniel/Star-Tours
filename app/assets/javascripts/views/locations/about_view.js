StarTours.Views.AboutView = Backbone.View.extend({

  initialize: function(){
  },

  className: "about",

  template: JST["root/about"],

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
  	return this
  }

})