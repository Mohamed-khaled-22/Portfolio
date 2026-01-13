"use client";
import "./About.css";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            className="about-section"
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1
                className="section-header"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                about me
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Hi, I’m Mohamed Khaled, a passionate Front-End Developer specialized in
                building modern, responsive, and user-friendly interfaces. With solid
                experience in JavaScript, HTML, CSS, Bootstrap, Tailwind, Sass, React,
                Redux, and Next.js, I craft clean and efficient code while focusing on
                creating smooth UI/UX experiences. I’m always eager to learn, grow, and
                adapt to new technologies in order to deliver outstanding results.
                Beyond coding, I excel at problem-solving, teamwork, and effective
                communication, which help me turn ideas into reality. My goal is to
                design and develop unique digital experiences that not only look great
                but also bring real value to people and businesses.
            </motion.p>
        </motion.div>
    );
}
