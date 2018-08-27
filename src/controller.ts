import { Controller } from 'cerebral'
// import Devtools from 'cerebral/devtools'
import app from './app/index'

// const controller: any = Controller(app:, {
//   devtools: navigator.userAgent.toLowerCase().includes('chrome')
//     ? Devtools({ host: 'localhost:8686' })
//     : null,
// })

const controller: object = Controller(app)

export default controller
