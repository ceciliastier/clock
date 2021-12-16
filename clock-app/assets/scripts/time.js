// time display variables
const timeDisplay = document.querySelector('h1.curr-time');
const zoneAbbr= document.querySelector('.current-zone-abbr');
const wrapper = document.querySelector('main');
const greet = document.querySelector('.greeting h4');
const zone = document.querySelector('.current-zone h2');
const dayOfYear = document.querySelector('.day-of-year h2');
const dayOfWeek = document.querySelector('.day-of-week h2');
const weekNum = document.querySelector('.week-num h2');
const sunMoonIcon = document.querySelector('.greeting .icon');

//get time
const getTime = async () => {
    const response = await fetch('https://worldtimeapi.org/api/ip'); // once data is fetched, store it in variable
    const data = await response.json();
    return data;
};
getTime()
    .then(data => currTime(data))
    .catch(err => console.log(err));

function currTime(data){
    
    let theTime = new Date(data.datetime);

    //set time variables
    let theHour = theTime.getHours();
    let theMin = theTime.getMinutes();
    let currZoneAbbr = data.abbreviation;
    let currZone = data.timezone;
    let currDayOfYear = data.day_of_year;
    let currDayOfWeek = data.day_of_week;
    let currWeekNum = data.week_number;
    

    //change daytime/nighttime class based on time
    if (theHour < 5 || theHour >= 18){
        wrapper.classList.add('nighttime');
        wrapper.classList.remove('daytime');
        sunMoonIcon.src = "assets/images/desktop/icon-moon.svg";
    } else {
        wrapper.classList.remove('nighttime');
        wrapper.classList.add('daytime');
        sunMoonIcon.src = "assets/images/desktop/icon-sun.svg";
    }

    //change greeting based on time
    if(theHour >= 5 && theHour < 12){
        greet.innerText = 'Good Morning';
    } else if(theHour >= 12 && theHour < 18){
        greet.innerText = 'Good Afternoon';
    } else {
        greet.innerText = 'Good Evening';
    }

    //add '0' before number if min is less than 10 for display
    if(theMin < 10){
        theMin = '0' + theMin;
    }

    //change 24h format to 12h
    theHour = theHour % 12;

    // display curent time and zone abbr to clock
    timeDisplay.innerText = theHour + ':' + theMin;
    zoneAbbr.innerText = currZoneAbbr;

    // display full timezone
    zone.innerText = currZone;

    // display day of year
    dayOfYear.innerText = currDayOfYear;

    // display day of week
    dayOfWeek.innerText = currDayOfWeek;

    // display week number
    weekNum.innerText = currWeekNum;
}