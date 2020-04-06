'use strict'

const logic = require('./logic/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Auth buttons
  $('#sign-up').on('submit', logic.onSignUp)
  $('#login').on('submit', logic.onLogIn)
  $('#change-password').on('submit', logic.onChangePassword)
  $('#log-out').on('submit', logic.onLogOut)
  // $('#login-btn').on('click', logic.logInBtn)

  // Build-related buttons
  $('#create-build-form').on('submit', logic.onCreateBuild)
  $('#create-part-form').on('submit', logic.onCreatePart)
  // $('#delete-build').on('submit', logic.onDeleteBuild)
  // $('#retrieve-one-build').on('submit', logic.onRetrieveOne)

  // Retrieve via Handlebars
  logic.addHandlers()
})
