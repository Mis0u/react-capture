import React from 'react';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnimation, lineAnimation, slider } from '../components/Animation';
import { useScroll } from "../components/useScroll";

const OurWork = () => {
    const [element,control] =useScroll();
    const [element2,control2] =useScroll();
    return (
        <Work exit="exit" variants={ pageAnimation } initial="hidden" animate="show" style={{background:'#fff'}}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            <Movie>
                <motion.h2 variants={ fade }>The Athlete</motion.h2>
                <motion.div variants={ lineAnimation } className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide>
                        <motion.img variants={ photoAnimation } src={ athlete } alt="athlete"/>
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={ fade } ref={ element } animate={ control } initial="hidden">
                <h2>The Racer</h2>
                <motion.div variants={ lineAnimation } className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <img src={ theracer } alt="the racer"/>
                </Link>
            </Movie>
            <Movie variants={ fade } ref={element2} animate={control2} initial='hidden'>
                <h2>Good times</h2>
                <motion.div variants={ lineAnimation } className="line"></motion.div>
                <Link to='/work/good-times'>
                    <img src={ goodtimes } alt="good times"/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px){
      padding: 2rem 2rem;
    }

    h2{
        padding: 1rem 0rem;
    }
`

const Movie = styled(motion.div)`
    padding-bottom: 5rem;
    .line{
        height:0.5rem;
        background-color: #23d997;
        margin-bottom: 3rem;

        img{
            width: 100%;
            height: 70vh;
            object-fit: cover;
        }
    }
`
const Hide = styled.div`
  overflow: hidden;
`

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`

export default OurWork;