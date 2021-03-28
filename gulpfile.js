'use strict'

const gulpSharedTasks = require('@ehmicky/dev-tasks')

gulpSharedTasks.buildRegister()

const { print } = require('./gulp/print.js')

module.exports = {
  ...gulpSharedTasks,
  print,
}
