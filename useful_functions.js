// Set of functions to make your life easier and cooler while using Google Sheets!!!


// from a latitude and Longitude, get the zip code 
// see more here: https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding
function getzipcode(lat, long) {
  // needs this in order not to reach the rate limiting per second.
  // every time you call the function it will wait a random amount before making the call
  Utilities.sleep(Math.random() * 100)
  var geocoder = Maps.newGeocoder().reverseGeocode(lat, long);
  
  var info = geocoder.results[0].address_components;
  for(i=0; i< info.length ; i++ ) {
    if( info[i]['types'][0] == 'postal_code' ) {
      return info[i]['short_name']
    } 
    
  }
}
