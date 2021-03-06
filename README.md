# Sprint Challenge: Advanced Web Applications - React Bubbles

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Advanced Web Applications, focusing on testing, client-side authentication, hosting web apps, and PUT and DELETE requests.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. You must follow the twenty-minute rule before you seek support from your PM. You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

**Note** You can use the sites like the following to get color hex codes:

- [Color-Hex](https://www.color-hex.com/)

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Explain what a token is used for.
      1.	A token is used for authentication. In short, it’s basically a key you can use to access protected data that you get in exchange for providing a valid login.
- [ ] What steps can you take in your web apps to keep your data secure?
      2.	One way to keep web apps secure would be to use private routes to keep protected data from rendering before it receives a valid token.
- [ ] Describe how web servers work.
      3.	A web server can mean a few things, but it is most used to refer to the hardware that stores data for websites. This hardware could be nestled inside a giant warehouse facility, or could even be run off a laptop. Essentially, servers hold data, and when requested, they can deliver that data to display web pages.
- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
4.
C
R
Update - put requests
Delete – delete requests



## Project Set Up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add PM as collaborator on Github.
- [X] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [X] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on this Branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.
- [X] **RUN** `npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [X] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [X] **RUN** `npm start` to get your API up and running on `http://localhost:5000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [X] **LOOK** at your `client` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [X] **cd** into `client` and run `npm install` to retrieve the client side dependencies.
- [X] **RUN** `npm start` to fire up your React application.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.

## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step.

### Stage 1 - Authentication

Build a login form to authenticate your users.

- [X] Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
- [X] Save the token to localStorage
- [X] Build a `axiosWithAuth` module to create an instance of axios with the authentication header
- [X] Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component

### Stage 2 - Consuming the API

- [X] When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.
- [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data
- [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

### API Documentation

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/colors`: returns the list of colors and their hex codes.
  * **[POST]** to `/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example).

## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] Build a form at the bottom of `ColorList.js` to add new colors to the colors data

**Data Visualization**

- [ ] Look at [Potion JS](https://potion.js.org/). This is the library used to display the color data
- [ ] Play around with the data visualization happening in `Bubbles.js`. Have fun with this! Try different components from the library, or see if you can add props to change the UI a bit.
