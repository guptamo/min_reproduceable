import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    width: '100%',
    hieght: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.background.default,
  },
  errorIcon: {
    height: '200px',
    width: 'auto',
  },
  hide: {
    opacity: 0,
    display: 'none',
    pointerEvents: 'none',
  },
  circularProgress: {
    marginBottom: theme.spacing(3),
  },
  message: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
  }
}))