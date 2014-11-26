StarTours.Views.RootView = Backbone.View.extend({

  initialize: function(){

  },

  template: JST["root/show"],

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
  	return this
  }

})