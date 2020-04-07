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
  $('.ask-login-button').on('click', logic.onAskLogin)
  $('.ask-signup-button').on('click', logic.onAskSignUp)

  // Build-related buttons
  $('#create-build-form').on('submit', logic.onCreateBuild)
  $('#create-part-form').on('submit', logic.onCreatePart)
  $('.create-button').on('click', logic.onShowCreate)

  // Retrieve via Handlebars
  logic.addHandlers()
})
