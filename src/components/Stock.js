import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'
import {Button} from './Button'



const Stock = ({heading}) => {
  const data=useStaticQuery(graphql`
query MyQuery {
  allImagesJson {
    edges {
      node {
        alt
        button
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}

`)
const imagesArray=[]
const getImages=()=>{
  data.allImagesJson.edges.forEach((item,index)=>{
    imagesArray.push(
     <ImageContainer key ={index}><ImageHolder src={item.node.img.childImageSharp.fluid.src} fluid={item.node.img.childImageSharp.fluid}/>
     </ImageContainer> 
     
    )
  })
  return imagesArray
}
  return (
    <Container>
      <Heading>{heading}</Heading>
      <ImageWrap>
       {getImages(data)}
      </ImageWrap>
    </Container>
  )
}

export default Stock


const Container=styled.div`
min-height:100%;
padding:0 2rem;
`

const ImageWrap=styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:10px;
justify-items:center;
padding:0 2rem;


@media screen and (max-width:1200px){
    grid-template-columns:1fr 1fr;
    
};

@media screen and (max-width:868px){
    grid-template-columns:1fr;
    
}
`

const ImageContainer=styled.div`
width:100%;
height:100%;
padding:2rem 2rem;

`


const ImageHolder =styled(Img)`
height:100%;
max-width:100%;
position:relative;
border-radius:10px;
filter:brightness(70%);
transition:0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover{
    filter:brightness(100%);
}
`
const Info=styled.div`
 display:flex;
 align-items:center;
 position:absolute;
 top:375px;
`


const Heading=styled.h1`
font-size: clamp( 1.2rem, 5vw, 3rem);
text-align:center;
margin-bottom:2rem;
margin-top:4rem;
color:#000;
`