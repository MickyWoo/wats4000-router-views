# Multi-View Application Project

> A project for practicing with user input and multiple routes.

This project covers two sections in the Practical JavaScript 2: Building Applications
book: [Handling User Input](https://suwebdev.github.io/WATS-4000-gitbook/handling-user-input/) and [Routing and URLs](https://suwebdev.github.io/WATS-4000-gitbook/routing-urls/). These sections cover
all of the skills and techniques we will be practicing in this project. Please
refer to the text for additional instuctions and help completing the requirements
defined below.

## Basic Requirements
In order to successfully complete this project, you must fulfill these requirements. Look for TODO notes in the respective files mentioned here for line-specific instructions.

**In the `src/views/Home.vue` file**
* Create a form for the user to sign up to the site.
* Use `v-show` to toggle between the sign up form and the success text
* Use the `submit` event to trigger the `validateForm` method on the component
* Validate the form according to the rules in the `Home.vue` file
* If the form is valid, show the success message; if not, show a warning message on the form

**In the `src/views/Survey.vue` file**
* Complete the survey form by filling in the TODO notes
* Use `v-for` loops in the template to create options for the checkbox groups
* Create a validation method to handle the rules outlined in the component comments
* Use a `$router.push` statement to move the user to the Secret page

**Create the `src/views/Secret.vue` file**
* Create a basic component from scratch called `Secret`
* The content of the `Secret` page should be something you come up with: A favorite tip about web development, a funny joke, a humorous image, etc.
* Provide links back to the other two pages using `<router-link>` tags in the template

**In the `src/router/index.js` file**
* Import the Survey component properly
* Import the Secret component properly
* Add the Survey component at the `/survey` path
* Add the Secret component at the `/secret` path

## Stretch Goals
If you crave an extra challenge, please try these stretch goals:

* Enhance the sign up form to collect additional info, different info, or to use different input types to collect the data
* Enhance the validation to be more specific (e.g. verify no numbers in the name, or there is an `@` and a `.` in the email address, etc.)
* Enhance error messages to be more specific (e.g. build a message that mentions which field is causing the problem)
* Add a navigation element to the `src/App.vue` template, and be sure to use the `router-link-active` class to style the current page link
* Add more pages of content to the site to practice creating new components from scratch and adding them to the routes Array


## Vue.js Application Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

```

**Note:** This application has been configured to build to the `docs/` directory. It can be served on GitHub Pages by setting GH Pages to serve from the `master` branch `docs/` directory.

For detailed explanation on how Vue works, check out the [guide](https://cli.vuejs.org/guide/) and [docs for vue-loader](https://cli.vuejs.org/config/#css-loaderoptions).
