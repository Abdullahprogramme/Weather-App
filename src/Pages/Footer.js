import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => (
    <footer className="fixed bottom-0 mt-2 border-t-2 border-[#222831] text-center font-bold text-[#7AA2E3] p-0 flex flex-row justify-center items-center bg-[#222831] mx-auto w-screen space-x-20"
        style={{ fontFamily: 'Pacifico, cursive', zIndex: '1000'}}
    >
        <p>&copy; 2021 Weather App</p>
        <a className="flex flex-row text-[#7AA2E3]" href="https://www.linkedin.com/in/abdullahtariq78/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} style={{ marginRight: '3px' }}/> LinkedIn
        </a>
    </footer>
);

export default Footer;
