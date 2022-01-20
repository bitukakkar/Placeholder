import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  nft_card: {
    // width: "28rem",
    // height: "41.9rem",
    background: '#FFFFFF',
    borderRadius: '2rem',
    margin: '0 1rem',
    padding: '1rem',
    textAlign: 'center',
    '& > img': {
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      maxHeight: '32rem'
    },
    '& > h4': {
      fontSize: '1.8rem',
      lineHeight: '2.16rem',
      textAlign: 'center',
      color: '#1C232B',
      margin: 0,
      marginTop: '2rem',
      marginBottom: '1rem',
      fontFamily: 'IBMPlexSansSemiBold',
      minHeight: '4.2rem'
    }
  }
}))
