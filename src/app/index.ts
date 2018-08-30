import { Module } from 'cerebral'
import * as sequences from './sequences'
import { routes } from './routes'

interface InitialState {
  count: number
  gettest: object
}

interface Signals {
  incremented: (state: InitialState) => void
  decremented: (state: InitialState) => void
  reset: (state: InitialState) => void
  testapi: any
}
// interface Providers {}
// interface Modules {}

interface ControllerModule {
  state: InitialState
  signals: Signals
  modules: {
    router: typeof routes
  }
  // providers: Providers
  // modules: Modules
}

const controllerModule: ControllerModule = {
  state: {
    count: 0,
    gettest: {},
  },
  signals: {
    incremented: sequences.increment,
    decremented: sequences.decrement,
    reset: sequences.reset,
    testapi: sequences.testapi,
  },
  modules: {
    router: routes,
  },
  // providers: {},
  // modules: {},
}

export default Module(controllerModule)
