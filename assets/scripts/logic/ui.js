'use strict'

const store = require('../store')

// const homepage = require('../templates/homepage.handlebars')

const signUpSuccess = function (data) {
  console.log('signed in')
  console.log(data)
}

const signUpFailure = function (data) {
  console.log('failed')
  console.log(data)
}

const logInSuccess = function (data) {
  store.user = data.user
}

const logInFailure = function (data) {
  console.log('failed logging in')
  console.log(data)
}

const changePasswordSuccess = function () {
  console.log('changed password')
}

const changePasswordFailure = function () {
  console.log('failed to change password')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
