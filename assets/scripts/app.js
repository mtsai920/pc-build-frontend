'use strict'

const logic = require('./logic/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', logic.onSignUp)
  $('#log-in').on('submit', logic.onLogIn)
  $('#change-password').on('submit', logic.onChangePassword)
  $('#log-out').on('submit', logic.onLogOut)

  $('#signup-btn').on('click', logic.signUpBtn)
  $('#login-btn').on('click', logic.logInBtn)
})
