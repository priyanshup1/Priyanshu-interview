import './Navbar.css'

import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <>
        <header className="text-gray-100 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <button type="button" className="btn btn-outline-dark">My Portfolio</button>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/home" className="mr-3 hover:text-gray-900">HOME</Link>
                    <Link to="/about" className="mr-3 hover:text-gray-900">ABOUT</Link>
                    <Link to="/project" className="mr-3 hover:text-gray-900">PROJECT</Link>
                    <Link to="/contact" className="mr-3 hover:text-gray-900">CONTACT</Link>
                </nav>
            </div>
        </header>

    </>
  )
}
