'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const ui = require('./ui')

const api = require('./api')

const signUpBtn = function (event) {
  event.preventDefault()
  $('#sign-up').show()
}

const logInBtn = function (event) {
  event.preventDefault()
  $('#log-in').show()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onLogIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.logIn(data)
    .then(ui.logInSuccess)
    .catch(ui.logInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onLogOut = function (event) {
  event.preventDefault()
  const signInText = document.getElementById('sign-in')
  signInText.reset()
  const signUpText = document.getElementById('sign-up')
  signUpText.reset()
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut,
  signUpBtn,
  logInBtn
}
