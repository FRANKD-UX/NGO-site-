import React from 'react';
import wmfLogo from '../assets/wmf-logo.jpeg'
interface HeaderProps { }

export const Header: React.FC<HeaderProps> = () => {
    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center overflow-hidden">
                            <img 
                            src={wmfLogo}
                            alt="WMF Logo" 
                            className="w-full h-full object-cover"
                        />
                            </div>
                        <div>
                            <h1 className="text-xl font-bold">Waste Management Foundation</h1>
                            <p className="text-sm opacity-90">Sustainable Waste Management</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="opacity-90 transition-opacity cursor-pointer"
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                padding: '0.5rem',
                                borderRadius: '0.25rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="opacity-90 transition-opacity cursor-pointer"
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                padding: '0.5rem',
                                borderRadius: '0.25rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="opacity-90 transition-opacity cursor-pointer"
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                padding: '0.5rem',
                                borderRadius: '0.25rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="opacity-90 transition-opacity cursor-pointer"
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                padding: '0.5rem',
                                borderRadius: '0.25rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                        >
                            Contact
                        </button>
                    </nav>

                    <button className="md:hidden text-2xl bg-transparent border-none text-primary-foreground">
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};