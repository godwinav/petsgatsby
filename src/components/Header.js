import React,{useState} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {NavItems,DropDown} from '../data/NavItems'
import {MdPets} from 'react-icons/md'

const Header = () => {
 
const[click, setClick]=useState(false)
const [active,seActive]=useState(false)
const showMenu=()=>{
  setClick(!click)
  seActive(!active)
}

  return (
    <>
    <Nav>
        <NavLink to='/home'>Pets</NavLink>
         <PetLeg onClick={showMenu}/>
         {console.log(click)}
         <NavMenu>
           {NavItems.map((item, index)=>(
             <NavLink to={item.link} key={index}>
                {item.title}
             </NavLink>
           ))}
          </NavMenu>
    </Nav>
   

         <SideBar onClick={showMenu} active={active} >
           {DropDown.map((item, index)=>(
             <NavLink css={`margin-top:2px;`}
             to= {item.link} key={index}>
                {item.title}
             </NavLink>
           ))}
         </SideBar>
    </>
  )
}

export default Header

const Nav=styled.nav`
background:transparent;
height:80px;
display:flex;
justify-content:space-between;
padding:0.5rem((100vw - 1300px)/2);
z-index:999;
position: fixed;
width:100%;
`
const NavLink =styled(Link)`
color:#fff;
text-decoration:none;
font-size:1rem;
display:flex;
justify-content:center;
align-items:center;
padding:0 1rem;
height:100%;
`
const PetLeg=styled(MdPets)`
display:none;

@media screen and (max-width:768px){
  display:block;
  font-size:2rem;
  position:absolute;
  top:0;
  color:#fff;
  right:0;
  transform:translate(-80%, 80%);
  cursor: pointer;
}
`
const NavMenu=styled.div`
display:flex;
align-items:center;
margin-left:-48px;

@media screen and (max-width:768px){
  display:none;
}
`

const SideBar=styled.div`
position:fixed;
height:100vh;
width:100%;
padding-top:100px;
right:${({active})=>(active ? "0":"-100%")};
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color:#fff;
background:rgba(0,0,0,.9);
transition:0.3s ease-in-out;
overflow:hidden;
z-index:998;

`