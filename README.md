# Trusted Reviews

![Team Photo](./src/img/search.gif)

*Trusted Reviews* is a review-posting platform that offers a secure database of customer reviews and testimonials. Registered users can add to, view, and vote on a filterable/searchable list of product reviews. Retailers can access these reviews through a secure API that embeds a product summary (with its rating average and a link to the full set of reviews) within their websites.

## Key Features

Be sure to check out all of the features below while using the site!

* **Authentication:** User sign-up and sign-in with backend token verification
* **Product Database:** Searchable display of all products in database
* **Review Posting:** Submit rating and review body with error-checking
* **Review Voting:** Upvote or downvote a review up to one time
* **User Profiles:** View all reviews posted by a given user; click-through to them
* **API for Embedding:** Generates product summary card at */embed/product_id*

## Architecture

TODO:  descriptions of code organization and tools and libraries used

The frontend of this app is built on top of the front-end starterpack built by Tim Tregubov, utilizing webpack, babel, eslint, sass, react/reactrouter, redux, express, and mongo.

The backend of this app is a mongoDB database using mongoose for schema-based models and Heroku for deployment.  Access the backend here: https://github.com/dartmouth-cs52-19S/project-api-trustedreviews

## Setup

TODO: how to get the project dev environment up and running, npm install etc

To setup the frontend dev environment:

1. Install homebrew
  * `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * Or, if homebrew is already installed: `brew update`
2. Install node.js and yarn
  * `brew install node`
  * `brew install yarn`
3. Yarn your nodes!
  * `yarn install`


## Deployment

To deploy frontend:

`yarn deploy`

## Testing

Please note while testing that some pages may take a moment to load! If a given action appears to have no impact on the page, be sure to check the console for error logs. For example, if a new user account is submitted without the password confirmation matching the original password, the user will not be created and an error will be logged in the console.

## Authors

Shreyas Agnihotri, Joseph Connolly, Soren Thompson, Richard Yang

## Acknowledgments

None of this would be possible without the codebase and supported provided by Tim Tregubov (@timofei7) and the assistance of CS52 course TAs.
