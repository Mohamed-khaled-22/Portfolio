import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "motion/react";
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

    useEffect(() => {
        const root = window.document.body;
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
    }, [theme]);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className='logo-div'><span className='logo'>ELASY</span></div>
            <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon className="toggle-menu" size='lg' icon={faBars} />
            </div>
            <nav>
                <ul>
                    <li className="link"><a href="#about">About Me</a></li>
                    <li className="link"><a href="#skills">Skills</a></li>
                    <li className="link"><a href="#projects">Projects</a></li>
                    <li className="link"><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>

            {/* Toggle Theme */}
            <div className="mood" onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
            }}>
                <AnimatePresence mode="wait">
                    {theme === 'light' ? (
                        <motion.div
                            key="moon"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FontAwesomeIcon className='mood-icon' size='lg' icon={faMoon} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FontAwesomeIcon className='mood-icon' size='lg' icon={faSun} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {isOpen && <div className="modal">
                <ul>
                    <li className="close-menu">
                        <FontAwesomeIcon size='xl' onClick={() => setIsOpen(!isOpen)} icon={faXmark} />
                    </li>
                    <li className="link"><a onClick={() => setIsOpen(!isOpen)} href="#about">About Me</a></li>
                    <li className="link"><a onClick={() => setIsOpen(!isOpen)} href="#skills">Skills</a></li>
                    <li className="link"><a onClick={() => setIsOpen(!isOpen)} href="#projects">Projects</a></li>
                    <li className="link"><a onClick={() => setIsOpen(!isOpen)} href="#contact">Contact Me</a></li>
                </ul>
            </div>}
        </motion.header>
    )
}
