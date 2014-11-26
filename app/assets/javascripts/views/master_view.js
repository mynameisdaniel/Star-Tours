StarTours.Views.MasterView = Backbone.View.extend({

  initialize: function(){

  },

  template: JST["root/master"],

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
  	return this
  }

})