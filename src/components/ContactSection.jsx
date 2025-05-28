import { Handshake, Linkedin, Mail, MapPin, Phone, Github, Send } from "lucide-react"
// import { cn } from '@/lib/utils';

export const ContactSection = () => {
    return (
        <section id="contact"className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to reach out.
                    I'm always open to new opportunities.
                </p>

                <div className="flex justify-center">
                    <div className="w-full max-w-xl space-y-8 text-center">
                            <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-12">
                            <div className="flex items-start space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                    href="mailto:Mjreifer1@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Mjreifer1@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                    href="tel:+1XXXXXXXXXX" 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +1 (XXX) XXX-XXXX
                                    </a>
                                </div>
                            </div> */}
                            <div className="flex items-start space-x-4 justify-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Towson, Maryland
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/michael-reifer" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://app.joinhandshake.com/profiles/uqb785" target="_blank">
                                    <Handshake />
                                </a>
                                <a href="https://github.com/mreifer1">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}