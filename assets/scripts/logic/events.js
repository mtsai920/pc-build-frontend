'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const ui = require('./ui')

const api = require('./api')

// const store = require('../store')

const onAskLogin = function (event) {
  event.preventDefault()
  ui.askLoginSuccess()
}

const onAskSignUp = function (event) {
  event.preventDefault()
  ui.askSignUpSucccess()
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

const onShowCreate = function (event) {
  event.preventDefault()
  ui.showCreateSuccessful()
}

const onCreateBuild = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createBuild(data)
    .then(ui.createBuildSuccess)
    .catch(ui.createBuildFailure)
}

const onRetrieveBuilds = function (event) {
  event.preventDefault()
  api.retrieveBuilds()
    .then(ui.retrieveBuildsSuccessful)
    .catch(ui.retrieveBuildsFailure)
}

const onDeleteBuild = function (event) {
  event.preventDefault()
  const data = $(event.target).closest('section').data('id')
  if (confirm('Are you sure you want to delete this build?')) {
    api.deleteBuild(data)
      .then(function () {
        onRetrieveBuilds(event)
      },
      ui.deleteBuildSuccessful)
      .catch(ui.deleteBuildFailure)
  }
}

const onUpdateButton = function (event) {
  event.preventDefault()
  const data = $(event.target).closest('section').data('id')
  ui.updateButtonSuccessful(data)
}

const onUpdateBuild = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updateBuild(data, id)
    .then(ui.updateBuildSuccessful)
    .catch(ui.updateBuildFailure)
}

const addHandlers = () => {
  $('#retrieve-builds').on('submit', onRetrieveBuilds)
  $('.home-builds').on('click', '.delete-build', onDeleteBuild)
  $('.home-builds').on('click', '.update-button', onUpdateButton)
  $('.home-builds').on('submit', '#update-build-form', onUpdateBuild)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onLogOut,
  onShowCreate,
  onCreateBuild,
  onRetrieveBuilds,
  onAskLogin,
  onAskSignUp,
  addHandlers
}
