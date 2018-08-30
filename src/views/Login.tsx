import * as React from 'react'
// import PropTypes from 'prop-types'

// @material-ui/core components
// import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from '../components/app/GridContainer'
import Hello from '../components/app/Hello'
import World from '../components/app/World'

class LoginPage extends React.Component {
  constructor(props: any) {
    super(props)
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: 'cardHidden',
    }
  }

  render() {
    return (
      <div className="loginPage">
        <GridContainer justify="center">
          <Hello name="Whoa!" />
          <World />
        </GridContainer>
      </div>
    )
  }
}

export default LoginPage

// export default withStyles(loginPageStyle)(LoginPage);
