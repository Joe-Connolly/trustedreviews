# Trusted Reviews

![Team Photo](./src/img/joeTheGoat.jpg)

TODO: short project description, some sample screenshots or mockups

*Trusted Reviews* is a review-posting platform that offers a secure database of verified customer reviews and testimonials. Registered users can add to, view, and vote on a filterable/searchable list of product reviews. Retailers can access these reviews through a secure API that embeds consistently-styled and verified reviews within their websites.

## Architecture

TODO:  descriptions of code organization and tools and libraries used

The frontend of this app is built on top of the front-end starterpack built by Tim Tregubov, utilizing webpack, babel, eslint, sass, react/reactrouter, redux, express, and mongo.

The backend of this app is a mongoDB database using mongoose for schema-based models and Heroku for deployment.

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

## Authors

Shreyas Agnihotri, Joseph Connolly, Soren Thompson, Richard Yang

## Acknowledgments

None of this would be possible without the codebase and supported provided by Tim Tregubov (@timofei7) and the assistance of CS52 course TAs.