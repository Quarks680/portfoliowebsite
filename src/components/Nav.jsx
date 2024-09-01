import React from 'react'
import { NavBar } from './Navbar'

function Nav() {
  const links = [{link: "/#home", title: "Home"}, {link: "/about", title: 'About'},{link: "/project", title: 'Project'},{link: "/#contact", title: 'Contact'}]
  return (
    <div className="flex fixed z-[5000] justify-center items-end bottom-6 left-1/2 transform -translate-x-1/2 ">
        <NavBar className="text-white" tabs={links} />
    </div>
  )
}

export default Nav