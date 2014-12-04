StarTours.Views.MapView = Backbone.View.extend({

  initialize: function(){
  	this.listenTo(this.collection, "sync", this.render)
    var drawMap = false
    var map = undefined
  },

  map_init: function(){
        if (!this.drawMap){
          var mapOptions = {
            center: { lat: 37.781352, lng: -122.411084},
            zoom: 12
          };

          this.map = new google.maps.Map(this.$el.find('#map-canvas')[0],
              mapOptions);
          markersArray = [];
          this.addMarkers(this.collection);

        //   var marker = new google.maps.Marker({
        //     position: { lat: 37.781352, lng: -122.411084},
        //     map: map,
        //     title: 'Hello World!'
        // })
        }
        this.drawMap = true;
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
          map: this.map,
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

  	return this;
  }

})