StarTours.Views.MasterView = Backbone.CompositeView.extend({

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render)

  },

  template: JST["root/master"],

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
    this.collection.each(function(location){
      var masterIndexSubview = new StarTours.Views.LocationsIndex({model:location});
      // this.$el.find('#listings-index').append(masterIndexSubview.render().$el)
      this.addSubview("#listings-index", masterIndexSubview);

    }.bind(this))
  	return this
  }

})