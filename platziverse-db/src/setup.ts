'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')
 const debug = require('debug')('platziverse:sequelizeConnection:setup')


const prompt = inquirer.createPromptModule()
const db = require('./')
import sequelizeConnection from "./db";
async function setup(){
    const answer =  await prompt([
        {
            type: 'confirm',
            name: 'setup',
            message: 'This will destroy your database, are you sure?'
        }
    ])
      if (!answer.setup) {
        return console.log('Nothing happened :)')
      }

      await db().catch(handleFatalError)
 

}
function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
setup()
 