import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.up('md')]: {
      '& .MuiContainer-root': {
        maxWidth: '144rem !important',
        padding: '0 13rem'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .MuiContainer-root': {
        maxWidth: '144rem !important',
        padding: '0 2rem'
      }
    }
  },
  // ############# top section ############# //
  top_sect: {
    minHeight: '72rem',
    background: 'rgba(33, 209, 204, .4)',
    position: 'relative',
    '@media (max-width:280px)': {
      minHeight: '57.5rem'
    }
  },
  title_div: {
    paddingTop: '3rem',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    margin: '0',
    padding: '0',
    color: '#1C232B',
    fontFamily: 'InterExtraBold',
    // width: '7.3rem',
    height: '45.9px',
    fontSize: '3.2rem',
    lineHeight: '3.84rem'
  },
  title_powered_by: {
    width: '7.1rem',
    height: 'auto',
    fontFamily: 'InterMedium',
    fontStyle: 'italic',
    color: 'rgba(28, 35, 43, 0.7)',
    fontSize: '1.2rem',
    lineHeight: '1.44rem',
    borderLeft: '1.5px solid #5a6268',
    marginLeft: '14px',
    paddingLeft: '14px'
  },
  border_bottom: {
    borderBottom: '1.5px solid rgba(255, 255, 255, 0.5)',
    marginTop: '2.51rem'
  },
  text: {
    fontFamily: 'IBMPlexSans',
    fontSize: '5.6rem',
    lineHeight: '6.72rem',
    color: '#1c232b',
    marginTop: '5.35rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4.6rem'
    },
    '@media (max-width:420px)': {
      marginTop: '7rem',
      fontSize: '4rem',
      lineHeight: '6rem'
    },
    '@media (max-width:280px)': {
      marginTop: '3.2rem',
      fontSize: '3.5rem',
      lineHeight: '5.6rem'
    }
  },
  // ############# banner ############# //
  banner_div: {
    width: '100%',
    maxWidth: '100.577rem',
    position: 'absolute',
    textAlign: 'center',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '-27.7rem',
    [theme.breakpoints.down('sm')]: {
      bottom: '-21rem'
    },
    '@media (max-width:420px)': {
      marginTop: '-15rem'
    },
    '@media (max-width:360px)': {
      bottom: '-17rem'
    },
    '& > img': {
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '85rem'
      },
      '@media (max-width:630px)': {
        maxWidth: '100%'
      }
    },
    '@media (max-width:280px)': {
      bottom: '-14rem'
    }
  },
  // ############# technology sect ############# //
  technology_sect: {
    marginTop: '44rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '28.3rem'
    },
    '@media (max-width:280px)': {
      marginTop: '22.3rem'
    }
  },
  img_div: {
    maxWidth: '50rem',
    '& > img': {
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        marginTop: '5rem'
      }
    }
  },
  content_div: {
    maxWidth: '50rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      order: '-1'
    }
  },
  content_title: {
    margin: 0,
    color: '#1C232B',
    fontFamily: 'IBMPlexSans',
    fontSize: '4em',
    lineHeight: '4.8rem',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  content: {
    marginTop: '2rem',
    fontSize: '2rem',
    color: 'rgba(28, 35, 43, 0.7)',
    fontFamily: 'InterRegular',
    '& > p': {
      lineHeight: '2.8rem',
      '&:nth-child(2)': {
        margin: 0,
        marginTop: '2.9rem'
      },
      '&:nth-child(3)': {
        margin: 0,
        marginTop: '2.9rem'
      }
    }
  },
  // ############# hoteliers sect ############# //
  hoteliers_sect: {
    marginTop: '12rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },

  hoteliers_sect_img_div: {
    maxWidth: '58rem !important',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5rem'
    }
  },

  // ############# trip token sect ############# //
  trip_sect: {
    marginTop: '19.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: '12rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },

  trip_sect_img_div: {
    maxWidth: '50rem !important',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      '& > img': {
        '&:nth-child(2)': {
          marginTop: '0',
          display: 'none'
        }
      }
    }
  },

  // ############# stacking sect ############# //
  stacking_sect: {
    marginTop: '16.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: '12rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },
  stacking_sect_img_div: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
      textAlign: 'center'
    }
  },
  staking_button: {
    width: 179,
    height: 48,
    background: '#21D1CC',
    border: 0,
    margin: 0,
    marginTop: 30,
    borderRadius: 6,
    fontSize: 14,
    lineHeight: '17px',
    fontFamily: 'InterSemiBold',
    color: '#fff',
    cursor: 'pointer'
  },
  // ############# why trip sect ############# //
  why_trip_sect: {
    marginTop: '12rem',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  },
  why_trip_img_div: {
    maxWidth: '50rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
      textAlign: 'center'
    }
  },
  why_trip_tittle: {
    fontSize: '5.6rem',
    height: '6.6rem',
    display: 'flex',
    alignItems: 'center',
    marginTop: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '0',
      justifyContent: 'center'
    }
  },
  why_trip_btn: {
    width: '28.3rem',
    height: '6.4rem',
    background: '#FFF',
    borderRadius: '2rem',
    marginTop: '2.6rem',
    border: 0,
    cursor: 'pointer',
    fontFamily: 'IBMPlexSans',
    fontSize: '1.6rem',
    lineHeight: '1.9rem',
    color: '#21D1CC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  why_trip_btn_mail_icon: {
    marginRight: '1rem',
    width: '2.4rem',
    height: '2.4rem'
  },

  // ############# nft sect ############# //
  nft_sect: {
    minHeight: '94.7rem',
    background: 'rgba(33, 209, 204, .4)',
    marginTop: '12rem'
  },
  // ############# nft_content sect ############# //
  nft_content_sect: {
    paddingTop: '11.8rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1rem'
    }
  },
  nft_content_title: {
    fontSize: '5.6rem',
    lineHeight: '6.72rem'
  },
  nft_content_div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      '& > p': {
        margin: '0 !important',
        maxWidth: '58rem',
        '&:first-child': {
          marginRight: '15px'
        }
      }
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '100%'
    }
  },
  // ############# nft_card sect ############# //
  nft_card_sect: {
    width: '100%'
  },
  nft_card_sect_title: {
    fontSize: '2.4rem',
    marginTop: '3rem',
    marginBottom: '2rem'
  },
  // ############# footer sect ############# //
  footer_sect: {
    minHeight: '27.8rem',
    background: '#1C232B',
    '& p': {
      fontFamily: 'InterRegular',
      fontSize: '1.4rem',
      lineHeight: '1.96rem'
    }
  },
  footer_container: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    '@media (max-width:720px)': {
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  },
  // ############# footer left ############# //
  footer_left: {
    maxWidth: '50rem',
    paddingTop: '7.7rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '4rem'
    },
    '@media (max-width:720px)': {
      width: '100%',
      maxWidth: '100%'
    }
  },
  footer_title_div: {
    maxWidth: '171px',
    display: 'flex',
    alignItems: 'center'
  },
  footer_title: {
    margin: '0',
    fontFamily: 'InterExtraBold',
    fontSize: '3.2rem',
    lineHeight: '3.84rem',
    color: '#FFFFFF'
  },
  footer_title_poweredBy: {
    color: 'rgba(255, 255, 255, .7)',
    fontSize: '1.2rem',
    lineHeight: '1.44rem',
    fontStyle: 'italic',
    fontFamily: 'InterMedium',
    marginLeft: '1rem'
  },
  footer_description: {
    color: 'rgba(255, 255, 255, .8)',
    marginTop: '2.2rem',
    maxWidth: '49.6rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  // ############# footer right ############# //
  footer_right: {
    paddingTop: '9rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3rem'
    },
    '& > p': {
      color: 'rgba(255, 255, 255, .8)'
    },
    '@media (max-width:720px)': {
      width: '100%',
      maxWidth: '100%'
    }
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  footer_input: {
    marginTop: '2.4rem',
    height: '48px',
    flexGrow: '1',
    width: '100vw',
    maxWidth: '49.5rem',
    border: '1.5px solid rgba(255, 255, 255, 0.15)',
    boxSizing: 'border-box',
    borderRadius: '.6rem',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'InterSemiBold',
    fontSize: '14px',
    lineHeight: '16.8px',
    padding: '15px 20px 16px',
    '@media (max-width:720px)': {
      width: '100%',
      maxWidth: '100%'
    }
  },
  footer_email_send_btn: {
    width: '75px',
    height: '48px',
    background: '#21D1CC !important',
    borderRadius: '.6rem',
    marginLeft: '1rem',
    border: 0,
    fontFamily: 'InterSemiBold',
    fontSize: '1.4rem',
    lineHeight: '1.68rem',
    textAlign: 'center',
    color: '#FFFFFF',
    cursor: 'pointer',
    marginTop: '1.7em'
  },
  footer_text: {
    margin: '0',
    marginTop: '1.2rem',
    paddingBottom: '1rem',
    color: '#FFFFFF'
  }
}))
