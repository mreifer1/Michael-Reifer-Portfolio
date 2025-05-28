import { Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "MOJK Stocks",
        description: "A full-stack application that uses Cheerio to scrape data from Yahoo.com/finance and displays information on potentially profitable stocks. Users can add stocks to their stock list, sign up, log in, and report bugs.",
        image: "/Michael-Reifer-Portfolio/projects/project1.png",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
        githubUrl: "https://github.com/mreifer1/MOJK_Stocks",
    },
    {
        id: 2,
        title: "4Chan/Reddit Clone",
        description: "Full-stack application which allows for people to create posts, comment on posts, up-vote/down-vote posts, and they are saved to a database. Users can also create accounts and login to the website.",
        image: "/Michael-Reifer-Portfolio/projects/project2.png",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
        githubUrl: "https://github.com/mreifer1/5Chan",
    },
    {
        id: 3,
        title: "Murder Mystery Project",
        description: "Text-based game which is similar to clue. The game runs through the command line and displays OOP principles. The goal of the game is to solve who commited a murder and find what they used",
        image: "/Michael-Reifer-Portfolio/projects/project3.png",
        tags: ["Object-Oriented-Programming", "Polymorphism", "Inheritance"],
        githubUrl: "https://github.com/mreifer1/Murder-Mystery-Project",
    },
    {
        id: 4,
        title: "AI in Cybersecurity for the Financial Sector",
        description: "Deep dive into the use of methods such as Machine Learning, Artificial Neural Networks, NIDs, GANs, and more.",
        image: "/Michael-Reifer-Portfolio/projects/project4.png",
        tags: ["NIDs", "GANs", "Machine Learning", "ANNs"],
        githubUrl: "https://github.com/mreifer1/Artificial-Intelligence-The-New-Tool-For-Cybersecurity-in-Finance",
    },

]

export const ProjectsSection = () => {
    return(
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span>
            </h2>


        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my projects I've worked on during my college career. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div 
                key={key} 
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-48 overflow-hidden">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        /> 
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                              {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center ">
                        <div className="flex space-x-3">
                            <a 
                            href={project.githubUrl} 
                            target="_blank"
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                            >
                              <Github size={20}/>  
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            target="_blank"
            href="https://github.com/mreifer1"
            >
              Check My Github <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
    ) 
}