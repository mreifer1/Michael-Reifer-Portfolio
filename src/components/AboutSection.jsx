import { Code, Server, Briefcase } from 'lucide-react';

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
               About <span className="text-primary"> Me</span> 
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">
                        Passionate Full-Stack Developer
                  </h3>

                  <p className="text-muted-foreground">
                    I'm a junior at Towson University, and I'm getting my bachelor's in computer science. 
                    I will be graduating in May 2026, and I am interested in full-stack development. 
                    I'm open to any opportunities in the field.
                  </p>

                  <p className="text-muted-foreground">
                    I'm eager to learn and explore new technologies in web development. 
                    I'm constantly expanding my skill set and never shy away from tackling new challenges.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>

                    <a href="../Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        Download Resume
                    </a>
                  </div>
                </div>

                <div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating dynamic web applications with modern technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Server className="h-6 w-6 text-primary"/>
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-semibold text-lg">Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        Building APIs using the Express framework within JavaScript (Node.js).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className='text-left'>
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading class projects from creation to delivery using agile methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}