import { Card, CardContent } from "@/components/ui/card";
import paintedPotsImage from "@/assets/painted-pots.jpg";
import transplantImage from "@/assets/transplant.jpg";
import { Palette, Sprout, Coffee, Camera, Users, Heart, Wine, Smile } from "lucide-react";
import { useWorkshop } from "@/contexts/WorkshopContext";

const familyFeatures = [
  {
    icon: Palette,
    title: "Materiales para Todos",
    description: "Pinturas y pinceles adaptados para niños y adultos",
  },
  {
    icon: Sprout,
    title: "Plantas Familiares",
    description: "Plantas fáciles de cuidar perfectas para niños",
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Espacio seguro y divertido para toda la familia",
  },
  {
    icon: Smile,
    title: "Snacks para Niños",
    description: "Merienda saludable incluida para los pequeños",
  },
  {
    icon: Camera,
    title: "Fotos Familiares",
    description: "Capturamos los momentos especiales en familia",
  },
  {
    icon: Heart,
    title: "Experiencia Educativa",
    description: "Los niños aprenden sobre plantas y creatividad",
  },
];

const adultsFeatures = [
  {
    icon: Wine,
    title: "Bebidas Incluidas",
    description: "Copa de vino o bebida de tu elección",
  },
  {
    icon: Palette,
    title: "Materiales Premium",
    description: "Pinturas acrílicas profesionales y macetas de calidad",
  },
  {
    icon: Sprout,
    title: "Plantas Exclusivas",
    description: "Selección de plantas decorativas y exóticas",
  },
  {
    icon: Coffee,
    title: "Snacks Gourmet",
    description: "Variedad de bocadillos y aperitivos premium",
  },
  {
    icon: Camera,
    title: "Fotos Profesionales",
    description: "Sesión fotográfica de tu creación",
  },
  {
    icon: Heart,
    title: "Ambiente Relajado",
    description: "Música ambiente y espacio para socializar",
  },
];

export const WhatsIncluded = () => {
  const { selectedWorkshop } = useWorkshop();
  const features = selectedWorkshop === 'family' ? familyFeatures : adultsFeatures;
  const title = selectedWorkshop === 'family' 
    ? 'Taller Padres + Hijos' 
    : 'Taller para Adultos';

  return (
    <section id="que-incluye" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ¿Qué Incluye el {title}?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para una experiencia inolvidable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-soft transition-smooth">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-card group">
            <img 
              src={paintedPotsImage} 
              alt="Macetas pintadas con diseños coloridos"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <p className="text-primary-foreground font-semibold text-lg">
                Crea diseños únicos y coloridos
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-card group">
            <img 
              src={transplantImage} 
              alt="Transplante de plantas en macetas decoradas"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <p className="text-primary-foreground font-semibold text-lg">
                Aprende a cuidar tus plantas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
