StarTours.Views.LocationReviews = Backbone.View.extend({

  initialize: function(){
    this.listenTo( this.model, "sync", this.render);
    this.locationReviews = this.model.reviews();
    this.listenTo( this.locationReviews, "remove", this.render);
  },

  template: JST["locations/reviews"],

  events: {
    "submit form":"addReview",
    "click button.remove-review": "removeReview"
  },

  addReview: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var attrs = $target.serializeJSON().review;
    var newReview = new StarTours.Models.Review();
    newReview.save(attrs,{
      success: function(response){
        Backbone.history.navigate(this.model.url().slice(4), { trigger: true})
      }.bind(this)
    }) 
  },

  removeReview: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var review = this.model.reviews().get($target.data("id"));
    review.destroy();

  },

  render: function(){
  	var renderedContent = this.template({
  		location: this.model, 
      reviews: this.model.reviews(),
  	});
  	this.$el.html(renderedContent);
  	return this
  }

})