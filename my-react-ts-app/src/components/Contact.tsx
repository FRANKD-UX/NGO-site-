import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface ContactProps { }

export const Contact: React.FC<ContactProps> = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-20 secondary-bg">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to make a difference? Contact us to learn more about our services
                        or to get involved in our mission for a sustainable future.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Address</h4>
                                        <p className="text-muted-foreground">
                                            123 Green Street, Eco District<br />
                                            Environmental City, EC 12345
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                                        📞
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Phone</h4>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                                        ✉️
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Email</h4>
                                        <p className="text-muted-foreground">info@ecowastesolutions.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                                        🕒
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary">Office Hours</h4>
                                        <p className="text-muted-foreground">
                                            Monday - Friday: 8:00 AM - 6:00 PM<br />
                                            Saturday: 9:00 AM - 4:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="follow-us-title">Follow Us</h3>
                            <div className="social-icons">
                                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon large">
                                    {/* Facebook SVG (same as header) */}
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                                        <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07C2 17.1 5.66 21.25 10.44 22v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22C18.34 21.25 22 17.1 22 12.07z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon large">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                                        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zm6.4-2.6a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon large">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                                        <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.7-1.8 3.6-1.8 3.9 0 4.6 2.6 4.6 6v7.1H20V15.1c0-2-0.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V21H9z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="icon large">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
                                        <path d="M22 5.92c-.6.27-1.24.45-1.92.53a3.36 3.36 0 0 0 1.47-1.86 6.7 6.7 0 0 1-2.12.81 3.35 3.35 0 0 0-5.7 3.05A9.5 9.5 0 0 1 3.1 4.97a3.35 3.35 0 0 0 1.04 4.47c-.5 0-.98-.15-1.4-.38v.04c0 1.6 1.12 2.94 2.6 3.24-.46.12-.95.17-1.45.06.41 1.28 1.6 2.22 3.01 2.25A6.72 6.72 0 0 1 2 19.54 9.48 9.48 0 0 0 7.29 21c5.55 0 8.59-4.6 8.59-8.59v-.39c.6-.44 1.12-.98 1.52-1.62a9.4 9.4 0 0 1-2.92.8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="form-input"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="form-input"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="services">Services Information</option>
                                        <option value="partnership">Partnership Opportunities</option>
                                        <option value="volunteer">Volunteer Information</option>
                                        <option value="support">Support</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="form-textarea"
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn btn-primary"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};