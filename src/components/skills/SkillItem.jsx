import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 20%;
    text-align: center;
    border: 1px solid white;
    padding: 10px;
`
const Img = styled.img`
    width: 60px;
    height: 60px;
    @media only screen and (max-width: 	768px) {
        width: 40px;
        height: 40px;
    }
`
const Title = styled.h5`
    text-transform: uppercase;
    margin: 5px;
    @media only screen and (max-width: 	768px) {
        font-size: 10px;
    }
`

export const SkillItem = ({ title, img }) => {
    return (
        <Container>
            <Img src={img} alt={title} />
            <Title> {title} </Title>
        </Container>
    )
}

const ImgRectangle = styled.img`
    width: 100px;
    height: 60px;
    @media only screen and (max-width: 	768px) {
        width: 60px;
        height: 40px;
    }
`
export const SkillItemRectangle = ({ title, img }) => {
    return (
        <Container>
            <ImgRectangle src={img} alt={title} />
            <Title> {title} </Title>
        </Container>
    )
  }
