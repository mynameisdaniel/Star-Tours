StarTours.Views.UserIndex = Backbone.View.extend({

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render)
  },

  template: JST["root/users"],

  render: function(){
  	var renderedContent = this.template({users:this.collection});
  	this.$el.html(renderedContent);
  	return this
  }

})