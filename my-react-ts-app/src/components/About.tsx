import React from 'react';

interface AboutProps { }

export const About: React.FC<AboutProps> = () => {
    return (
        <section id="about" className="py-20 secondary-bg">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">About EcoWaste Solutions</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We are an NPO in South Afirca dedicated to providing services to the communities in 
                        Gauteng our aim is to achive the 5 R's in waste management: Reduce, Reuse, Recycle, Recover, and Refuse.
                        Our goal is to create a cleaner, greener future for all through sustainable waste management practices.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-semibold text-primary">Our Mission</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To alleviate the waste crisis in South Africa by providing innovative,
                            sustainable waste management solutions that empower communities and protect the environment.
                            through education, recycling, and community engagement. 
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We strive to create a circular economy where waste is minimized, resources are conserved,
                            and communities thrive through responsible waste practices.Our motto Proverbs 22:6
                            Trainup a child in the way he should go, and when he is old he will not depart from it.
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
                                <li>• Education and youth development</li>
                                <li>• Transparency & Accountability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};