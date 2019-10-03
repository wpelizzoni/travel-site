let latitude = "";
let longitude = "";

/* An event occurs when the user enters a name into the form.  Get the name entered and 
use it to gather the corresponding user profile from GitHub. Results are returned in a 
formatted HTMl stream.  */

function fetchCountriesInformation (event) {
    /* Clear the DOM objects so they have no old data in them */
    $("gh-user-data").html("");
    
    var countryname = $("#gh-username").val();
    if (!countryname) {
        $("#gh-user-data").html(`<h2>Please enter a country name</h2>`);
        return;
    }
    
    /* Display the loader gif when the user begins entering a name into the form box */
    $("#gh-user-data").html(
        `<div id="loader">
        <img src="assets/css/loader.gif" alt="loading... />
        </div>`);
        
   
        
    /* When the user name is entered, use it as a parameter to the getJSON function to retrieve
    the profile from github. */ 
    $.when(
        $.getJSON(`https://restcountries.eu/rest/v2/name/${countryname}`)
    ).then(
        function(firstResponse) {
            var userData = firstResponse[0];
            latitude = userData.latlng[0];
            longitude = userData.latlng[1];
            
            /* Select the gh-user-data <div> and set the results to another function called countryInformationHTML */
            $("#gh-user-data").html(countryInformationHTML(userData));
            
                }, function(errorResponse) {
                    /* Check for a not found error */
                    if (errorResponse.status === 404) {
                        /* Set our gh-user-data <div> to the following error message */
                        $("#gh-user-data").html(`<h2>No info found for user ${countryname}</h2>`);
                    /* Check is the GitHub throttling threshhold has been reached in which case we need to wait */   
                    } else if (errorResponse.status === 403) {
                        var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset')*1000);
                        $("#gh-user-data").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
                    } else {
                        console.log(errorResponse);
                        /* Set our gh-user-data <div> to the following errorResponse variable */
                        $("#gh-user-data").html(
                            `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                    }
    
        });
    $.when(
        $.getJSON(`https://api.darksky.net/forecast/6578058fe5a4c0568f4174d237774847/${latitude}${","},${longitude}`)
    ).then(
        function(forecast) {
            $("#gh-user-data").html(weatherInformationHTML(forecast));
            $("#gh-user-data").html(initMap);
                }, function(error) {
                    $("#gh-user-data").html(
                        `<h2>Error: ${error.responseJSON.message}</h2>`);
                    }
        );
   
}
 

function countryInformationHTML(user) {

    return `
        <h2>${user.nativeName} </h2>
    
        <div class="gh-content">
            <div class="gh-avatar">
                <img src="https://www.countryflags.io/${user.alpha2Code}/flat/64.png" width="120" height="120" alt="${user.capital}" />
            <div> 
            
                <p>Capital: ${user.capital} &nbsp;&nbsp;&nbsp Population: ${user.population} <br>
                Region: ${user.region} &nbsp;&nbsp;&nbsp Languages: ${user.languages[0].name} <br>
                Currencies: ${user.currencies[0].symbol} &nbsp;&nbsp;&nbsp Lat/Lng: ${user.latlng} &nbsp;&nbsp;&nbsp <br>
                
                
                
                <strong>Borders:</strong> 
                
                ${user.borders.join(" - ")}
                
                </p>
            
        </div>`;
}

function countryWeatherHTML(forecast) {
    return `
        <div class="gh-content">
              <h2>Forecast: ${forecast.daily.data[0].summary} </h2>
        </div>`;
}

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {lat: latitude, lng: longitude}
                
                });
        
        }

/* Execute fetchGitHubInformation automatically as soon as the DOM is fully loaded (which 
displays the default user profile */
$(document).ready(fetchCountriesInformation)     

    
        
  /* Commented out code that retrieves the latlng from <restcountries.eu> api 
 $.when(
        $.getJSON(`https://api.darksky.net/forecast/6578058fe5a4c0568f4174d237774847/${userData.latlng[0]}${","}${userData.latlng[1]}`)
        ).then(
        function(secondResponse) {
            var forecast = secondResponse[0];
            $("#gh-user-data").html(countryWeatherHTML(forecast));  
        }, function(error) {
            $("#gh-user-data").html(
                `<h2>Error: ${error.responseJSON.message}</h2>`);
            }
        ); */