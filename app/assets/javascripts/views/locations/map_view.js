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
        locations.forEach(function(location){
          var coord = this.coordinates(location)
          var marker = new google.maps.Marker({
          position: { lat: Number(coord[0]), lng: Number(coord[1])},
          map: this.map,
          title: coord[2]
        })
          markersArray.push(marker);

          var contentString = '<div id="content" style="height 200px">'+
      '<h4 id="firstHeading" class="firstHeading">' +
      '<a href="#locations/'+ location.escape("id") + '">' +
      coord[2] +
      '</a>' +
      '</h4>' +
      '<div id="bodyContent">'+
      location.escape("description") +
      '</div>'+
      '</div>';
          
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(this.map,marker);
          });

        }.bind(this))
  },

  coordinates: function(location){
    var coords = [];
    coords.push(location.escape('latitude'));
    coords.push(location.escape('longitude'));
    coords.push(location.escape('title'));
    return coords
  },

  template: JST["root/map"],

  render: function(){
  	var renderedContent = this.template();
  	this.$el.html(renderedContent);

  	return this;
  }

})