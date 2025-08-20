import React from 'react';

export const Header: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                            <span className="font-bold text-accent-foreground">🌱</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">EcoWaste Solutions</h1>
                            <p className="text-sm opacity-90">Sustainable Waste Management</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="hover:text-accent transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="hover:text-accent transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="hover:text-accent transition-colors"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hover:text-accent transition-colors"
                        >
                            Contact
                        </button>
                    </nav>

                    <button className="md:hidden text-2xl">☰</button>
                </div>
            </div>
        </header>
    );
};