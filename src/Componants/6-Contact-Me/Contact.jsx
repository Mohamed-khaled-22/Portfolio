import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
// react 
import { useState } from 'react';
// motion
import { motion } from "motion/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("xwpneokn");

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className='contact-section' id='contact'>
            <motion.h1 className='section-header'
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >Contact Me</motion.h1>
            <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                contact me for more information and get notified when I publish something new.</motion.p>

            <div className="content">
                <motion.form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e).then(() => {
                            setEmail("");
                            setMessage("");
                        });
                    }}
                    className='contact-form'
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='form-group'>
                        <label htmlFor='email'>Email :</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'
                            type='email'
                            name='email'
                            id='email'
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Your Message :</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id='message'
                            name='message'
                            required
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {state.succeeded && <h3 className='success-message'>Thanks for Your Message <span>❤</span></h3>}

                    <button type='submit' disabled={state.submitting} className='button'>
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </motion.form>

                <motion.div
                    className="contact-animation"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src="Image-optimized/Email/email.svg" alt="contact animation" />
                </motion.div>
            </div>
        </div>
    )
}
