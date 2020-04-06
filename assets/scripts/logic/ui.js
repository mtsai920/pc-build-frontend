'use strict'

const store = require('../store')

// Handlebars Templates
// const homepageTemplate = require('../templates/homepage.handlebars')
const retrieveBuildsTemplate = require('../templates/retrieve-builds.handlebars')
const updateBuildTemplate = require('../templates/update-build.handlebars')

const signUpSuccess = function (data) {
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Signed up successfully! Please login.')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Error when signing up')
}

const logInSuccess = function (data) {
  $('#sign-up').hide()
  $('#login').hide()
  $('#login-btn').hide()
  $('#log-out').show()
  $('#change-password').show()
  $('#create-build-form').show()
  $('#retrieve-builds').show()
  $('#delete-build').show()
  $('#retrieve-one-build').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Logged in!')
  store.user = data.user
}

const logInFailure = function (data) {
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
}

const changePasswordFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Error when changing password')
}

const logOutSuccess = function (data) {
  $('#login').show()
  $('#sign-up').show()
  $('#log-out').hide()
  $('#change-password').hide()
  $('#create-build-form').hide()
  $('#retrieve-one-build').hide()
  $('#delete-build').hide()
  $('#retrieve-builds').hide()
  $('#update-build-form').hide()
  $('#build-info-text').hide()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Logged out successfully')
}

const logOutFailure = function (data) {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Failed to log out')
}

const createBuildSuccess = function () {
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').text('Build added!')
}

const createBuildFailure = function () {
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#message').text('Failed to create build')
}

const retrieveBuildsSuccessful = function (data) {
  $('#build-info-text').removeClass()
  $('#build-info-text').addClass('neutral')
  if (data.builds.length === 1) {
    $('#build-info-text').text('You have one build.')
  } else {
    $('#build-info-text').text(`You have ${data.builds.length} builds.`)
  }
  store.builds = data.builds
  const retrieveBuildsHtml = retrieveBuildsTemplate({ builds: data.builds })
  $('.home-builds').html(retrieveBuildsHtml)
}

const retrieveBuildsFailure = function (data) {
  console.log(data)
  console.log('failed to retrieve builds')
}

const updateButtonSuccessful = function (id) {
  const selectBuild = store.builds.find(build => build.id === id)
  const updateBuildHtml = updateBuildTemplate({ build: selectBuild })
  $('#create-build-form').hide()
  $('.home-builds').html(updateBuildHtml)
}

const updateBuildSuccessful = function (data) {
  $('#build-info-text').text('Build updated!')
  console.log('updated')
}

const updateBuildFailure = function () {}

// const retrieveOneSuccessful = function (data) {
//   $('.home-builds').append(
//     `Name: ${data.build.name}`)
//   console.log(data)
// }

// const retrieveOneFailure = function (data) {
//   // console.log(data)
//   console.log('did not retrieve one')
// }

const deleteBuildSuccessful = function () {
  $('#build-info-text').text('Build deleted!')
  console.log('deleted!')
}

const deleteBuildFailure = function () {
  $('#build-info-text').text('Unable to delete build.')
  console.log('did not delete')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  logOutSuccess,
  logOutFailure,
  createBuildFailure,
  createBuildSuccess,
  retrieveBuildsSuccessful,
  retrieveBuildsFailure,
  deleteBuildSuccessful,
  deleteBuildFailure,
  updateButtonSuccessful,
  updateBuildSuccessful,
  updateBuildFailure
  // retrieveOneSuccessful,
  // retrieveOneFailure
}
