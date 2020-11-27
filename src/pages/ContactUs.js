import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../components/Animation';
import styled from "styled-components";

const ContactUS = () => {
    return (
        <StyledContact  exit="exit" variants= { pageAnimation } initial="hidden" animate="show" style= {{  background: "#FFF"}}>
            <StyledTitle>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
                </Hide>
            </StyledTitle>
            <div>
                <Hide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Send us a message</h2>
                    </StyledSocial>
                </Hide>
                <Hide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Send an email</h2>
                    </StyledSocial>
                </Hide>
                <Hide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Social Media</h2>
                    </StyledSocial>
                </Hide>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px){
      padding: 2rem;
      font-size: 1rem;
      margin-top: 0;
  }
`
const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: #000;
  @media (max-width: 1500px){
      margin-top: 5rem;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2{
     margin: 2rem;
  }
`

export default ContactUS;