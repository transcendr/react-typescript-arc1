import * as React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

const style = {
  grid: {
    margin: '0 -15px',
    width: 'calc(100% + 30px)',
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  },
}

function GridContainer({ ...props }: any) {
  const { classes, children, className, ...rest } = props
  return (
    <Grid container={true} {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  )
}

export default withStyles(style)(GridContainer)
