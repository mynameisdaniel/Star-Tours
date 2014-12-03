StarTours.Views.MasterView = Backbone.CompositeView.extend({

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render)
    this.filteredCollection = [];
  },

  template: JST["root/master"],

  events:{
    "slidestop":"updateLocations"
  },

  updateLocations: function(event) {
    var priceRange = this.$el.find('#slider').slider('values')
    this.$el.find('#listings-index').empty();
    this.renderLocations(priceRange);
    this.mapView.clearOverlays();
    this.filter(priceRange);
    this.mapView.addMarkers(this.filteredCollection);
  },

  filter: function(options){
    this.filteredCollection = [];
    console.log(options)
    this.collection.each(function(location){
      if (location.get("price") >= options[0] && location.get("price") <= options[1]) {
        this.filteredCollection.push(location);
      }
    }.bind(this))
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

  initSlider: function(){
    var slider = this.$el.find('#slider').slider();
    var priceRange = this.$el.find("#amount")
    slider.slider({range:true, min:0, max:1000, values: [0,1000],
      slide: function( event, ui ) {
        priceRange.val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }.bind(this)
    });
    priceRange.val( "$" + slider.slider( "values", 0 ) +
      " - $" + slider.slider( "values", 1 ) )

  },

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
    
    this.mapView = new StarTours.Views.MapView({collection: this.collection});
    this.addSubview("#map-view", this.mapView);

    this.renderLocations();
    this.initSlider();
    this.mapView.map_init()
    return this;
  }

})