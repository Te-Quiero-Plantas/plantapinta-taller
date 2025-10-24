import logo from "@/assets/logo.webp";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={logo} 
              alt="Te Quiero Plantas" 
              className="h-16 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('tipos-talleres')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Talleres
            </button>
            <button 
              onClick={() => scrollToSection('planes')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Planes
            </button>
            <button 
              onClick={() => scrollToSection('inscripcion')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inscríbete
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};