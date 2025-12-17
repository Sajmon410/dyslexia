import React from 'react';
import './navbar.css';
import { motion } from 'framer-motion';
const colors = [
    'red', 'blue', 'green', 'orange', 'purple', 'brown', 'violet', 'orange'
  ];
  
  const handleClick = () => {
    const element = document.getElementById("disleksija");

    if (element) {
      const yOffset = -0;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior:"smooth" });
    }}
  const ColorfulText = ({ text }) => {
    return (
      <div>
        {text.split('').map((char, index) => (
          <span key={index} style={{ color: colors[index % colors.length],
            fontSize: "70px",
            fontWeight: '900'
           }}>
            {char}
          </span>
        ))}
      </div>
    );
  };
  const myText = "Jelena Radosavljevic";
const Navbar = () => {
    return(
        <div className="navbar">
            <ul className='buttons'>
            <li><p className='button' onClick={handleClick}>Šta je disleksija?</p></li>
            <li><p className='button' onClick={handleClick}>Koji je cilj programa?</p></li>
            <li> <motion.div
            whileHover={{  rotate: 5, scale: 1.15  }}
            whileTap={{}}
            className="logo"
            animate={{ rotate: 0.1 }}
          >
            <ColorfulText  text={myText} />
            </motion.div>
            </li>
            <li><p className='button' onClick={handleClick}>O programu</p></li>
            <li><p className='button' onClick={handleClick}>Kome je program namenjen?</p></li>
           
            
            </ul>
            </div>
     
    );
};
export default Navbar;