StarTours.Views.MasterView = Backbone.CompositeView.extend({

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render)
  },

  events:{
    "slidestop":"updateLocations"
  },

  updateLocations: function(event) {
    var vals = this.$el.find('#slider').slider('values')
    this.$el.find('#listings-index').empty();
    this.renderLocations(vals);
    var mapSubview = this.subviews()['#map-view'];
    mapSubview[1].clearOverlays();
  },

  renderLocations: function(options){
    if (!options){
      this.collection.each(function(location){
        var masterIndexSubview = new StarTours.Views.LocationsIndex({model:location});
        this.addSubview("#listings-index", masterIndexSubview);
      }.bind(this))
    } else {
      this.collection.each(function(location){
        if (location.escape("price") >= options[0] && location.escape("price") <= options[1]){
        var masterIndexSubview = new StarTours.Views.LocationsIndex({model:location});
        this.addSubview("#listings-index", masterIndexSubview);
      }
      }.bind(this))
    }
  },

  template: JST["root/master"],

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
    
    var mapView = new StarTours.Views.MapView({collection: this.collection});
    this.addSubview("#map-view", mapView);

    this.renderLocations();

    this.$el.find('#slider').slider();
    this.$el.find('#slider').slider({range:true, min:0, max:1000, values: [75,300],
      slide: function( event, ui ) {
        this.$el.find("#amount").val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }.bind(this)
    });
    this.$el.find("#amount").val( "$" + this.$el.find("#slider").slider( "values", 0 ) +
      " - $" + this.$el.find("#slider").slider( "values", 1 ) )
    return this;
  }

})