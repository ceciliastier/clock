// location display variables
const place = document.querySelector('.location h3');

//get location
const getLocation = async () => {
    const response = await fetch("https://api.freegeoip.app/json/?apikey=554eb3d0-517e-11ec-9519-dbfaa3959126"); // once data is fetched, store it in variable
    const data = await response.json();
    return data;
};
getLocation()
    .then(data => currLocation(data))
    .catch(err => console.log(err));

function currLocation(data){

    //set location variales
    let city = data.city;
    let countryCode = data.country_code;

    // display location
    place.innerText = `in ${city}, ${countryCode}`;
    
}