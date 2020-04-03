'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const ui = require('./ui')

const api = require('./api')

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
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const createBtn = function (event) {
  event.preventDefault()
  $('#create').show()
}

const onCreateBuild = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createBuild(data)
    .then(ui.createBuildSuccess)
    .catch(ui.createBuildFailure)
}

const onCreatePart = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createPart(data)
    .then(ui.createPartSuccessful)
    .catch(ui.createPartFailure)
}

const onRetrieveBuilds = function (event) {
  event.preventDefault()
  api.retrieveBuilds()
    .then(ui.retrieveBuildsSuccessful)
    .catch(ui.retrieveBuildsFailure)
}

const addHandlers = () => {
  $('#retrieve-builds').on('submit', onRetrieveBuilds)
}

const onDeleteBuild = function (event) {
  event.preventDefault()
  api.deleteBuild()
    .then(ui.deleteBuildSuccessful)
    .catch(ui.deleteBuildFailure)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut,
  logInBtn,
  createBtn,
  onCreateBuild,
  onCreatePart,
  onRetrieveBuilds,
  onDeleteBuild,
  addHandlers
}
