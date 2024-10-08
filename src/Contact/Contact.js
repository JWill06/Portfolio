import React, {  useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import GitHub from '../images/icons8-github.svg'
import linkedIn from '../images/icons8-linkedin.svg'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false); 

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        setIsLoading(true); 
        emailjs.send("service_i5sxfc9", "template_pl5bb77", templateParams, "GtNmJ_v794nVv3ByW")
            .then((res) => {
                alert('SUCCESS!', res);
                setName('');
                setEmail('');
                setMessage('');
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send!');
                setIsLoading(false); 
            });
    };

    return (
        <div className='Contact'>
            <h2>Let's connect!</h2>
            <div className='accounts'>
            <a href="https://github.com/JWill06">
                <img  className='socials' src={GitHub} alt="Link to GitHub profile" />
            </a>
            <a href='https://www.linkedin.com/in/jordan-williamson-a079b3271/'>
                <img className='socials' src={linkedIn} alt="Link to linkedIn profile" />
            </a>
            </div>
            <h2 className='contactHeader'>Or feel free to contact me!</h2>
            <div className='formWrapper'>
            <form onSubmit={sendEmail} className='emailForm'>
                <label htmlFor="name"><strong>Name:</strong></label>
                <input 
                type="text" 
                placeholder='Your Name'
                name="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
                <label htmlFor="email"><strong>Email:</strong></label>
                <input 
                type="email" 
                placeholder='Your Email'
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
                <label htmlFor="message"><strong>Message:</strong></label>
                <textarea 
                placeholder='Your Message'
                name="message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required></textarea>
                <button type="submit" className='submitButton' disabled={isLoading}>Send Message</button>
            </form>

            </div>


        </div>
    )
}

export default Contact