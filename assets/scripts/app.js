'use strict'

const logic = require('./logic/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Auth buttons
  $('#sign-up').on('submit', logic.onSignUp)
  $('#log-in').on('submit', logic.onLogIn)
  $('#change-password').on('submit', logic.onChangePassword)
  $('#log-out').on('submit', logic.onLogOut)
  $('#login-btn').on('click', logic.logInBtn)
  $('#create-btn').on('click', logic.createBtn)

  // Build-related buttons
  $('#create-build-form').on('submit', logic.onCreateBuild)
  $('#create-part-form').on('submit', logic.onCreatePart)

  // Retrieve via Handlebars
  logic.addHandlers()
  $('.delete-build').on('click', logic.onDeleteBuild)
})
