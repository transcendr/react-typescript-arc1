import * as React from 'react'
import { render } from 'react-dom'
import './components/web/@native-shim'

import controller from './controller'
import { Container } from '@cerebral/react'

import Hello from './components/app/Hello'
import World from './components/app/World'
import FirebaseChat from './components/app/FirebaseChat'

import './style.css'
const styles = {}

const App = () => (
  <div style={styles}>
    <Hello name="A" />
    <World />
    <FirebaseChat />
  </div>
)

render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.querySelector('#root')
)
