import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Wine, Sprout, Heart } from "lucide-react";
import { useWorkshop } from "@/contexts/WorkshopContext";

export const WorkshopTypes = () => {
  const { selectedWorkshop, setSelectedWorkshop } = useWorkshop();

  const handleSelectWorkshop = (type: "family" | "adults") => {
    setSelectedWorkshop(type);
    setTimeout(() => {
      const element = document.getElementById('que-incluye');
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="tipos-talleres" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nuestros Talleres
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige la experiencia perfecta para ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className={`hover:shadow-soft transition-all duration-300 ${
            selectedWorkshop === 'family' ? 'border-primary border-2 shadow-soft' : ''
          }`}>
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Taller Padres + Hijos</CardTitle>
              <CardDescription className="text-base">
                Para niños desde 4 años en adelante
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 text-center">
                Una experiencia perfecta para compartir en familia. Padres e hijos aprenderán juntos
                a pintar macetas y transplantar plantas, creando recuerdos únicos mientras desarrollan
                su creatividad.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2 text-foreground">Incluye:</h4>
                <ul className="text-sm text-foreground/80 space-y-1">
                  <li>• Maceta para pintar por persona</li>
                  <li>• Materiales de arte completos</li>
                  <li>• Planta para transplantar</li>
                  <li>• Instrucciones de cuidado</li>
                  <li>• Snacks para los niños</li>
                </ul>
              </div>
              <Button 
                className="w-full mt-4" 
                variant={selectedWorkshop === 'family' ? "hero" : "default"}
                onClick={() => handleSelectWorkshop('family')}
              >
                {selectedWorkshop === 'family' ? 'Seleccionado' : 'Elegir este Taller'}
              </Button>
            </CardContent>
          </Card>

          <Card className={`hover:shadow-soft transition-all duration-300 ${
            selectedWorkshop === 'adults' ? 'border-accent border-2 shadow-soft' : ''
          }`}>
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Wine className="w-8 h-8 text-accent" />
                </div>
                <div className="p-3 bg-accent/10 rounded-full">
                  <Sprout className="w-8 h-8 text-accent" />
                </div>
              </div>
              <CardTitle className="text-2xl">Taller para Adultos</CardTitle>
              <CardDescription className="text-base">
                Plant & Wine Experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80 text-center">
                Una experiencia relajante tipo "paint and wine" pero con plantas. Disfruta de una copa
                de vino mientras pintas tu maceta y aprendes técnicas de transplante en un ambiente
                creativo y social.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2 text-foreground">Incluye:</h4>
                <ul className="text-sm text-foreground/80 space-y-1">
                  <li>• Maceta premium para pintar</li>
                  <li>• Set completo de pinturas</li>
                  <li>• Planta exclusiva</li>
                  <li>• Copa de vino o bebida</li>
                  <li>• Snacks gourmet</li>
                </ul>
              </div>
              <Button 
                className="w-full mt-4" 
                variant={selectedWorkshop === 'adults' ? "hero" : "default"}
                onClick={() => handleSelectWorkshop('adults')}
              >
                {selectedWorkshop === 'adults' ? 'Seleccionado' : 'Elegir este Taller'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};