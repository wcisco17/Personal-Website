import React from 'react'
import Layout from '../components/Layout';
import Fade from 'react-reveal/Fade';
import { Wrapper } from '../pages/about'
import styled from 'styled-components'
import Navigation from '../components/nav'
import { Hero,  } from './about';
import { Form } from '../components/Forms';
import AWSAppSyncClient from 'aws-appsync'
import AppSyncConfig from '../aws-exports(8)'
import { ApolloProvider } from 'react-apollo'
import 'isomorphic-fetch' // Comment out this line results in an error ...



export const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 1rem;
  padding: 2rem 0rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }
  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const client = new AWSAppSyncClient({
  // disableOffline: true,
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  
  auth: {
    type: AppSyncConfig.aws_appsync_authenticationType,
    apiKey: AppSyncConfig.aws_appsync_apiKey,
    // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  }
})


export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: "none"

    }
  }
  componentDidUpdate() {
    console.log('Show: ', this.state.show);

    if (this.state.show === "block") {
      setInterval(() => {
          this.setState({
            show: "none"
          })
      }, 3000)
    }
   }

    onModuleShow = () => {
          this.setState({
            show: "block"
          })
    } 
    
    onModuleClose = () => this.setState({ show: "none" })


  render() {
    
    
    return (
      <>
        <Contact 
        show={this.state.show}
        onModuleClose={this.onModuleClose}
        onModuleShow={this.onModuleShow}
        />
      </>
    )
  }
}



const Contact = ({ show, onModuleClose, onModuleShow }) => (
  <ApolloProvider client={client}>
    <Navigation>
        <Layout>
            <Hero>
              <Fade top delay={200} >
                  <h1 className="header-about" >Contact</h1>
              </Fade>
            </Hero>
            <Wrapper>
                  <Form title="Say Hello."
                    show={show}
                    onModuleClose={onModuleClose}
                    onModuleShow={onModuleShow}
                    />
            </Wrapper>
        </Layout>
    </Navigation>
  </ApolloProvider>
)