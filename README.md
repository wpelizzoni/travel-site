# Travel Project

This travel agency web site enables end users to get a quick assessment of countries they are 
considering as travel destinations.  It provides information about discounts including 
around-the-world airfares with multiple stops, travel agency policy and contract terms.  
The second page provides end users with a quick snapshot about the countries of interest
to them and the weather in the capital city.

# UX

This web site assists prospective travelers with a quick glimpse of countries that interest them.
Simply entering a country name provides the end user with key demographics, bordering countries,
and other facts about the country so that they can make a quick determination about it.

User stories 

1. As a user, I want to see travel discounts so that I can plan an affordable vacation.
2. As a user, I want a quick glimpse of country facts to help me decide if it is a desirable destination.
3. As a user, I want to access travel agency contract terms so that I can see risks to cover with insurance.
4. As a user, I want to access the travel agency policy so that I can understand reimbursement timing and such as the cancellation costs.
5. As a user, I want to a user friendly web site that makes information easily accessible.

# Features

### Existing Features

* Feature 1: allows all end users to see special discounts by clicking a button.
* Feature 2: allows end users to see contract terms by clicking a button in the footer.
* Feature 3: allows end users to see travel agency policies by clicking a button in the footer.
* Feature 4: allows end users to see facts about a country by entering the country name.
* Feature 5: allows end users to see a map of the country by entering the country name.

### Features Left to Implement

* One future feature idea is to include more facts about the country such as the exchange rate.
* A second future feature is to include information about average daily travel costs.
* Third is to include ratings from previous travelers.
* Fourth is to include the three must-see sites.
* Fifth is to include links ot tour guides.

# Technology Used

This web site was developed with the following technologies:

* Visio
    - The UX concept was captured in a Vision document.
* Cloud9 
    - The AWS web based IDE to develop and debug the HTMl, CSS and JavaScript.
* Chrome Developer Tools
    - Chrome inspect was frequently used to view page elements and values.
    - Chrome console was used to view Javascript syntax and functionality errors.
* HTML
    - The language to defined the structure of the web site.
* CSS
    - The language to style the HTML.
* JavaScript, Bootstrap library and JQuery library
    - The language to apply user interactive changes to a web site.  
    - Boostrap is a Javascript library that simplifies development of the structure of a web site.
    - JQuery is a Javascript library that simplifies dynamic action on the web site as the user move the cursor or enters data.
* FontAwesome
    - This is a library of icons used to associate pictorial images with buttons and text.
* Web APIs used to retrieve data from third party resources
    - https://restcountries.eu provides detailed information about the country selected
    - https://api.darksky.net/ provides the weather forecast for the capital city
    - https://countryflags.io provides an image of the flag for the country selected

# Testing

1. Landing page discount card:
    i. Go to the special discounts card on the landing page.
    ii. Click the button to see the advertised special.
    iii. Click the <back> button to return to the first card image.

2. Landing and Search page page policy button:
    i. Move the cursor to the policy button and observe the highlight.
    ii. Click the button and observe the appearance of the policy.
    iii. Click the button again and observe the disappearance of the policy.

3. Landing page and Search page terms and conditions button:
    i. Move the cursor to the terms and conditions button and observe the highlight.
    ii. Click the button and observe the appearance of the terms and conditions.
    iii. Click the button again and observe the disappearance of the terms and conditions.

4. Search page:
    i. Click the <Search> button to get to the Search page.
    ii. Enter a country name in the jumbotron text box (use initials for long names such as "USA").
    iii. View the displayed for each country name entered.

5. Langing page and Search page Sign up button:
    i. Click on the Sign Up button so see a form pop up with logon or registration fields

6. Jasmine framework was used to execute mocks created in the 
    i. spec folder -> countrySpec file 
    ii. scripts folder -> countries-information.js file 

The web page desktop view works the same way on tablets.  On smaller screens such as smart phones, the 
large background images are replaced with an image that fit smaller portrait shape screens, the special 
discount card is replaced with simple text, and the country flag is not displayed.  

There are a few bugs that merit mention.  First, Google map code is included in search.html
but does not display a map.  Considerable effort went into fixing this problem did not yield
any positive results.  

Secondly, the Jasmine testing framework and test cases were included in the project but do not
appear to work correctly.  More sample code of Jasmine mocks would be a helpful reference.

Third, a media query is used to prevent the flag image and weather data from appearing on
phone size screens.  The media query works as expected for the flag image but does not 
prevent the weather data from displaying on phone size screens.

# Deployment

The project was developed using AWS Cloud9 IDE which is web based. The developer created a local
GitHub repository and periodically saved the project files to it. At the end of the project, the 
developer created a project on GitHub and uploaded the web site to that location. To test the 
project in a deployment, the developer set up GitHub Pages and associated the uploaded project 
with it.

To run the web site locally, the developer used the cloud 9 Preview function for each page. 
Preview opens a window and displays the image in it. For simplicity, the developer readily 
changed the size by placing the cursor on the left side of the simulated screen window and 
moving it either left or right.  When pages were more robust, the developer clicked the upper 
right icon which opened a inspect function. Inspect mode enabled the developer to test the image 
on simulated devices with various screen sizes, and view the code.

Functioning code was deployer to GitHub pages at this link 
[travel-site](http://wpelizzoni.github.io/travel-site/)

# Credits

Some Javascript/JQuery concepts and code excerpts used in this project were obtained from 
Q&A on the Internet between other developers.

### Content

This web site uses content from:

* <https://restcountries.eu> 
* <https://api.darksky.net>
* <https://www.countryflags.io>

### Media

Photos used in this web site were obtained from the Internet.

### Acknowledgements

I received inspiration from this project form the Code Institute videos.

