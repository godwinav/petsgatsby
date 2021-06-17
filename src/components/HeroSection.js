import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import video from '../asserts/videos/video3.mp4'


const HeroSection = () => {
    return (
        <Container>
            <HeroBg>
                <Video src={video} type='video/mp4' autoPlay loop muted playsInline  />
            </HeroBg>
            <HeroContent>
                <HeroH1>Amazing Pet Breeds</HeroH1>
                <HeroP>This pets are not common breeds and they are hard to come by 
                      They are only few in the worls and they are the most intelligent breeds of pets
                </HeroP>
                <Button 
                big="true"
                css={`position:absolute;
                right:45px;
                }`}
                to='/about'>Buy a Pet</Button>
            </HeroContent>
        </Container>
    )
}

export default HeroSection


const Container=styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0 30px;
height:800px;
position:relative;
z-index:1;
color:#fff;
overflow:hidden;

::before{
    content:'';
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:2;
    background:linear-gradient(180deg, rgba(0,0,0, 0.2) 0%,rgba(0,0,0, 0.6) 100% ), 
    linear-gradient(180deg, rgba(0,0,0, 0.2) 0%,transparent 100% ) 
}   
`
const HeroBg=styled.div`
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
width:100%;
height:100%;

`

const Video=styled.video`
width:100%;
height:100%;
object-fit:cover;
-o-object-fit:cover;
`
const HeroContent=styled.div`
z-index:4;
height: calc(100vh- 80px);
max-height:100;
padding: 0 calc((100vw- 1300px)/2);
text-align:center;
line-height:1.1;
word-spacing:1px;

`
const HeroH1=styled.h1`
font-size:clamp(1.5rem, 6vw, 4rem);
margin-bottom:24px;
letter-spacing:3px;
font-weight:bold;
padding: 0 1rem;

`
const HeroP=styled.p`
font-size:20px;
margin-bottom:14px;
font-weight:100;
padding:0 10% 0% 10%;
ruby-align: justify;
`
