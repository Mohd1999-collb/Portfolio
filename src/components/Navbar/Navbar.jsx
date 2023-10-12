import React, { useState } from 'react'
import { DiCssdeck } from "react-icons/di"
import { FaBars } from 'react-icons/fa'
import { Bio } from '../../data/constants';
import { Nav, NavContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubButton, Span, MobileMenu, MobileMenuLink } from './NavbarStyle'
import { useTheme } from '@emotion/react'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open)
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        {/* Navbar left logo */}
        <NavLogo to="/">
          <a style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            cursor: "pointer"
          }}>
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>

          {/* For mobile menu */}
        <MobileIcon>
          <FaBars
            onClick={() => { setOpen(!open) }}
          />
        </MobileIcon>

          {/* Navbar middle items */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>

          {/* Navbar right gitnub container */}
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank" >Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>

      {/* Condition of mobile menu when it is open or not */}
      {
        open && (
        <MobileMenu open={open}>

          <MobileMenuLink href="#about" onClick={() => {
            setOpen(!open)
          }}>About</MobileMenuLink>

          <MobileMenuLink href='#skills' onClick={() => {
            setOpen(!open)
          }}>Skills</MobileMenuLink>

          <MobileMenuLink href='#experience' onClick={() => {
            setOpen(!open)
          }}>Experience</MobileMenuLink>

          <MobileMenuLink href='#projects' onClick={() => {
            setOpen(!open)
          }}>Projects</MobileMenuLink>

          <MobileMenuLink href='#education' onClick={() => {
            setOpen(!open)
          }}>Education</MobileMenuLink>

          <GithubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">
            Github Profile</GithubButton>

        </MobileMenu>
        )}
    </Nav>
  )
}

export default Navbar