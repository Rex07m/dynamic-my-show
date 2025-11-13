import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Github, Linkedin, Code, Palette, Zap, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { icon: Code, title: "Web Development", desc: "Building responsive, modern web applications with cutting-edge technologies" },
    { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful, intuitive interfaces that users love" },
    { icon: Zap, title: "Performance", desc: "Optimizing for speed and delivering exceptional user experiences" },
  ];

  const projects = [
    { title: "E-Commerce Platform", tech: ["React", "Node.js", "MongoDB"], desc: "Full-stack e-commerce solution with payment integration" },
    { title: "Portfolio CMS", tech: ["Next.js", "TypeScript", "Prisma"], desc: "Content management system for creative professionals" },
    { title: "Analytics Dashboard", tech: ["React", "D3.js", "Express"], desc: "Real-time data visualization and analytics platform" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">Portfolio</h1>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className={`container mx-auto px-6 relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-6 animate-fade-in" variant="outline">Available for freelance</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-gradient">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Full-Stack Developer & Creative Designer crafting exceptional digital experiences
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact Me
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="animate-fade-in">
              I'm a passionate developer with a keen eye for design and a love for creating elegant solutions 
              to complex problems. With years of experience in both front-end and back-end development, 
              I bring ideas to life through clean code and beautiful interfaces.
            </p>
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community. I believe in continuous learning and 
              staying at the forefront of web development trends.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className="p-8 bg-card border-border card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden bg-card border-border card-hover group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Code className="h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind? Let's create something amazing together.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <Button size="lg" variant="outline" className="group">
              <Mail className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              Email Me
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Linkedin className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Your Name. Built with passion and lots of coffee.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
