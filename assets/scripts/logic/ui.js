'use strict'

const store = require('../store')

// Handlebars Templates
const retrieveBuildsTemplate = require('../templates/retrieve-builds.handlebars')
const updateBuildTemplate = require('../templates/update-build.handlebars')

const signUpSuccess = function (data) {
  const signUpText = document.getElementById('sign-up')
  signUpText.reset()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Signed up successfully! Please login.')
}

const signUpFailure = function () {
  const signUpText = document.getElementById('sign-up')
  signUpText.reset()
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Error when signing up')
}

const askLoginSuccess = function () {
  $('#sign-up').hide()
  $('.ask-login').hide()
  $('#login').show()
  $('.ask-signup').show()
  $('#message').text('')
}

const askSignUpSucccess = function () {
  $('#login').hide()
  $('.ask-signup').hide()
  $('#sign-up').show()
  $('.ask-login').show()
  $('#message').text('')
}

const logInSuccess = function (data) {
  const loginText = document.getElementById('login')
  loginText.reset()
  $('#sign-up').hide()
  $('#login').hide()
  $('#login-btn').hide()
  $('.ask-login').hide()
  $('.ask-signup').hide()
  $('#log-out').show()
  $('#change-password').show()
  $('#retrieve-builds').show()
  $('#delete-build').show()
  $('#retrieve-one-build').show()
  $('.create-button').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Logged in!')
  store.user = data.user
}

const logInFailure = function (data) {
  const loginText = document.getElementById('login')
  loginText.reset()
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Error when logging in')
}

const changePasswordSuccess = function () {
  const passText = document.getElementById('change-password')
  passText.reset()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Password changed!')
  $('#build-info-text').text('')
}

const changePasswordFailure = function () {
  const passText = document.getElementById('change-password')
  passText.reset()
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Error when changing password')
}

const logOutSuccess = function (data) {
  $('#sign-up').show()
  $('.ask-login').show()
  $('#login').hide()
  $('#log-out').hide()
  $('#change-password').hide()
  $('#create-build-form').hide()
  $('#retrieve-one-build').hide()
  $('#delete-build').hide()
  $('#retrieve-builds').hide()
  $('#update-build-form').hide()
  $('.builds-list-container').hide()
  $('.create-button').hide()
  $('#message').text('')
  $('#build-info-text').text('')
}

const logOutFailure = function (data) {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Failed to log out')
}

const createBuildSuccess = function () {
  const buildText = document.getElementById('create-build-form')
  buildText.reset()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Build added!')
  $('#build-info-text').text('')
  $('#create-build').modal('hide')
}

const createBuildFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Failed to create build')
  $('#build-info-text').text('')
}

const showCreateSuccessful = function () {
  $('#create-build-form').show()
  // $('.create-button').hide()
  $('#update-build-form').hide()
  $('#message').text('')
  $('#build-info-text').text('')
}

const retrieveBuildsSuccessful = function (data) {
  $('#build-info-text').removeClass()
  $('#build-info-text').addClass('neutral')
  if (data.builds.length === 1) {
    $('#build-info-text').text('You have one build.')
  } else if (data.builds.length === 0) {
    $('#build-info-text').text(`You haven't created any builds yet!`)
  } else {
    $('#build-info-text').text(`You have ${data.builds.length} builds.`)
  }
  store.builds = data.builds
  const retrieveBuildsHtml = retrieveBuildsTemplate({ builds: data.builds })
  $('.home-builds').html(retrieveBuildsHtml)
  $('#message').text('')
}

const retrieveBuildsFailure = function (data) {
  $('#build-info-text').removeClass()
  $('#build-info-text').addClass('failure')
  $('#build-info-text').text('Failed to retrieve builds')
}

const updateButtonSuccessful = function (id) {
  const selectBuild = store.builds.find(build => build.id === id)
  const updateBuildHtml = updateBuildTemplate({ build: selectBuild })
  $('#create-build-form').hide()
  $('.create-button').show()
  $('.home-builds').html(updateBuildHtml)
  $('#build-info-text').text('')
}

const updateBuildSuccessful = function (data) {
  $('.create-button').show()
  $('#build-info-text').removeClass()
  $('#build-info-text').addClass('success')
  $('#build-info-text').text('Build updated!')
  $('#update-form').modal('hide')
}

const updateBuildFailure = function (data) {
  $('#build-info-text').removeClass()
  $('#build-info-text').addClass('failure')
  $('#build-info-text').text('Failed to update build')
}

const deleteBuildSuccessful = function () {
  $('#build-info-text').removeClass()
  $('#build-info-text').addClass('neutral')
  $('#build-info-text').text('Build deleted!')
}

const deleteBuildFailure = function () {
  $('#build-info-text').removeClass()
  $('#build-info-text').addClass('failure')
  $('#build-info-text').text('Unable to delete build.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  askLoginSuccess,
  askSignUpSucccess,
  changePasswordSuccess,
  changePasswordFailure,
  logOutSuccess,
  logOutFailure,
  createBuildFailure,
  createBuildSuccess,
  showCreateSuccessful,
  retrieveBuildsSuccessful,
  retrieveBuildsFailure,
  deleteBuildSuccessful,
  deleteBuildFailure,
  updateButtonSuccessful,
  updateBuildSuccessful,
  updateBuildFailure
}
