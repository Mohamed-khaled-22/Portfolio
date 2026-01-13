import './Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faGithub, faSquareLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Hero() {

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = import.meta.env.BASE_URL + 'CV/Mohamed-Khaled-CV.pdf';
        link.download = 'Mohamed_Khaled_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const viewCV = () => {
        window.open(import.meta.env.BASE_URL + 'CV/Mohamed-Khaled-CV.pdf', '_blank');
    };

    const container = {
        hidden: { opacity: 0, x: -100 },
        show: {
            opacity: 1, x: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
                staggerChildren: 0.3
            }
        }
    };

    const itemFadeUp = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
    };

    return (
        <div className="hero-section">


            <motion.div
                className="left-section"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.h1 variants={itemFadeUp}>
                    Front-End React Developer<br />Crafting Clean & Efficient User Interfaces
                </motion.h1>

                <motion.p variants={itemFadeUp}>
                    "I'm Mohamed Khaled Darwish, a Front-End Developer passionate about
                    building modern, responsive, and user-friendly interfaces, with strong
                    expertise in JavaScript, React, and UI/UX."
                </motion.p>

                <motion.div variants={itemFadeUp} className="social-media">
                    <ul>
                        <li><a target='_blank' href="https://www.facebook.com/share/14GJkYbNSvD/" title='Facebook'> <FontAwesomeIcon icon={faFacebook} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://www.instagram.com/mohamed_khaled_darwesh?igsh=MW9yOGIyeHZrcTRpYw==" title='Instagram'> <FontAwesomeIcon icon={faInstagram} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://github.com/Mohamed-khaled-22" title='Github'> <FontAwesomeIcon icon={faGithub} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://www.linkedin.com/in/mohamed-khaled-2435962bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title='Linkedin'> <FontAwesomeIcon icon={faSquareLinkedin} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://wa.me/+201030494237" title='Whatsapp'> <FontAwesomeIcon icon={faWhatsapp} size='xl' /> </a></li>
                    </ul>
                </motion.div>

                <motion.div variants={itemFadeUp} className="download">
                    <button className="view-cv-btn" onClick={viewCV}>
                        <FontAwesomeIcon icon={faEye} /> View CV
                    </button>
                    <button className="download-cv-btn" onClick={downloadCV}>
                        <FontAwesomeIcon icon={faDownload} /> Download CV
                    </button>
                </motion.div>
            </motion.div>


            <motion.div
                className="right-section"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="avatar">
                    <a href={import.meta.env.BASE_URL + "Image-optimized/Hero/Hero.jpg"} target='_blank'>
                        <motion.img
                            src={import.meta.env.BASE_URL + "Image-optimized/Hero/Hero.jpg"}
                            alt="Hero"
                        />
                    <FontAwesomeIcon className='check-icon' size='lg' icon={faCircleCheck} />
                    </a>
                </div>
            </motion.div>

        </div>
    );
}
