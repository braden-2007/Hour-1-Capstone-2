navigator.geolocation.getCurrentPosition(position => {
    document.getElementById("location").innerHTML =  "Your location in latitude and longitude is " + position.coords.latitude.toString() + ", " + position.coords.longitude.toString();
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
}, error => {
    console.error("Error getting location: ", error);
})

