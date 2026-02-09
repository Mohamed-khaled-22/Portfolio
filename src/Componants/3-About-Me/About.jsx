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
                Hi, I’m Mohamed Khaled, a Front-End Developer with over 2 years of experience building modern, responsive, and high-performance web interfaces.
                I specialize in JavaScript, HTML, CSS, Bootstrap, Tailwind, Sass, React, Redux, and Next.js.
                My unique strength is turning complex ideas into fast, pixel-perfect, and highly interactive user experiences.
                I focus on writing clean, scalable, and maintainable code while optimizing performance and usability.
                I have a strong eye for UI/UX details, ensuring designs feel smooth, modern, and intuitive.
                I’m a fast learner who adapts quickly to new technologies and industry trends.
                Beyond coding, I bring strong problem-solving, teamwork, and communication skills.
                My goal is to build digital products that stand out visually, perform efficiently, and deliver real business value.
            </motion.p>
        </motion.div>
    );
}
