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
          markersArray = [];

        //   var marker = new google.maps.Marker({
        //     position: { lat: 37.781352, lng: -122.411084},
        //     map: map,
        //     title: 'Hello World!'
        // })
        }
        drawMap = true;
  },

  clearOverlays: function () {
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  },


  addMarkers: function(locations){
        var convertedData = this.coordinates(locations);
        convertedData.forEach(function(coord){
          var marker = new google.maps.Marker({
          position: { lat: Number(coord[0]), lng: Number(coord[1])},
          map: map,
          title: coord[2]
        })
          markersArray.push(marker);
        }.bind(this))
  },

  coordinates: function(locations){
    var coords = [];
    locations.forEach(function(location){
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
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);
    this.map_init();
    this.addMarkers(this.collection);
  	return this;
  }

})