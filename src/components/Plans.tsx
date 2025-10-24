import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Iniciación",
    price: "$35",
    description: "Perfecto para principiantes que quieren probar",
    features: [
      "1 maceta pequeña para pintar",
      "Pinturas acrílicas básicas",
      "Pinceles y materiales",
      "1 planta suculenta",
      "Guía de cuidados",
      "Duración: 2 horas",
    ],
    popular: false,
  },
  {
    name: "Creativo",
    price: "$55",
    description: "La experiencia completa para artistas en desarrollo",
    features: [
      "2 macetas medianas para pintar",
      "Set completo de pinturas",
      "Pinceles profesionales",
      "2 plantas a elección",
      "Técnicas de transplante",
      "Merienda incluida",
      "Duración: 3.5 horas",
    ],
    popular: true,
  },
  {
    name: "Experto",
    price: "$85",
    description: "Para los que buscan una experiencia premium",
    features: [
      "3 macetas grandes para pintar",
      "Pinturas premium + brillos",
      "Set completo profesional",
      "3 plantas exclusivas",
      "Técnicas avanzadas",
      "Merienda gourmet",
      "Foto profesional de tu obra",
      "Duración: 5 horas",
    ],
    popular: false,
  },
];

export const Plans = () => {
  const scrollToInscription = () => {
    const element = document.getElementById('inscripcion');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="planes" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nuestros Planes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige la experiencia perfecta para ti. Todos incluyen materiales y plantas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-all duration-300 hover:shadow-soft hover:scale-105 ${
                plan.popular ? 'border-primary border-2 shadow-soft' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Más Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full"
                  variant={plan.popular ? "hero" : "default"}
                  onClick={scrollToInscription}
                >
                  Elegir Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
