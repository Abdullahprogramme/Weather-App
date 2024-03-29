import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const circleVariants = {
  open: { width: "200px", height: "100vh", borderRadius: "0%" },
  closed: { width: "50px", height: "50px", borderRadius: "50%", transition: { duration: 0.5 } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center bg-gray-800 text-white p-4"
      style={{ zIndex: 1000 }}
      animate={isOpen ? 'open' : 'closed'}
      variants={circleVariants}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div className="absolute top-2 left-2">
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </motion.div>
      {isOpen && <Items />}
    </motion.div>
  );
};

const Items = () => (
  <motion.ul className="mt-4 space-y-4" initial={{x: '-100%'}} animate={{x: 0}} transition={{duration: 1, ease: 'easeInOut'}}>
    <li><Link to="/" className="nav-link block py-1 px-3 mt-2 rounded border border-gray-200  transition duration-200 ease-in-out" style={{borderColor: 'gray', backgroundColor: '#7AA2E3'}}>Home</Link></li>
    <li><Link to="/ForecastPage" className="nav-link block py-1 px-3 mt-2 rounded border border-gray-200 transition duration-200 ease-in-out" style={{borderColor: 'gray', backgroundColor: '#7AA2E3'}}>Forecast</Link></li>
  </motion.ul>
);

export default Navbar;
