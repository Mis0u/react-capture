import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <StyledAnswer layout onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{ title }</motion.h4>
            {toggle ? children : ''}
            <motion.div layout style={{background: toggle ? '#23d997' : '#cccccc'}} className="faq-line"></motion.div>
        </StyledAnswer>
    )
}

const StyledAnswer = styled(motion.div)`
  h4{
    cursor: pointer;
  }
  .faq-line{
    height:0.2rem;
    margin: 2rem 0rem;
    width:100%;
  }
`

export default Toggle;