import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import { useStyles } from './style'
import errorIcon from './error.svg'

export const Preloader = ({message='', loadingState}) => {
  const classes = useStyles()
  const containerClass = loadingState === 'success'
    ? classes.hide
    : classes.container

  return <div className = {containerClass}>
    <div className={ classes.CircularProgress}>
      {
        loadingState === 'fail'
          ? <img src={ errorIcon } className={classes.errorIcon} alt='Error' />
          : <CircularProgress size={100} thickness={5}/>
      }
    </div>
  </div>
}