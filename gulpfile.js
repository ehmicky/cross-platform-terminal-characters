'use strict'

const gulpSharedTasks = require('@ehmicky/dev-tasks')

gulpSharedTasks.buildRegister()

const tasks = require('./src/main.js')
// eslint-disable-next-line import/order
const { print } = require('./gulp/print.js')

module.exports = {
  ...tasks,
  print,
}
