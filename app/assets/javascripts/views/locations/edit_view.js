StarTours.Views.LocationEdit = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.model, "sync", this.render)
  },

  template: JST["locations/edit"],

  className: "edit-page",

  events:{
    "submit form":"submit"
  },

  submit: function(event){
    event.preventDefault();
    var attrs = this.$el.find('form').serializeJSON().location;
    this.model.set(attrs)
    this.model.save({}, {
      success: function(response){ 
        Backbone.history.navigate("#/locations/"+ response.id)
      }
    });
  },
 
  render: function(){
  	var renderedContent = this.template({
  		location: this.model
  	});
  	this.$el.html(renderedContent);
  	return this
  }

})