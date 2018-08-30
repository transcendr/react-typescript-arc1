import { Controller } from 'cerebral'
// import Devtools from 'cerebral/devtools'
import app from './app/index'

// const controller: any = Controller(app, {
//   devtools: navigator.userAgent.toLowerCase().includes('chrome')
//     ? Devtools({ host: 'localhost:3000' })
//     : null,
// })

// let devtools = null
// devtools = Devtools({
//   // Some environments might require 127.0.0.1 or computer IP address
//   host: '10.0.2.10:3001',
//   reconnect: true,
// })
// const controller: any = Controller(app, { devtools })

const controller: object = Controller(app)

export default controller
