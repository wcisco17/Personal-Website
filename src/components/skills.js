import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import { widths } from '../config';


const Image = styled.img`
    width: 180px;
    padding: 2.5rem 50px;

    @media (max-width: ${widths.MEDIUM_WIDTH}px) {
            width: 80px;
            padding: 20px 20px;
    }
`

const TECHSKILLS = [
    {
        skills: {
            id: 1,
            img: require('../images/React.js_logo-512.png'),
            delay: 700,
            left: false,
            right: true
        }
    },
    {
        skills: {
            id: 2,
            img: require('../images/index.png'),
            delay: 600,
            left: true,
            right: false
        }
    },
    {
        skills: {
            id: 3,
            img: require('../images/JavaScript-logo.png'),
            delay: 600,
            left: false,
            right: true
        }
    },
    {
        skills: {
            id: 4,
            img: require('../images/graphql-logo.png'),
            delay: 600,
            left: true,
            right: false
        }
    },
    {
        skills: {
            id: 4,
            img: require('../images/1*vHUiXvBE0p0fLRwFHZuAYw.gif'),
            delay: 600,
            left: false,
            right: true
        }
    },
    {
        skills: {
            id: 5,
            img: require('../images/skills.png'),
            delay: 600,
            left: true,
            right: false
        }
    },
    {
        skills: {
            id: 6,
            img: require('../images/java.jpg'),
            delay: 600,
            left: false,
            right: true
        }
    },
]




export default () => {
    return (
        <>
        {TECHSKILLS.map(({ skills: { id, img, delay, left, right } }) => {
            return (
            <>
                <Fade key={id} left={left} right={right} delay={delay} >
                    <Image alt="..." 
                    src={img}
                    />
                </Fade>
            </>
             )
         })}
        </>
    )
}
