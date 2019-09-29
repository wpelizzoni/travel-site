function userInformationHTML(user) {
    return `
        <h2>${user.name}
        <span class="small-name">
            (@<a href="${user.html_url}" target="_blank">${user.login}</a>
        </span>
        </h2>
        <div class="gh-content">
            <div class="gh-avatar">
                <a href="${user.html_url} target="_blank">
                    <img src="${user.avatar_url}" width="80" height="80" alt="${user.login}" />
                </a>
            <div>
                <p>Followers: ${user.followers} = Following ${user.following} <br> Repos: ${user.public_repos}</p>
        </div>`;
}

/* Repos are returns in an array */
function repoInformationHTML(repos) {
    if (repos.length == 0) {
        return `<div class="clearfix repo-list">No respo!</div>`;
    }
    
    var listItemsHTML = repos.map(function(repo) {
        return `<li>
                <a href="$(repo.html_url}" target="_blank">${repo.name}</a>
            </li>`;
    });
    
    return `<div class="clearfix repo-list">
        <p>
            <strong>Repo List:</strong>
        </p>
        <ul>
             ${listItemsHTML.join("\n")}
        </ul>
    </div>`;
}

/* An event occurs when the user enters a name into the form.  Get the name entered and 
use it to gather the corresponding user profile from GitHub. Results are returned in a 
formatted HTMl stream.  */
function fetchGitHubInformation(event) {
    /* Clear the DOM objects so they have no old data in them */
    $("#gh-user-data").html("");
    $("#gh-repo-data").html("");

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
/* Display the loader gif when the user begins entering a name into the form box */
    $("#gh-user-data").html(
        `<div id="loader">
        <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

/* When the user name is entered, use it as a parameter to the getJSON function to retrieve
the profile from github. */ 
    $.when(
        $.getJSON(`https://api.github.com/users/${username}`),
        $.getJSON(`https://api.github.com/users/${username}/repos`)
    ).then(
        function(firstResponse, secondResponse) {
            var userData = firstResponse[0];
            var repoData = secondResponse[0];
            /* Select the gh-user-data <div> and set the results to another function called userInformationHTML */
            $("#gh-user-data").html(userInformationHTML(userData));
            $("#gh-repo-data").html(repoInformationHTML(repoData));
                }, function(errorResponse) {
                    /* Check for a not found error */
                    if (errorResponse.status === 404) {
                        /* Set our gh-user-data <div> to the following error message */
                        $("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`);
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
}

/* Execute fetchGitHubInformation automatically as soon as the DOM is fully loaded (which 
displays the default user profile */
$(document).ready(fetchGitHubInformation)