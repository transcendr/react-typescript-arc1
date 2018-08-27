import * as React from 'react'
// import * as Types from '@types/react'
import * as PropTypes from 'prop-types'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import '../web/giphy'

// https://github.com/Microsoft/TypeScript/issues/4648
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'naia-giphyembed': any
    }
  }
}

// https://flow.org/en/docs/react/types/
interface IHello {
  // ge: React.RefObject<{}> | React.ReactElement<typeof Hello> | null
  ge: { [key: string]: any }
}

interface HelloProps {
  name: any
  count: number
  incremented: () => void
  decremented: () => void
  testapi: () => void
}

interface HelloState {
  initialised: boolean // example
}

class Hello extends React.Component<HelloProps, HelloState> implements IHello {
  static propTypes = {
    // name: PropTypes.string.isRequired,
    name: PropTypes.string,
  }

  ge = (React as any).createRef()

  constructor(props: HelloProps) {
    super(props)
    this.state = {
      initialised: true,
    }
  }

  componentDidMount() {
    this.handleKick()
  }

  handleKick() {
    const node: any = this.ge.current
    // window.ge = node
    node.addEventListener('kick', (e: CustomEvent) => {
      // console.log(e.detail.kicked) // true
      node.setAttribute('postid', 'l4FGqDtRMMjOKdFGU')
      this.props.incremented()
      this.props.testapi()
    })
  }

  handlePush() {
    console.log('When push...')
  }

  handleShove() {
    console.log('Comes to Shove')
  }

  giphyApi() {
    return {
      onPush: this.handlePush,
      onShove: this.handleShove,
    }
  }

  render() {
    return (
      <div>
        <h1>App Component {this.props.name}</h1>
        <naia-giphyembed
          ref={this.ge}
          count={this.props.count}
          postid="whatevers"
        />
      </div>
    )
  }
}

export default connect(
  {
    count: state`count`,
    incremented: signal`incremented`,
    decremented: signal`decremented`,
    testapi: signal`testapi`,
  },
  Hello
)
