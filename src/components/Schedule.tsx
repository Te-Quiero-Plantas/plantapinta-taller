import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const schedules = [
  {
    day: "Sábados",
    times: ["10:00 AM", "2:00 PM", "5:00 PM"],
    available: true,
  },
  {
    day: "Domingos", 
    times: ["11:00 AM", "3:00 PM"],
    available: true,
  },
  {
    day: "Viernes",
    times: ["6:00 PM", "8:00 PM"],
    available: true,
  },
];

export const Schedule = () => {
  return (
    <section id="horarios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Horarios Disponibles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talleres todas las semanas. Elige el horario que mejor se adapte a ti.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {schedules.map((schedule, index) => (
            <Card key={index} className="hover:shadow-soft transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Calendar className="w-6 h-6 text-primary" />
                  {schedule.day}
                  {schedule.available && (
                    <span className="ml-auto text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      Disponible
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {schedule.times.map((time, timeIndex) => (
                    <div 
                      key={timeIndex}
                      className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg"
                    >
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium">{time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Location Card */}
          <Card className="bg-gradient-card border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Nuestro taller está ubicado en un espacio luminoso y cómodo en el corazón de la ciudad.
                    La dirección exacta se enviará al confirmar tu inscripción.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
