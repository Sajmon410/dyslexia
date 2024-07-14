import React from 'react';
import './navbar.css';
import { motion } from 'framer-motion';
const colors = [
    'red', 'blue', 'green', 'orange', 'purple', 'brown', 'violet', 'orange'
  ];
  
  const ColorfulText = ({ text }) => {
    return (
      <div>
        {text.split('').map((char, index) => (
          <span key={index} style={{ color: colors[index % colors.length],
            fontSize: "90px",
            fontWeight: '900'
           }}>
            {char}
          </span>
        ))}
      </div>
    );
  };
  const myText = "DAR DISLEKSIJE";
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="content">
                <div className="naslov"></div>
                <motion.div
            whileHover={{  rotate: 5, scale: 1.15  }}
            whileTap={{}}
            className="logo"
            animate={{ rotate: 0.1 }}
          >
            <ColorfulText  text={myText} />
            </motion.div>
            </div>
            <p className='button'>Šta je disleksija?</p>
            <p className='button'> O nama</p>
        </div>
    );
};
export default Navbar;