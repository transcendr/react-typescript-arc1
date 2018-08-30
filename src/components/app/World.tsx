import * as React from 'react'
// import * as PropTypes from 'prop-types'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import '../web/giphy'

//https://github.com/Microsoft/TypeScript/issues/4648
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'naia-giphyembed': any
    }
  }
}

//https://flow.org/en/docs/react/types/
interface IWorld {}

interface WorldProps {
  count: number
  gettest: any
  testapi: any
}

interface WorldState {
  initialised: boolean //example
}

class World extends React.Component<WorldProps, WorldState> implements IWorld {
  static propTypes = {}

  constructor(props: WorldProps) {
    super(props)
    this.state = {
      initialised: true,
    }
  }

  componentDidMount() {
    // Example request on component mount
    // setTimeout(() => {
    //   this.props.testapi()
    // }, 3000)
  }

  render() {
    return (
      <div>
        <style>
          code {'{ background: #efefef; font-size: 1.2em; padding: 0 7px;}'}
        </style>
        <hr />
        <h1>App Component B</h1>
        <p>You've made ${this.props.count} by clicking gifs!</p>
        <p>
          API Request returned msg:{' '}
          <code>
            {this.props.gettest.msg ||
              'Click Component A Image to Make Request'}
          </code>
        </p>
      </div>
    )
  }
}

export default connect(
  {
    count: state`count`,
    gettest: state`gettest`,
    testapi: signal`testapi`,
  },
  World
)
