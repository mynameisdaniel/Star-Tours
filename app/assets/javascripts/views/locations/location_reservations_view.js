StarTours.Views.LocationReservations = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.model, "sync", this.render)
  },

  template: JST["locations/reservations"],

    events: {
    "submit form.add-reservation":"addReservation",
    "submit form.approve-reservation":"updateReservation",
    "submit form.deny-reservation":"updateReservation"
  },

  updateReservation: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var reservation = this.model.reservations().get($target.data("id"));
    var attrs = $target.serializeJSON().reservation;
    reservation.set(attrs);
    reservation.save({}, {
      success: function(response){
        Backbone.history.navigate(this.model.url().slice(4), { trigger: true})
      }.bind(this)
      }
    )
  },

  addReservation: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var attrs = $target.serializeJSON().reservation;
    var newReservation = new StarTours.Models.Reservation();
    debugger
    newReservation.save(attrs,{
      success: function(response){
        Backbone.history.navigate(this.model.url().slice(4), { trigger: true})
      }.bind(this)
    }) 
  },

  render: function(){
  	var renderedContent = this.template({
  		location: this.model, 
      reservations: this.model.reservations(),
  	});
  	this.$el.html(renderedContent);
  	return this
  }

})