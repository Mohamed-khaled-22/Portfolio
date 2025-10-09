import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faSquareLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

import './Footer.css'

export default function Footer() {
    const socialIcons = [
        { href: "https://www.facebook.com/share/14GJkYbNSvD/", icon: faFacebook, title: "Facebook" },
        { href: "https://www.instagram.com/mohamed_khaled_darwesh?igsh=MW9yOGIyeHZrcTRpYw==", icon: faInstagram, title: "Instagram" },
        { href: "https://github.com/Mohamed-khaled-22", icon: faGithub, title: "Github" },
        { href: "https://www.linkedin.com/in/mohamed-khaled-2435962bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: faSquareLinkedin, title: "Linkedin" },
        { href: "https://wa.me/+201030494237", icon: faWhatsapp, title: "Whatsapp" },
    ];

    return (
        <motion.div
            className="footer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="footer-info"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                &copy; 2025 <span>Mohamed Khaled Darwish</span>. All rights reserved.
            </motion.div>

            <motion.div
                className="social-media"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.15 }
                    }
                }}
            >
                <ul>
                    {socialIcons.map((item, index) => (
                        <motion.li
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <a target="_blank" href={item.href} title={item.title}>
                                <FontAwesomeIcon icon={item.icon} size="xl" />
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}
