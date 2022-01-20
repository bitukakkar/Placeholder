import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  //  ########### LandingTokenCard ########### //
  landing_token_card_container: {
    position: 'absolute',
    width: '42rem',
    height: '21.6rem',
    left: '8rem',
    top: '16.1rem',
    backdropFilter: 'blur(2rem)',
    borderRadius: '2rem',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    '& > img': {
      position: 'absolute',
      top: '-3.7rem',
      left: '3.1rem'
    },
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      top: '60%',
      transform: 'translate(-50%, -50%)'
    }
  },
  landing_token_card_icon: {
    position: 'absolute',
    top: '-3.8rem',
    left: '3rem',
    width: '7.8rem',
    height: '7.8rem',
    borderRadius: '200px',
    background: '#F6F9F9',
    border: '2px solid #21D1CC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  landing_token: {
    '& > h2': {
      margin: '0',
      marginTop: '6.5rem',
      fontFamily: 'IBMPlexSans',
      fontSize: '2.4rem',
      lineHeight: '2.9rem',
      color: '#1C232B'
    },
    '& > p': {
      color: '#1C232B',
      opacity: '0.5',
      fontSize: '1.4rem',
      lineHeight: '1.96rem',
      margin: '0',
      marginBottom: '2rem',
      fontFamily: 'InterRegular'
    }
  },
  landing_token_trvl_ammount: {
    fontSize: '1.4rem',
    color: 'rgba(28, 35, 43, 0.5)'
  },
  landing_token_balance: {
    marginLeft: '3.4rem',
    '& > h2': {
      margin: '0',
      marginTop: '6.4rem',
      fontFamily: 'InterRegular',
      fontSize: '2.4rem',
      lineHeight: '2.9rem',
      color: '#1C232B'
    },
    '& > p': {
      color: '#1C232B',
      opacity: '0.5',
      fontSize: '1.4rem',
      lineHeight: '1.96px',
      margin: '0',
      marginTop: '.5rem',
      marginBottom: '2rem',
      fontFamily: 'InterRegular'
    }
  },
  buy_token_button: {
    width: '36rem',
    height: '4.8rem',
    fontSize: '1.4rem',
    padding: '1.5rem 2rem 1.6rem',
    border: '1.5px solid #21D1CC',
    boxSizing: 'border-box',
    borderRadius: '.6rem',
    color: '#ffffff',
    fontFamily: 'InterSemiBold',
    cursor: 'pointer',
    background: '#21D1CC'
  },
  flex: {
    display: 'flex'
  }
}))
