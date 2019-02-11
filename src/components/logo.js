import React from 'react'
import { widths, fading } from "../config";
import styled, { keyframes, css } from 'styled-components'
import Fade from 'react-reveal/Fade';

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`
const rotateAnimation = length => css`
animation: ${rotate} ${length} linear infinite;
`


const ContainerLogo = styled.div`

    position: relative;
    top: 20px;
    padding-left: 20px;
    
    @media (max-width: ${widths.MOBILE_WIDTH}px) {
      top: 35px;
      
    }
`


const Logo = styled.img`
  width: 5%;
  height: 5%;
  ${rotateAnimation('4s')};
  
  @media (max-width: ${widths.LARGE_WIDTH}px) {
    width: 10%;
    height: 10%;
  }
  @media (max-width: ${widths.MOBILE_WIDTH}px) {
    width: 15%;
    height: 15%;
  }
`



export default () => {
    return (
    <Fade top delay={fading.fad} >
        <ContainerLogo>
            <Logo alt='...' src={require('../images/logo-ws.png')} />
        </ContainerLogo>
    </Fade>
    )}