import { makeStyles } from '@material-ui/core/styles'
import { Slider, withStyles } from '@material-ui/core'
const colorPlate = {
  dark: '#1C232B',
  deepDark: '#0F1920',
  gray: '#F2F2F2',
  darkGray: '#E7E7E7',
  black: '#000',
  white: '#fff',
  white2: '#F5F9FD',
  orange: '#F55035'
}
export const useStyles = makeStyles(theme => ({
  card: {
    width: '86rem',
    maxHeight: '48.6rem',
    background: '#ECF4F4',
    borderRadius: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
    // ['@media (max-width:374px)']: {
    //
    //   width: '42rem',
    // },
    // ['@media (max-width:319px)']: {
    //
    //   width: '38rem',
    // },
  },
  cardContent: {
    padding: 0,
    display: 'flex',
    position: 'relative'
  },
  closeIcon: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    cursor: 'pointer',
    transition: 'all .4s ease',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  form_section: {
    width: '56rem',
    padding: '3rem 4rem',
    boxSizing: 'border-box',
    borderRight: '1.5px solid rgba(28, 35, 43, .15)'
  },
  title: {
    fontFamily: 'IBMPlexSansRegular',
    margin: 0,
    fontSize: '3.6rem'
  },

  form_block: {
    marginTop: '1rem',
    width: '100%',
    '& input': {
      width: '100%',
      display: 'block',
      height: '4.8rem',
      margin: '0 0 2rem 0',
      padding: '1rem',
      boxSizing: 'border-box',
      border: '1.5px solid rgba(55, 65, 106, 0.2)',
      borderRadius: '6px',
      background: '#FFFFFF',
      '&:focus': {
        outline: 'none',
        boxShadow: '0 0 .5px .5px #21D1CC'
      }
    },

    '& label': {
      margin: '0',
      color: colorPlate.black,
      fontSize: '1.4rem',
      lineHeight: '16.8px',
      display: 'block',
      fontFamily: 'InterSemiBold',
      marginBottom: '6px'
    }
  },
  horizontal_line: {
    opacity: '0.15',
    borderTop: '1.5px solid #1C232B',
    margin: '3rem 0 3rem'
  },
  submitBtn: {
    width: '10rem',
    height: '4.8rem',
    fontSize: '1.6rem',
    background: '#21D1CC',
    borderRadius: '6px',
    border: 0,
    margin: '10px 10px 0 0',
    fontFamily: 'InterSemiBold',
    color: '#ffffff',
    cursor: 'pointer',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: '#FF263C'
    },
    '&:disabled': {
      background: 'rgba(33, 209, 204, 0.5)',
      color: '#ffffff'
    }
  },
  noSelect: {
    '-webkit-touch-callout': 'none' /* iOS Safari */,
    '-webkit-user-select': 'none' /* Safari */,
    '-khtml-user-select': 'none' /* Konqueror HTML */,
    '-moz-user-select': 'none' /* Old versions of Firefox */,
    '-ms-user-select': 'none' /* Internet Explorer/Edge */,
    userSelect:
      'none' /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  },
  // #################### input_range_amount_input_div #################### //
  input_range_amount_input_div: {
    // marginBottom: '.5rem',
  },
  input_range_amount: {
    // margin: '0 0 0 2rem',
    margin: '0',
    fontFamily: 'InterRegular',
    width: '4.5rem',
    fontSize: '1.6rem',
    color: '#37416A'
  },
  // #################### trvl_token_info_block #################### //
  trvl_token_info_block: {
    padding: '3rem 0 1.8rem 4rem',
    '& > img': {
      marginBottom: '2rem'
    }
  },
  trvl_token: {
    fontFamily: 'IBMPlexSansRegular',
    fontSize: '4rem',
    lineHeight: '4.8rem',
    color: '#000000'
  },
  trvl_token_sold_text: {
    fontFamily: 'InterRegular',
    fontSize: '1.4rem',
    lineHeight: '2rem',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  trvl_token_graph_img: {
    width: '100%'
  }
}))

// #################### AmountSlider #################### //

export const AmountSlider = withStyles({
  root: {
    color: '#21D1CC',
    height: 4
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: '#21D1CC',
    border: '2px solid currentColor',
    marginTop: -6.5,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 4,
    borderRadius: 4
  },
  rail: {
    height: 4,
    borderRadius: 4
  }
})(Slider)
