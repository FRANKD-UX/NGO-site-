import React from 'react';

interface AboutProps { }

export const About: React.FC<AboutProps> = () => {
    return (
        <section id="about" className="py-20 secondary-bg">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">About EcoWaste Solutions</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We are a dedicated NGO committed to revolutionizing waste management
                        practices to create a more sustainable and environmentally conscious world.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-semibold text-primary">Our Mission</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To eliminate waste pollution and promote circular economy principles
                            through innovative programs, community education, and sustainable
                            waste management solutions that benefit both people and the planet.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Since our founding in 2015, we have diverted over 50,000 tons of waste
                            from landfills, established 200+ recycling centers, and educated
                            100,000+ individuals about sustainable practices.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-primary mb-3">🎯 Our Vision</h4>
                            <p className="text-muted-foreground">
                                A world where waste is viewed as a resource, and every community
                                has access to sustainable waste management solutions.
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-primary mb-3">💡 Our Values</h4>
                            <ul className="text-muted-foreground space-y-2">
                                <li>• Environmental Stewardship</li>
                                <li>• Community Empowerment</li>
                                <li>• Innovation & Sustainability</li>
                                <li>• Transparency & Accountability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary">50K+</div>
                        <p className="text-muted-foreground">Tons Diverted</p>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary">200+</div>
                        <p className="text-muted-foreground">Recycling Centers</p>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary">100K+</div>
                        <p className="text-muted-foreground">People Educated</p>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary">50+</div>
                        <p className="text-muted-foreground">Communities Served</p>
                    </div>
                </div>
            </div>
        </section>
    );
};