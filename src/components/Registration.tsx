import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    schedule: "",
    message: "",
  });

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
            <CardTitle>Formulario de Inscripción</CardTitle>
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
                    <SelectItem value="individual">Plan Individual - S/ 70</SelectItem>
                    <SelectItem value="combo">Combo para 2 - S/ 120</SelectItem>
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
                    <SelectItem value="sab-10">Sábado 10:00 AM</SelectItem>
                    <SelectItem value="sab-14">Sábado 2:00 PM</SelectItem>
                    <SelectItem value="sab-17">Sábado 5:00 PM</SelectItem>
                    <SelectItem value="dom-11">Domingo 11:00 AM</SelectItem>
                    <SelectItem value="dom-15">Domingo 3:00 PM</SelectItem>
                    <SelectItem value="vie-18">Viernes 6:00 PM</SelectItem>
                    <SelectItem value="vie-20">Viernes 8:00 PM</SelectItem>
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
