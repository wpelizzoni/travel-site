/* Global Variables */

let latitude = 51;
let longitude = 9;
let _url = "";
let capForecast = "";  


/* An event occurs when the user enters a name into the form.  Get the name entered and 
use it to gather the corresponding user profile from GitHub. Results are returned in a 
formatted HTMl stream.  */

function fetchCountriesInformation (event) {
    /* Clear the DOM objects so they have no old data in them */
  
    $("rc-country-data").html(""); 
    $("rc-weather-data").html("");
    
    var countryname = $("#rc-countryname").val();
    if (!countryname) {
        $("#rc-country-data").html(`<h2>Please enter a country name</h2>`);
        return;
    }
    
    /* Display the loader gif when the user begins entering a name into the form box */
    /* This is the Code Institute source that didn't work
    $("#gh-username").html(
        `<div id="loader">
        <img src="assets/css/loader.gif" alt="loading..." />
        </div>`); 
        */
        
    /* Refer to search.html for the loader div */
   
    $('#rc-countryname').on('input change keyup paste',function(){
            $('#loader').show();
            function hideLoader() {
                $('#loader').hide();
            }
            setTimeout(hideLoader, 2 * 1000);
    }); 

    /* When the country name is entered, use it as a parameter to the getJSON function to retrieve
    data from restcountries.us.  We can use multiple  $.getJSON calls separated by commas to query
    information from different end points in a web site.  Testing showed that a second $.getJSON  
    call to a different web site didn't work for some reason. */ 

    $.when(
        $.getJSON(`https://restcountries.eu/rest/v2/name/${countryname}`)
    ).then(
        function(firstResponse) {
            var countryData = firstResponse[0];
            latitude = countryData.latlng[0];
            longitude = countryData.latlng[1];
            
            /* This URL has a prefix that overcomes CORS security restrictions.  CORS requires that web based API calls
            come from a trusted web service such as Heroku when accessing Darksky data. ?excluse= reduces the amount
            of data we are retrieving primarily for performance reasons.  */
            
            
            _url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/6578058fe5a4c0568f4174d237774847/' + parseInt(latitude, 10) + ',' 
            + parseInt(longitude, 10) + '?exclude=currently,minutely,hourly,alerts,flags';
            
            $.getJSON(_url, function(weather) {
                capForecast = weather.daily.summary;
                /* Select the <div> declared in search.html and get the results from another function */
                $("#rc-avatar-data").html(countryAvatarHTML(countryData));
                $("#rc-country-data").html(countryInformationHTML(countryData));
                $("#rc-weather-data").html(countryWeatherHTML(countryData));
                /*  The alternative to using a global viable for wehater was to call weatherInformationHTML 
                    with a parameter but it didn't work
                    $("#gh-user-data").html(weatherInformationHTML(weather.daily.summary)); */
            });
            
        }, function(errorResponse) {
                    /* Check for a not found error */

                    if (errorResponse.status === 404) {
                        /* Set our gh-user-data <div> to the following error message */

                        $("#rc-country-data").html(`<h2>No info found for user ${countryname}</h2>`);
                    /* Check is the GitHub throttling threshhold has been reached in which case we need to wait */

                    } else if (errorResponse.status === 403) {
                        var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset')*1000);
                        $("#rc-country-data").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
                    } else {
                        console.log(errorResponse);
                        /* Set our gh-user-data <div> to the following errorResponse variable */

                        $("#rc-country-data").html(
                            `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                    }
                   
                });
}

function countryAvatarHTML(country) {
    
    return `
        
        <h5>${country.nativeName} </h5>
        <div class="rc-avatar">
                <img src="https://www.countryflags.io/${country.alpha2Code}/flat/64.png" width="120" height="120" alt="${country.capital}" />
            
        </div>`;
     
} 

function countryInformationHTML(country) {

    return `
         <div class="rc-content" >
            
               <p>Capital: ${country.capital} &nbsp;&nbsp;&nbsp Population: ${country.population} <br>
                Region: ${country.region} &nbsp;&nbsp;&nbsp Languages: ${country.languages[0].name} <br>
                Currencies: ${country.currencies[0].symbol} &nbsp;&nbsp;&nbsp Lat/Lng: ${country.latlng} &nbsp;&nbsp;&nbsp <br>
                
                <strong>Borders:</strong> 
                
                ${country.borders.join(" - ")}
                <br>
                </p>
        
        </div>`;
}
/* Weather in ${country.capital}: ${capForecast} <br> */

function countryWeatherHTML(country) {
    
    return `
    <div id="rc-weather">
         Weather in ${country.capital}: ${capForecast} <br>
    </div>`;
     
} 

/* This code is included as an example but it doesn't work */
function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: {lat: latitude, lng: longitude} 
                
                });
        
}


/* Execute fetchCountriesInformation automatically as soon as the DOM is fully loaded (which 
displays the default user profile */

$(document).ready(fetchCountriesInformation)     

   
