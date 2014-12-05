StarTours.Views.AboutView = Backbone.View.extend({

  initialize: function(){
  	this.listenTo(this.model, "sync", this.render)
  },

  className: "about",

  template: JST["root/about"],

  render: function(){
  	var renderedContent = this.template({user:this.model});
  	this.$el.html(renderedContent);
  	return this
  }

})