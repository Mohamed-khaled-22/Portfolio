
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
// react 
import { useState } from 'react';

export default function Contact() {

    const [state, handleSubmit] = useForm("xwpneokn");

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className='contact-section' id='contact'>

            <h1 className='section-header'>Contact Me</h1>
            <p>contact me for more information and get nolified when i publish somthing new.</p>

            <div className="content">

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e).then(() => {
                        setEmail("");
                        setMessage("");
                    });
                }} className='contact-form'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email :</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' type='email' name='email' id='email' required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Your Message :</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} id='message' name='message' required ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    {state.succeeded && <h3 className='success-message'>Thanks for Your Message <span>❤</span></h3>}
                    <button type='submit' disabled={state.submitting} className='button'>
                        {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                </form>

                <div className="contact-animation">
                    <img src="Image/email.svg" alt="" />
                </div>

            </div>

        </div>
    )
}
