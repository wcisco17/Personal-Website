import React from 'react'

import styled from 'styled-components'
import {  colors } from '../config';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 30vh;

    background-color: ${colors.primaryLink};
    border-radius: 150px;
    ${colors.shadow};

    position: relative;
    top: 190px;
    overflow: hidden;

    h2 {
        color: white;
        font-size: 1.4rem;
    }
    
    p {
        font-size: 1rem;
        
    }

`

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white"
    }
}


export default () => {
    return (
        <Fade left delay={200} >
            <Wrapper >
                <div style={styles.container} >
                    <h2>Success {"\u{1F60A}"}</h2>
                    <p>Get back to you very soon</p>
                </div>
            </Wrapper>
        </Fade>
    )
}