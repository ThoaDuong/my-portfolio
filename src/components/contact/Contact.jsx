import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { CorgiCanvas } from '../threejs/CorgiCanvas'
import { ShibaCanvas } from '../threejs/ShibaCanvas'

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    position: relative;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
`
const Left = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 	1024px) {
		width: 100%;
    }
`
const BoxObject = styled.div`
    width: 15%;
    @media only screen and (max-width: 	1024px) {
		display: none;
    }
`
// const Right = styled.div`
//     /* flex: 1; */
//     width: 40%;
//     @media only screen and (max-width: 	1024px) {
// 		display: none;
//     }
// `
const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width: 	1024px) {
		width: 100%;
        padding: 0 30px;
    }
`
const Title = styled.h1`
    font-weight: 300;
    margin: 0;
`
const SubTitle = styled.div`
    font-size: 16px;
    font-style: italic;
`
const Credit = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 11px;
    font-style: italic;
`
const Input = styled.input`
    padding: 15px 20px;
    background-color: #f7f7f7;
    border: none;
    border-radius: 5px;
`
const TextArea = styled.textarea`
    padding: 15px 20px;
    background-color: #f7f7f7;
    border: none;
    border-radius: 5px;
`
const Button = styled.button`
    padding: 15px 20px;
    border: 1px solid var(--green);
    background-color: transparent;
    color: var(--green);
    border-radius: 30px;
    cursor: pointer;
    transition-delay: 0.2s;
    &:hover{
        color: white;
        background-color:#518f00;
        border: 1px solid white;
    }
`

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID; 
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID; 
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY; 

export const Contact = () => {

    // variable
    const formRef = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    // function
    const handleSubmit = (e) => {
        e.preventDefault();

        // validate form
        if(name.length > 0 && email.length > 0 && message.length > 0){
            // handle emailjs
            emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setSuccess(true);
                    setError(false);
                },
                (error) => {
                    setError(true);
                    setSuccess(false);
                },
            );
        }else{
            setError(true);
            setSuccess(false);
        }

    }

    return (
        <Section id='contact'>
            <Container className='container'>
                <BoxObject>
                    <CorgiCanvas/>
                </BoxObject>
                <Left>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <SubTitle>Please feel free to leave me a email anytime!</SubTitle>

                        <Input placeholder='Name' name='name' 
                            value={name} onChange={(e)=> setName(e.target.value)}
                        />
                        <Input placeholder='Email' name='email' 
                            value={email} onChange={(e)=> setEmail(e.target.value)}
                        />
                        <TextArea placeholder='Write your message' name='message' rows={8}
                            value={message} onChange={(e)=> setMessage(e.target.value)}
                        />
                        <Button type='submit'>Send</Button>
                        {success && <div className='success-message'>
                            Your message has been sent. We'll get back to you soon!
                        </div>}
                        {error && <div className='error-message'>
                            Something went wrong. Please submit again!
                        </div>}
                    </Form>
                </Left>
                <BoxObject>
                    <ShibaCanvas/>
                </BoxObject>
            </Container>
            <Credit>The prototype is based on a concept by Lama Dev</Credit>
        </Section>
    )
}
