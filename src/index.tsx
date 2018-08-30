import * as React from 'react'
import { render } from 'react-dom'
import './components/web/@native-shim'

import controller from './controller'
import { Container } from '@cerebral/react'

import Login from './views/Login'

import './style.css'
const styles = {}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [elemName: string]: any
    }
  }
}

const App = () => (
  <div style={styles}>
    <Login />
  </div>
)

render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.querySelector('#root')
)

// render(<App />, document.getElementById('root'))
