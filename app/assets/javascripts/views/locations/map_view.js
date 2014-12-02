StarTours.Views.MapView = Backbone.View.extend({

  initialize: function(){
  	// this.listenTo(this.collection, "sync", this.render)
    drawMap = false
  },

  map_init: function(coords){
        if (!drawMap){
          console.log("init map");
          var mapOptions = {
            center: { lat: 37.781352, lng: -122.411084},
            zoom: 13
          };

          map = new google.maps.Map(this.$el.find('#map-canvas')[0],
              mapOptions);

          var marker = new google.maps.Marker({
            position: { lat: 37.781352, lng: -122.411084},
            map: map,
            title: 'Hello World!'
        })
        }
        drawMap = true;
  },

  addMarkers: function(coords){
        coords.forEach(function(coord){
          new google.maps.Marker({
          position: { lat: Number(coord[0]), lng: Number(coord[1])},
          map: map,
          title: coord[2]
        })
        })
  },

  coordinates: function(){
    var coords = [];
    this.collection.each(function(location){
      var temp = [];
      temp.push(location.escape('latitude'));
      temp.push(location.escape('longitude'));
      temp.push(location.get('title'));
      coords.push(temp);
    })
    return coords
  },

  template: JST["root/map"],

  render: function(){
  	var renderedContent = this.template({coordinates:this.coordinates()});
  	this.$el.html(renderedContent);
    this.map_init();
    this.addMarkers(this.coordinates());
  	return this;
  }

})