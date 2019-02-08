import React from 'react'
import Navigation from '../components/nav'
import Layout from '../components/Layout';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import { widths } from '../config';
import Skills from '../components/skills';


export const Hero = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#011e51;
    height: 40vh;

    .header-about {
        color: white;
    }
`
export const Wrapper = styled.section`
        grid-column: 2;
        box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
        background-color: ${props => props.theme.colors.bg};
        border-radius: 1rem;
        margin: 0px 20vh;
        position: relative;
        top: -65px;
        padding: ${props => props.about};
        
        @media (max-width: ${widths.EXTRA_LARGE_WIDTH}px) {
            padding: 2rem 2rem;
            margin: 0px 4vh
        }
        @media (max-width: ${widths.LARGE_WIDTH}px) {
            padding: 3rem 2rem;
            margin: 0px 8vh
        }
        @media (max-width: ${widths.MOBILE_WIDTH}px) {
            padding: 2rem 1.2em;
            margin: 0px 3vh;
        }
        overflow: hidden;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    &:next-child(1) {
        padding-bottom: 4rem;
    }
    
    flex-direction: row;
        padding-top: 60px;
        .img-skills {
            width: 300px;
            padding: 0px 50px;
        }
        @media (max-width: ${widths.LARGE_WIDTH}px) {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 1fr;
        }
`




export default () => {
    return (
        <Navigation>
            <Layout>
            <Hero>
                <Fade top delay={200} >
                    <h1 className="header-about" >Tech</h1>
                </Fade>
          </Hero>
                <Wrapper about="2rem 6rem" >
                    <h1>My Skills.</h1>

                    <Content>
                         <Skills />
                    </Content>
                </Wrapper>

            </Layout>
        </Navigation>
    )
}