import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Te Quiero Plantas</h3>
            <p className="text-primary-foreground/80">
              Talleres creativos de pintura de macetas y transplante de plantas. 
              ¡Descubre tu lado artístico mientras aprendes a cuidar tus plantas!
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+51 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hola@tequieroplantas.pe</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a 
                  href="https://www.instagram.com/tequieroplantas.pe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @tequieroplantas.pe
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Horarios de Atención</h4>
            <div className="space-y-1 text-primary-foreground/80">
              <p>Lunes a Viernes: 10:00 - 19:00</p>
              <p>Sábados: 10:00 - 18:00</p>
              <p>Domingos: 11:00 - 17:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Te Quiero Plantas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
