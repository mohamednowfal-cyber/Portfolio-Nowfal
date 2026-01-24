import { FormEvent, useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { SectionTitle } from '../components/section-title.component';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const formData = new FormData(formRef.current);

            // Using Formspree for reliable email delivery to muhmednowfal@gmail.com
            const response = await fetch('https://formspree.io/f/xykeoebp', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                formRef.current.reset();

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section
            className='contact container'
            id='contact'
        >
            <div>
                <SectionTitle
                    title='Get In'
                    subTitle='TOUCH'
                />
            </div>
            <p className='contact-subtitle'>
                I am always open to discussing potential collaborations, innovative projects, and professional opportunities that align with forward-thinking visions.
            </p>
            <div className='contact-content'>
                <div className='contact-cards'>
                    <a
                        href='mailto:muhmednowfal@gmail.com'
                        className='contact-card contact-card-email'
                        aria-label='email'
                    >
                        <IoMailOutline className='contact-icon' />
                        <div className='contact-card-content'>
                            <p className='contact-label'>Email</p>
                            <p className='contact-value'>muhmednowfal@gmail.com</p>
                        </div>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/mohamed-nowfal-m-0941b1378/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='contact-card contact-card-linkedin'
                        aria-label='linkedin'
                    >
                        <FaLinkedinIn className='contact-icon' />
                        <div className='contact-card-content'>
                            <p className='contact-label'>LinkedIn</p>
                            <p className='contact-value'>linkedin.com/in/mohamed-nowfal-m-0941b1378</p>
                        </div>
                    </a>
                    <a
                        href='https://github.com/mohamednowfal-cyber'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='contact-card contact-card-github'
                        aria-label='github'
                    >
                        <FaGithub className='contact-icon' />
                        <div className='contact-card-content'>
                            <p className='contact-label'>GitHub</p>
                            <p className='contact-value'>github.com/mohamednowfal-cyber</p>
                        </div>
                    </a>
                </div>
                <div className='contact-form-container'>
                    <form
                        ref={formRef}
                        className='contact-form'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type='text'
                            name='user_name'
                            placeholder='Your Name'
                            className='contact-input'
                            required
                            disabled={isSubmitting}
                        />
                        <input
                            type='email'
                            name='user_email'
                            placeholder='Your Email'
                            className='contact-input'
                            required
                            disabled={isSubmitting}
                        />
                        <input
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            className='contact-input'
                            disabled={isSubmitting}
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            className='contact-textarea'
                            rows={6}
                            required
                            disabled={isSubmitting}
                        ></textarea>
                        {submitStatus === 'success' && (
                            <p className='form-message form-success'>Sent!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className='form-message form-error'>Failed to send message. Please try again.</p>
                        )}
                        <button
                            type='submit'
                            className='contact-submit'
                            disabled={isSubmitting}
                        >
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
            <footer className='contact-footer'>
                <p>© 2025 Mohamed Nowfal. Designed and developed with a focus on performance, usability, and modern web standards.</p>
            </footer>
        </section>
    );
};
