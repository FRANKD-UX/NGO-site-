
interface HeroProps { }

export const Hero: React.FC<HeroProps> = () => {
    const scrollToContact = (): void => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen hero-white flex items-center">
            <div className="container py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                            Transforming Waste into a
                            <span className="text-accent"> Sustainable Future</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Join us in our mission to create cleaner communities through innovative
                            waste management solutions that protect our planet for future generations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToContact}
                                className="btn btn-primary"
                            >
                                Contact Us for Details
                            </button>
                            <button
                                onClick={scrollToContact}
                                className="btn btn-secondary"
                            >
                                Get Involved
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="globe-container">
                            <div className="globe"></div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-card rounded-lg shadow-md">
                        <div className="text-4xl mb-4">♻️</div>
                        <h3 className="text-xl font-semibold mb-2">Recycling Programs</h3>
                        <p className="text-muted-foreground">
                            Comprehensive recycling solutions for households and businesses
                        </p>
                    </div>

                    <div className="text-center p-6 bg-card rounded-lg shadow-md">
                        <div className="text-4xl mb-4">🌍</div>
                        <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                        <p className="text-muted-foreground">
                            Reducing carbon footprint through sustainable waste practices in schools and communities
                        </p>
                    </div>

                    <div className="text-center p-6 bg-card rounded-lg shadow-md">
                        <div className="text-4xl mb-4">👥</div>
                        <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
                        <p className="text-muted-foreground">
                            Educating and empowering communities for environmental action through our workshops and events
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};