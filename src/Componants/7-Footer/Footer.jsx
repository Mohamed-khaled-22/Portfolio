import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGithub, faSquareLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import './Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-info">
                &copy; 2025 <span>Mohamed Khaled Darwish</span>. All rights reserved.
            </div>
            <div className="social-media">
                <ul>
                    <li><a target="_blank" href="https://www.facebook.com/share/14GJkYbNSvD/" title='Facebook'> <FontAwesomeIcon icon={faFacebook} size='xl' /> </a></li>
                    <li><a target="_blank" href="https://www.instagram.com/mohamed_khaled_darwesh?igsh=MW9yOGIyeHZrcTRpYw==" title='Instagram'> <FontAwesomeIcon icon={faInstagram} size='xl' /> </a></li>
                    <li><a target="_blank" href="https://github.com/Mohamed-khaled-22" title='Github'> <FontAwesomeIcon icon={faGithub} size='xl' /> </a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/mohamed-khaled-2435962bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" title='Linkedin'> <FontAwesomeIcon icon={faSquareLinkedin} size='xl' /> </a></li>
                    <li><a target="_blank" href="https://wa.me/+201030494237" title='Whatsapp'> <FontAwesomeIcon icon={faWhatsapp} size='xl' /> </a></li>
                </ul>
            </div>
        </div>

    )
}