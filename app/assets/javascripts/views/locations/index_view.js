StarTours.Views.LocationsIndex = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.model, "sync", this.render)
  },

  className: "master-index-show",

  template: JST["locations/index"],

  events: {
    "click strong":"redirect",
    "click .delete-location":"deleteLocation"
  },

  deleteLocation: function(event){
    event.preventDefault();
    // destroy via view model
    this.model.destroy({
      success: function(response){
        this.remove();
      }.bind(this)
    });
  },

  redirect: function(event){
    // alert("redirect" + this.model.get("id"))
    Backbone.history.navigate("#/locations/"+ this.model.get("id"), {trigger: true})
  },  

  render: function(){
  	var renderedContent = this.template({
  		location: this.model
  	});
  	this.$el.html(renderedContent);
  	return this
  }

})