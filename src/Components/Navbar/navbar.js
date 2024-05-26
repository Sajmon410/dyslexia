import React from 'react';
import './navbar.css';
import { motion } from 'framer-motion';
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="content">
              <p className='naslov'> Dar Disleksije</p>
              <p className='button'>Šta je disleksija?</p>
              <p className='button'> O nama</p>
            </div>
        </div>
    );
};
export default Navbar;