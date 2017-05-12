import Ember from 'ember';
//import mapbox-gl mixin

export default Ember.Component.extend({

  didInsertElement: function(){
    mapboxgl.accessToken = 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg';
  	var map = new mapboxgl.Map({
  	    container: 'map',
  	    style: 'mapbox://styles/mslee/cif5p01n202nisaktvljx9mv3'
  	});
  }

});
