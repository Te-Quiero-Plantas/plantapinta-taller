import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const schedules = [
  {
    day: "Sábados",
    times: [
      { label: "10:00 AM", value: "sab-10" },
      { label: "2:00 PM", value: "sab-14" },
      { label: "5:00 PM", value: "sab-17" }
    ],
    available: true,
  },
  {
    day: "Domingos", 
    times: [
      { label: "11:00 AM", value: "dom-11" },
      { label: "3:00 PM", value: "dom-15" }
    ],
    available: true,
  },
  {
    day: "Viernes",
    times: [
      { label: "6:00 PM", value: "vie-18" },
      { label: "8:00 PM", value: "vie-20" }
    ],
    available: true,
  },
];

export const Schedule = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectSchedule = (scheduleValue: string) => {
    const params = new URLSearchParams(location.search);
    params.set('schedule', scheduleValue);
    navigate(`?${params.toString()}`);

    const element = document.getElementById('inscripcion');
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
                    <Button
                      key={timeIndex}
                      variant="outline"
                      className="flex items-center gap-2 p-3 justify-start hover:bg-primary/10 hover:border-primary"
                      onClick={() => selectSchedule(time.value)}
                    >
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-medium">{time.label}</span>
                    </Button>
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
