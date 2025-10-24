import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { useWorkshop } from "@/contexts/WorkshopContext";
import { familyPlans, adultsPlans, familySchedules, adultsSchedules } from "@/data/workshopData";

export const Registration = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const { selectedWorkshop } = useWorkshop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    schedule: "",
    message: "",
  });

  const plans = selectedWorkshop === 'family' ? familyPlans : adultsPlans;
  const schedules = selectedWorkshop === 'family' ? familySchedules : adultsSchedules;
  const workshopTitle = selectedWorkshop === 'family' 
    ? 'Taller Padres + Hijos' 
    : 'Taller para Adultos';

  useEffect(() => {
    const planParam = searchParams.get('plan');
    const scheduleParam = searchParams.get('schedule');
    
    if (planParam || scheduleParam) {
      setFormData(prev => ({
        ...prev,
        ...(planParam && { plan: planParam }),
        ...(scheduleParam && { schedule: scheduleParam }),
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.plan || !formData.schedule) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    toast({
      title: "¡Inscripción recibida! 🎉",
      description: "Te contactaremos pronto para confirmar tu lugar en el taller.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      plan: "",
      schedule: "",
      message: "",
    });
  };

  return (
    <section id="inscripcion" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Inscríbete Ahora
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y te contactaremos para confirmar tu lugar
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-soft">
          <CardHeader>
            <CardTitle>Formulario de Inscripción - {workshopTitle}</CardTitle>
            <CardDescription>
              Los campos marcados con * son obligatorios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 9 11 1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Plan Elegido *</Label>
                <Select
                  value={formData.plan}
                  onValueChange={(value) => setFormData({ ...formData, plan: value })}
                  required
                >
                  <SelectTrigger id="plan">
                    <SelectValue placeholder="Selecciona un plan" />
                  </SelectTrigger>
                  <SelectContent>
                    {plans.map((plan) => (
                      <SelectItem key={plan.value} value={plan.value}>
                        {plan.name} - {plan.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="schedule">Horario Preferido *</Label>
                <Select
                  value={formData.schedule}
                  onValueChange={(value) => setFormData({ ...formData, schedule: value })}
                  required
                >
                  <SelectTrigger id="schedule">
                    <SelectValue placeholder="Selecciona un horario" />
                  </SelectTrigger>
                  <SelectContent>
                    {schedules.flatMap((schedule) =>
                      schedule.times.map((time) => (
                        <SelectItem key={time.value} value={time.value}>
                          {schedule.day} {time.label}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje (opcional)</Label>
                <Textarea
                  id="message"
                  placeholder="¿Tienes alguna pregunta o comentario?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" variant="hero" className="w-full">
                <Send className="mr-2" />
                Enviar Inscripción
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
