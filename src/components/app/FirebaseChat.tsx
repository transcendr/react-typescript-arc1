import * as React from 'react'
// import * as PropTypes from 'prop-types'
import '../web/firebase-chat'

//https://github.com/Microsoft/TypeScript/issues/4648
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gtove-firebasechat': any
    }
  }
}

//https://flow.org/en/docs/react/types/
interface IFirebaseChat {}

interface FirebaseChatProps {
  [key: string]: any
}

interface FirebaseChatState {
  [key: string]: any
}

class FirebaseChat extends React.Component<FirebaseChatProps, FirebaseChatState>
  implements IFirebaseChat {
  ge = (React as any).createRef()

  static propTypes = {}

  constructor(props: FirebaseChatProps) {
    super(props)
    this.state = {
      initialised: true,
    }
  }

  componentDidMount() {
    this.handleNewMessage()
  }

  handleNewMessage() {
    const node: any = this.ge.current
    // window.ge = node
    node.addEventListener('new-message', (e: CustomEvent) => {
      alert('New Message: ' + e.detail.text)
      // console.log(e.detail.kicked) // true
      // node.setAttribute('postid', 'l4FGqDtRMMjOKdFGU')
      // this.props.incremented()
      // this.props.testapi()
    })
  }

  render() {
    return (
      <div>
        <gtove-firebasechat ref={this.ge} />
      </div>
    )
  }
}

export default FirebaseChat

// export default connect(
//   {
//     count: state`count`,
//     gettest: state`gettest`,
//     testapi: signal`testapi`,
//   },
//   World
// )
