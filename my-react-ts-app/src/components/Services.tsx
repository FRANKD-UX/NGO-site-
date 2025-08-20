import React from 'react';

export const Services: React.FC = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services = [
        {
            icon: '🏠',
            title: 'Residential Waste Collection',
            description: 'Door-to-door waste collection services for households with proper segregation and recycling guidance.',
            features: ['Scheduled pickups', 'Waste segregation training', 'Recycling guidance', 'Compost programs']
        },
        {
            icon: '🏢',
            title: 'Commercial Waste Management',
            description: 'Comprehensive waste solutions for businesses, offices, and industrial facilities.',
            features: ['Bulk waste collection', 'Document shredding', 'E-waste disposal', 'Compliance reporting']
        },
        {
            icon: '🎓',
            title: 'Educational Programs',
            description: 'Community workshops and school programs to promote environmental awareness and sustainable practices.',
            features: ['School workshops', 'Community seminars', 'Online resources', 'Certification programs']
        },
        {
            icon: '⚡',
            title: 'E-Waste Recycling',
            description: 'Safe disposal and recycling of electronic waste including computers, phones, and appliances.',
            features: ['Data destruction', 'Component recovery', 'Precious metal extraction', 'Certified disposal']
        },
        {
            icon: '🌱',
            title: 'Composting Solutions',
            description: 'Organic waste processing and composting services to create nutrient-rich soil amendments.',
            features: ['Organic waste collection', 'Compost production', 'Soil testing', 'Garden consulting']
        },
        {
            icon: '🔬',
            title: 'Waste Audits',
            description: 'Comprehensive waste analysis to help organizations optimize their waste management strategies.',
            features: ['Waste stream analysis', 'Cost optimization', 'Sustainability reporting', 'Custom solutions']
        }
    ];

    return (
        <section id="services" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive waste management solutions tailored to meet the needs of
                        individuals, businesses, and communities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={scrollToContact}
                                className="mt-6 w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Email for Details
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-primary/10 p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Need a Custom Solution?</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            We understand that every organization has unique waste management needs.
                            Our team of experts can design custom solutions that fit your specific requirements.
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Request Information via Email
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};