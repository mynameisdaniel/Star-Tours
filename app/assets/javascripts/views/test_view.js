StarTours.Views.TestView = Backbone.View.extend({

  initialize: function(){

  },

  template: JST["root/test"],

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
  	return this
  }

})