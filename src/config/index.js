import styled from 'styled-components'

const colors = {
  primary: "linear-gradient(to right, #D4145A 0%, #FBB03B 100%)", // Color for buttons or links
  primaryLight: '#D4145A',
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.5)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
  },
  primaryLink: "#FBB03B",
  white: 'white',
  shadow: "-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
}

const transitions = {
  normal: '0.5s',
}

const fontSize = {
  small: '0.9rem',
}

const fontFamily = {
  serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
}



export const widths = {
  MOBILE_WIDTH: 500,
  MEDIUM_WIDTH: 720,
  LARGE_WIDTH: 960,
  EXTRA_LARGE_WIDTH: 1140,
  DESKTOP_FULL_WIDTH: 1300
}



const box = {
    // flex: "display:flex;align-content: center;justify-content:center;"
}



const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '18px',
}
const breakpointss = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)',
};

const hidden = key => props =>
  props[key] && {
    [breakpointss[key]]: {
      display: 'none',
    },
  };

const xs = hidden('xs');
const sm = hidden('sm');
const md = hidden('md');
const lg = hidden('lg');

const customQuery = props =>
  props.query && {
    [props.query]: {
      display: 'none',
    },
  };

const Hide = styled.div([], xs, sm, md, lg, customQuery);


export {
  Hide,
  colors,
  box,
}
export default theme


