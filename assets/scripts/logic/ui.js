'use strict'

const store = require('../store')

const homepageTemplate = require('../templates/homepage.handlebars')
const retrieveBuildsTemplate = require('../templates/retrieve-builds.handlebars')

const signUpSuccess = function (data) {
  const homepageHtml = homepageTemplate()
  $('.message').text('Signed up successfully!')
  $('.home').append(homepageHtml)
  $('#sign-up').hide()
  $('#log-in').hide()
  $('#log-out').show()
}

const signUpFailure = function () {
  $('.message').text('Error when signing up')
}

const logInSuccess = function (data) {
  $('.message').text('Logged in successfully!')
  $('#sign-up').hide()
  $('#log-in').hide()
  $('#login-btn').hide()
  $('#log-out').show()
  $('#change-password').show()
  store.user = data.user
}

const logInFailure = function (data) {
  $('.message').text('Error when logging in')
}

const changePasswordSuccess = function () {
  $('.message').text('Password changed!')
}

const changePasswordFailure = function () {
  $('.message').text('Error when changing password')
}

const logOutSuccess = function (data) {
  $('.message').text('Logged out successfully')
}

const logOutFailure = function (data) {
  $('.message').text('Logged out successfully')
  console.log('failed to logout')
}

const createBuildSuccess = function () {
  $('#create-parts').show()
  console.log('created')
}

const createBuildFailure = function () {
  console.log('failed to create')
}

const retrievePartsSuccessful = function (data) {
  console.log('retrieved')
}

const retrievePartsFailure = function (data) {
  console.log('failed to retrieve')
}

const createPartSuccessful = function () {
  console.log('part successful')
}

const createPartFailure = function () {
  console.log('part failure')
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
  retrievePartsSuccessful,
  retrievePartsFailure,
  createPartSuccessful,
  createPartFailure,
  retrieveBuildsSuccessful,
  retrieveBuildsFailure,
  deleteBuildSuccessful,
  deleteBuildFailure
}
