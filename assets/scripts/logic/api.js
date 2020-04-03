'use strict'

const config = require('../config')

const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const logIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const logOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createBuild = function (data) {
  return $.ajax({
    url: config.apiUrl + '/builds',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const retrieveParts = function (data) {
  return $.ajax({
    url: config.apiUrl + '/parts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createPart = function (data) {
  return $.ajax({
    url: config.apiUrl + '/parts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const retrieveBuilds = function () {
  return $.ajax({
    url: config.apiUrl + '/builds',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteBuild = function (id) {
  return $.ajax({
    url: config.apiUrl + '/builds/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  logIn,
  changePassword,
  logOut,
  createBuild,
  retrieveParts,
  createPart,
  retrieveBuilds,
  deleteBuild
}
