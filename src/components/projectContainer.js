import React from "react"
import ProjectsPost from '../templates/projects-post'
import Fade from 'react-reveal/Fade';
import { Connect } from "aws-amplify-react";
import { graphqlOperation } from 'aws-amplify'
import { listProjectss } from "../graphql/queries";
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'

import tw from 'tailwind.macro'

const Wrapper = styled.a`
  max-width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .p-2 {
      line-height: 1.8rem;
    }
  &:hover {
    transform: translateY(-6px);
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    .p-1 {
        opacity: 0;
    }
    .p-2 {
        opacity: 0;
    }
  }
`

export const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(1, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

export const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

export const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`



export const ProjectCard = ({ title, link, children, bg, img }) => (
    <Wrapper href={link} target="_blank" rel="noopener noreferrer" img={img} bg={bg}>
        <Text>{children}</Text>
        <Title>{title}</Title>
  </Wrapper>
)


const Loader = () => (
    <ContentLoader
    height={170}
		width={400}
    speed={2}
    primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
    >
  
    </ContentLoader>
)




export const Containers = () => {
    return (
        <Connect query={graphqlOperation(listProjectss)}>
            {({ data, loading }) => {
                return (
                    <>
                    {loading  ? (
                    <Loader /> ) :
                    <Fade bottom delay={200} >
                    <ProjectsWrapper  >
                             {data.listProjectss.items.map((project) => {
                              const {
                                title,
                                description,
                                website,
                                color,
                                image,
                                id
                              } = project
                              return (
                                
                                <ProjectsPost
                                key={id}
                                title={title}
                                description={description}
                                website={website}
                                color={color}
                                image={image}
                                />
                                )
                              })} 
                        </ProjectsWrapper>
                     </Fade>
                            }     
                    </>
                )
            }}
        </Connect>
    )
}
