[![Build Status](https://travis-ci.org/tonykimathi/wc_react.svg?branch=ch-setup-continuous-integration-159515467)(https://travis-ci.org/tonykimathi/wc_react)
[![Coverage Status](https://coveralls.io/repos/github/tonykimathi/wc_react/badge.svg)](https://coveralls.io/github/tonykimathi/wc_react)

# WeConnect App

WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with. The app uses ReactJS, Redux, react-router and lots more. Live site is at https://wc-react-app.herokuapp.com/

---

## Features

- Users can `create an account` and `log in`
- Authenticated Users can `register a business`.
- Only the user that creates the business can `update and delete a business`
- Users can `view businesses`.
- Users can `give reviews about a business`.
- Users can `search for businesses based on business location or business category`.

## Getting started

1.  Clone this repo using `git clone https://github.com/Bonifase/WeConnectV3.git`.
2.  Run `npm install` to install the dependencies.

3.  Run `npm start` to start the local web server.

4.  Go to `http://localhost:3000` and you should see the app running!

### Folder Structure

The folder structure of the JS files reflects how [Redux](https://github.com/gaearon/redux) works, so if you are not familiar with Redux check out the [official documentation](https://gaearon.github.io/redux/).

- `actionCreators`: Creates actions that get dispatched with utility modules

- `components`: The main JS folder. All the React components are in this folder with corresponding routes

- `reducers`: Reducers manage the state of this app.

### Runing Tests

- In the `Terminal`: Run `npm test`

## License

Designed and developed by [Tony Mputhia](https://github.com/tonykimathi).
