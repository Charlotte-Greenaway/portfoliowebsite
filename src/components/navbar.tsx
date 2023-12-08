"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Link as ScrollLink } from 'react-scroll';
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems =  [
        {
          navItem: "About Me",
          navLink: "aboutMe",
        },
        {
          navItem: "Projects",
          navLink: "projects",
        },
        {
            navItem: "Contact",
            navLink: "contact",
          },
      ]


  return (
    <header className="text-white ">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="text-white "
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-black"
          />
          <NavbarBrand>
          <ScrollLink 
              to="/" 
              smooth={true} 
              duration={500}
              >
            <h1 className="sm:h-6 font-bold text-black brand">CHARLOTTE GREENAWAY</h1>
            </ScrollLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className={`hidden sm:flex gap-4`}
          justify="center"
        >
          <NavbarItem >

              <ScrollLink 
              to="aboutMe" 
              smooth={true} 
              duration={500}
              className="relative cursor-pointer inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity" 
              >
              About Me
              </ScrollLink>
          </NavbarItem>
          <NavbarItem >

              <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="relative cursor-pointer inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity" 
              >
              Projects
              </ScrollLink>

          </NavbarItem>
          <NavbarItem >

              <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="relative inline-flex cursor-pointer items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity" 
              >
              Contact
              </ScrollLink>

          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
          <a href="https://github.com/Charlotte-Greenaway" target="_blank" rel="noopener noreferrer" className="text-black hover:text-grey-400 mx-4">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
          </NavbarItem>
          <NavbarItem className=" hidden sm:block">
          <a href="https://www.linkedin.com/in/charlotte-greenaway-777140183/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-grey-400 mx-4">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
          </NavbarItem>

        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                size="lg"
              >
                 <ScrollLink 
              to={item.navLink} 
              smooth={true} 
              duration={500} 
              >
                {item.navItem}
                </ScrollLink>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default NavBar;
