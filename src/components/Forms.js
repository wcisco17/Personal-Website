import React from 'react'
import { Content } from '../pages/contact';
import Button from '../components/Button';
import { Formik } from 'formik';



import gql from 'graphql-tag'

import Module from './module'

import { Mutation } from 'react-apollo';

import * as mutation from "../graphql/mutations";

import styled from 'styled-components'


const Wrapper = styled.div`
    position: relative;
    top: ${props => props.about === "block" ? "-120px" : "0px"};
`


export const Form = (props) => {
        
         return (
             <>
            <Mutation mutation={gql(mutation.createContact)} >
            {(createContact) => {
            return (
                <Formik
                initialValues={{ name: "", email: "",message: "" }}
                onSubmit={async ({ name, email, message }, { resetForm }) => {

                    try {
                        const response = await createContact({
                            variables: {
                                input: {
                                    name,
                                    email,
                                    message
                                }
                            },
                        })
                        if (response) {
                            props.onModuleShow()
                            resetForm()
                        }
                        return response;
                    } catch (error) {
                        resetForm()

                        return error;

                    }
                }}
                >
                    {({ handleChange, handleSubmit, values }) => {
                        return (
                            <>
                            <Content>
                        <Wrapper about={props.show} >
                            <div style={{ display: `${props.show}` }} >
                            <Module
                            />
                            </div>
                            <h1>{props.title}</h1>
                            <form 
                            onSubmit={handleSubmit}
                            name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
                        <p>
                            <label htmlFor="contact-name">
                            Name
                            <br />
                            <br />
                            <input name="name" id="contact-name" type="text" required 
                            onChange={handleChange}
                            value={values.name}
                            />
                            </label>
                        </p>
                        <p>
                            <label htmlFor="contact-email">
                            E-Mail 
                            <br />
                            <br />
                            <input name="email" id="contact-email" type="email" required 
                            onChange={handleChange}
                            value={values.email}
                            />
                            </label>
                        </p>
                        <p>
                            <label htmlFor="contact-message">
                            Your Message
                            <br />
                            <br />
                            <textarea name="message" id="contact-message" required 
                            onChange={handleChange}
                            value={values.message}
                            />
                            </label>
                        </p>
                        <p>
                            <Button type="submit" >Send</Button>
                        </p>
                        <input type="hidden" name="form-name" value="contact-form" />
                        </form>
                        </Wrapper>
                        </Content>
                        </>
                        )
                    }}
            </Formik>
                        )
                        }}
                    </Mutation>
            </>
    )
}