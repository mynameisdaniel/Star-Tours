StarTours.Views.LocationsShow = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.model, "sync", this.render)
  },

  template: JST["locations/show"],

  events: {
   "submit form": "addPicture"
  },

  addPicture: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var attrs = $target.serializeJSON().location_picture
    var newPicture = new StarTours.Models.LocationPicture()
    newPicture.save(attrs,{
      success: function(response){
        debugger
        Backbone.history.navigate(this.model.url().slice(4), { trigger: true})
      }.bind(this)
    }) 
  },

  render: function(){
  	var renderedContent = this.template({
  		location: this.model, 
      pictures: this.model.pictures(),
      reviews: this.model.reviews(),
      reservations: this.model.reservations(),
      firstPicture: this.model.pictures().models[0]
  	});
  	this.$el.html(renderedContent);
  	return this
  }

})