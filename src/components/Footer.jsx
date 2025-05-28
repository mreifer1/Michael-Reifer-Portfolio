import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return(
        <section className="py-6 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground px-2"> 
            </p>
            
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20}/>
            </a>
        </section>
    )
}