import { Card, CardContent } from "@/components/ui/card";
import paintedPotsImage from "@/assets/painted-pots.jpg";
import transplantImage from "@/assets/transplant.jpg";
import { Palette, Sprout, Coffee, Camera, Users, Heart } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Materiales Premium",
    description: "Pinturas acrílicas de alta calidad, pinceles profesionales y todo lo necesario para crear",
  },
  {
    icon: Sprout,
    title: "Plantas Incluidas",
    description: "Llevate tus plantas a casa en las macetas que decoraste con tu propio estilo",
  },
  {
    icon: Users,
    title: "Grupos Reducidos",
    description: "Máximo 8 personas por taller para garantizar atención personalizada",
  },
  {
    icon: Coffee,
    title: "Merienda",
    description: "Disfruta de café, té y snacks mientras creas (planes Creativo y Experto)",
  },
  {
    icon: Camera,
    title: "Recuerdos",
    description: "Capturamos los mejores momentos para que tengas un recuerdo de tu experiencia",
  },
  {
    icon: Heart,
    title: "Ambiente Relajado",
    description: "Un espacio acogedor donde puedes ser creativo sin presiones",
  },
];

export const WhatsIncluded = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            ¿Qué Incluye?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para una experiencia creativa inolvidable
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
