# Travel Project

This travel agency web site enables end users to get a quick assessment of countries they are 
considering as travel destinations.  It provides information about discounts including 
around-the-world airfares with multiple stops, travel agency policy and contract terms.  
The second page provides end users with a quick snapshot about the countries of interest
to them.

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

* Cloud9 
    - The AWS web based IDE to develop and debug the HTMl, CSS and JavaScript.
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

# Testing

1. Landing page discount card:
    i. Go to the special discounts card on the landing page.
    ii. Click the button to see the advertised special.
    iii. Click the <back> button to return to the first card image.

2. Landing page policy button:
    i. Move the cursor to the policy button and observe the highlight.
    ii. Click the button and observe the appearance of the policy.
    iii. Click the button again and observe the disappearance of the policy.

3. Landing page terms and conditions button:
    i. Move the cursor to the terms and conditions button and observe the highlight.
    ii. Click the button and observe the appearance of the terms and conditions.
    iii. Click the button again and observe the disappearance of the terms and conditions.

4. Search page:
    i. Click the <Search> button to get to the Search page.
    ii. Enter a country name in the jumbotron text box (use initials for long names such as "USA").
    iii. View the displayed for each country name entered.

The web page desktop view works the same way on tablets.  On smaller screens such as smart phones, the 
large background images are replaced with images that fit smaller portrait shape screens, the special 
discount card is replaced with simple text.  

There are a few bugs that merit mention.  First, the Google map does not display.  Secondly, the 
loading icon blinks on but then disappears when the end user is entering the country name in the 
text box.

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

# Credits

### Content

This web site uses content from:

* <https://restcountries.eu> 
* <https://api.darksky.net>
* <https://www.countryflags.io>

### Media

Photos used in this web site were obtained from the Internet.

### Acknowledgements

I received inspiration from this project form the Code Institute videos.

