import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import photo1 from "./azbuka.png"

const Hero = () => {
    return(
        <div className="hero">
           <img src={photo1} alt="Citanje" className='slika'/>
            
        </div>
    );
};
export default Hero;