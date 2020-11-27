import React from 'react';
import { StyledAbout } from '../Style';
import styled from 'styled-components';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import { useScroll } from "./useScroll";
import { fade } from "./Animation";

const FaqSection = () => {
    const [element, control] = useScroll();
    return (
        <Faq variants={ fade } ref={ element } animate={ control } initial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start ?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo.</p>
                        </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo.</p>
                        </div>
                </Toggle>
                <Toggle title="Different Payment Method">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo.</p>
                        </div>
                </Toggle>
                <Toggle title="What product Do You Offer ?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo.</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(StyledAbout)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;