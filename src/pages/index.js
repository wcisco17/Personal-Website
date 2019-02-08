import React from "react"
import styled from 'styled-components'
import { Link } from 'gatsby'
import TextLoop from 'react-text-loop'
import Fade from 'react-reveal/Fade';
import {Wrapper} from "../components/Wrapper";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Title from "../components/Title";
import AWSAppSyncClient from 'aws-appsync'
import AppSyncConfig from '../aws-exports.js'
import { ApolloProvider } from 'react-apollo'



import Navigation from '../components/nav'

import "../styled/cards.css"

import Logo from '../components/logo'

import { Containers } from "../components/projectContainer";
import Amplify from 'aws-amplify'


Amplify.configure(AppSyncConfig)





const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  height: 100%;
  overflow: hidden;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.2em;
    
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);


  color: ${props => props.theme.colors.grey.dark};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }
  p {
    font-size: 1.68rem;
    line-height: 3rem;
    padding-top: 1rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
  }
`



export default () => (
  <>
    <Navigation>
      <Logo />
    <Layout>
        <Wrapper>
        <Hero>
               <TextLoop>
                    <h1>Hello.</h1>
                    <h1>你好.</h1>
                    <h1>Bonjour.</h1>
                    <h1>สวัสดี.</h1>
                    <h1>Hallo.</h1>
                    <h1>Howzit.</h1>
               </TextLoop>
            <p>
            I&apos;m Williams Sissoko, Web Developer who enjoys taking on projects, building, and designing. Specializing in developing with Frameworks like Gatsby, React Native, and even Blockchain Applications using Truffle for testing and Drizzle for the Front-End!
            </p>
                <Link to="/contact">
                <Button big>
                    <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
                    </svg>
                    Contact
                </Button>
                </Link>
            </Hero>
            <Content>
                <Title>Check out my latest Projects</Title>
                <Fade bottom delay={200} >
                  <ApolloContainer />
                </Fade>
            </Content>
        </Wrapper>
    </Layout>
    </Navigation>
    </>
)


const client = new AWSAppSyncClient({
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  auth: {
    type: AppSyncConfig.aws_appsync_authenticationType,
    apiKey: AppSyncConfig.aws_appsync_apiKey,
    // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  }
})


const ApolloContainer = () => (
  <ApolloProvider client={client}>
    <Containers />
  </ApolloProvider>
)

