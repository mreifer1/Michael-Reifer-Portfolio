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
        title: "EHIREUS",
        description: "Fully functional database application for the needs that the company Ehireus had (for academic purposes). The application supported CRUD operations using a simple GUI for all types of data the company needed to record (i.e.,timesheets, clients, employees).",
        image: "/Michael-Reifer-Portfolio/projects/project3.png",
        tags: ["Java", "SQL", "MySQL", "Java Swing", "Git"],
        githubUrl: "https://github.com/mreifer1/EHIREUS",
    },
    {
        id: 4,
        title: "Rust LOLCODE Compiler",
        description: "Developed a fully functional compiler for a made-up LOLCODE programming language that was similar to HTML. Programmed in Rust, the compiler would take in a .lol file and convert it to HTML and open the converted file in the browser.",
        image: "/Michael-Reifer-Portfolio/projects/project4.png",
        tags: ["Rust", "Git"],
        githubUrl: "https://github.com/mreifer1/RUST_LOLCODE_COMPILER",
    },
    {
        id: 5,
        title: "Astronomy Diary",
        description: "Android app made in Jetpack Compose allowing CRUD operations and using SQLite as a database. Astronomy Diary also allows the user to find astronomy data of a location of their choice. Users can perform CRUD operations to maintain their astronomy entries.",
        image: "/Michael-Reifer-Portfolio/projects/project5.png",
        tags: ["Kotlin", "Jetpack Compose", "Andriod Studio", "Git", "Bitbucket"],
        githubUrl: "https://github.com/mreifer1/AstronomyDiary",
    },

]

export const ProjectsSection = () => {
    return(
      <section id="projects" className="py-24 px-4 relative">D
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