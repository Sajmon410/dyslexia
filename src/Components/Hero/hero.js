import React from 'react';
import './hero.css';
import { motion } from 'framer-motion';
import photo1 from "./azbuka.png"

const Hero = () => {
    return(
        <div className="hero">
           <img src={photo1} alt="Citanje" className='slika'/>
           <div class="centered">Disleksija nije složena.<br/> Ona je sastavljena iz jednostavnih delova<br/> sa kojima se može raditi korak po korak.<br/>
            U osnovi disleksije je dar.
            <br/>-Ron Dejvis
           </div>
        </div>
    );
};
export default Hero;