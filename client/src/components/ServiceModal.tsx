import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    benefits: string[];
    icon: React.ComponentType<any>;
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-3xl font-bold mb-2">
                {service.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {service.subtitle}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <div>
            <h3 className="text-lg font-bold mb-3 text-foreground">Visão Geral</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Benefícios Principais</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-muted/30 border border-border rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              Quer saber como este serviço pode transformar sua presença digital? 
              <a href="#contact" onClick={() => onClose()} className="text-primary font-semibold hover:underline ml-1">
                Agende uma consultoria gratuita
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
