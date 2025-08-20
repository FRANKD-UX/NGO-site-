import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                                <span className="font-bold text-accent-foreground">🌱</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">EcoWaste Solutions</h3>
                                <p className="text-sm opacity-90">Sustainable Waste Management</p>
                            </div>
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed max-w-md">
                            Transforming waste management practices to create a sustainable future
                            for our communities and planet. Join us in making a difference.
                        </p>
                        <div className="flex space-x-4">
                            <button className="w-8 h-8 bg-accent rounded text-accent-foreground hover:bg-accent/90 transition-colors">
                                f
                            </button>
                            <button className="w-8 h-8 bg-accent rounded text-accent-foreground hover:bg-accent/90 transition-colors">
                                t
                            </button>
                            <button className="w-8 h-8 bg-accent rounded text-accent-foreground hover:bg-accent/90 transition-colors">
                                in
                            </button>
                            <button className="w-8 h-8 bg-accent rounded text-accent-foreground hover:bg-accent/90 transition-colors">
                                ig
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Stay Updated</h4>
                        <p className="text-sm opacity-80 leading-relaxed">
                            Subscribe to our newsletter for the latest updates on sustainable waste management
                            and environmental initiatives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-3 text-sm text-foreground bg-background rounded-lg border-0 focus:ring-2 focus:ring-accent"
                            />
                            <button className="bg-accent text-accent-foreground px-6 py-3 text-sm rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
                            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
                            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</a>
                        </div>
                        <p className="text-sm opacity-80">
                            © 2024 EcoWaste Solutions. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};