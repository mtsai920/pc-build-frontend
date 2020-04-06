'use strict'

const store = require('../store')

// Handlebars Templates
const homepageTemplate = require('../templates/homepage.handlebars')
const retrieveBuildsTemplate = require('../templates/retrieve-builds.handlebars')

const signUpSuccess = function (data) {
  const homepageHtml = homepageTemplate()
  $('.message').text('Signed up successfully!')
  $('.home').append(homepageHtml)
  $('#sign-up').hide()
  $('#login').hide()
  $('#retrieve-builds').show()
  $('#log-out').show()
  $('#retrieve-one-build').show()
}

const signUpFailure = function () {
  $('.message').text('Error when signing up')
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
  $('.message').text('Logged in!')
  store.user = data.user
}

const logInFailure = function (data) {
  $('.message').text('Error when logging in')
}

const changePasswordSuccess = function () {
  const passText = document.getElementById('change-password')
  passText.reset()
  $('.message').text('Password changed!')
}

const changePasswordFailure = function () {
  $('.message').text('Error when changing password')
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
  $('.message').text('Logged out successfully')
}

const logOutFailure = function (data) {
  $('.message').text('Logged out successfully')
  console.log('failed to logout')
}

const createBuildSuccess = function () {
  $('.message').text('Build added!')
}

const createBuildFailure = function () {
  $('.message').text('Failed to create build')
}

const retrieveBuildsSuccessful = function (data) {
  $('.home-builds').text(`You have ${data.builds.length} builds`)
  const retrieveBuildsHtml = retrieveBuildsTemplate({ builds: data.builds })
  $('.home-builds').append(retrieveBuildsHtml)
  // console.log(data)
}

const retrieveBuildsFailure = function (data) {
  console.log(data)
  console.log('failed to retrieve builds')
}

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
  console.log('deleted!')
}

const deleteBuildFailure = function () {
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
  deleteBuildFailure
  // retrieveOneSuccessful,
  // retrieveOneFailure
}
