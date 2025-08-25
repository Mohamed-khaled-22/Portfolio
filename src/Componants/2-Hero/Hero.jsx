import './Hero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faGithub, faSquareLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Hero() {

    // دالة لتحميل السيرة الذاتية
    const downloadCV = () => {
        // إنشاء رابط تحميل
        const link = document.createElement('a');
        link.href = '/Image/Hero.png'; // استبدل هذا بالمسار الصحيح لملفك
        link.download = 'Mohamed_Khaled_CV.png'; // اسم الملف عند التحميل
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // دالة لعرض السيرة الذاتية في نافذة جديدة
    const viewCV = () => {
        window.open('/Image/Hero.png', '_blank');
    };


    return (
        <div className="hero-section">

            <motion.div
                className="left-section"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
                viewport={{ once: true }}
            >
                <h1>Front-End React Developer<br />Crafting Clean & Efficient User Interfaces</h1>

                <p>
                    "I'm Mohamed Khaled Darwish, a Front-End Developer passionate about
                    building modern, responsive, and user-friendly interfaces, with strong
                    expertise in JavaScript, React, and UI/UX."
                </p>

                <div className="social-media">
                    <ul>
                        <li><a target='_blank' href="https://www.facebook.com/share/14GJkYbNSvD/" title='Facebook'> <FontAwesomeIcon icon={faFacebook} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://www.instagram.com/mohamed_khaled_darwesh?igsh=MW9yOGIyeHZrcTRpYw==" title='Instagram'> <FontAwesomeIcon icon={faInstagram} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://github.com/Mohamed-khaled-22" title='Github'> <FontAwesomeIcon icon={faGithub} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://www.linkedin.com/in/mohamed-khaled-2435962bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title='Linkedin'> <FontAwesomeIcon icon={faSquareLinkedin} size='xl' /> </a></li>
                        <li><a target='_blank' href="https://wa.me/+201030494237" title='Whatsapp'> <FontAwesomeIcon icon={faWhatsapp} size='xl' /> </a></li>
                    </ul>
                </div>


                <div className="download">
                    <button className="view-cv-btn" onClick={viewCV}>
                        <FontAwesomeIcon icon={faEye} /> View CV
                    </button>
                    <button className="download-cv-btn" onClick={downloadCV}>
                        <FontAwesomeIcon icon={faDownload} /> Download CV
                    </button>
                </div>
            </motion.div>

            <motion.div
                className="right-section"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 50, damping: 15 }}
                viewport={{ once: true }}
            >
                <div className="avatar">
                    <a href="/Image/Hero.png" target='_blank'>
                        <img src="/Image/Hero.png" alt="not found" />
                    </a>
                    <FontAwesomeIcon className='check-icon' size='xl' icon={faCircleCheck} />
                </div>
            </motion.div>

        </div>
    );
}