import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workshop.jpg";
import { ArrowRight, Palette, Sprout } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex gap-4 justify-center mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <Palette className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
              <Sprout className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Talleres de Pintura de Macetas
            <br />
            <span className="text-primary-glow">& Transplante de Plantas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Descubre tu creatividad mientras aprendes a cuidar tus plantas. Experiencias únicas para adultos y familias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="accent"
              onClick={() => scrollToSection('planes')}
              className="text-lg"
            >
              Ver Planes
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('inscripcion')}
              className="text-lg bg-white/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-white hover:text-primary"
            >
              Inscribirse Ahora
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-primary-foreground mb-2">Todos los Materiales</h3>
              <p className="text-primary-foreground/80 text-sm">Incluimos todo lo necesario para tu experiencia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-primary-foreground mb-2">Grupos Pequeños</h3>
              <p className="text-primary-foreground/80 text-sm">Atención personalizada en cada taller</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-semibold text-primary-foreground mb-2">Para Todos</h3>
              <p className="text-primary-foreground/80 text-sm">No necesitas experiencia previa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
