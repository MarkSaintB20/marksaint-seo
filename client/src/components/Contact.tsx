import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em até 24 horas."
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer id="contact" className="bg-foreground text-background relative overflow-hidden">
      <div className="container py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-primary/20 text-primary-foreground text-xs font-mono font-bold uppercase tracking-widest border border-primary/30">
              Diagnóstico Gratuito
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
              Vamos Começar Seu <br/>
              <span className="text-secondary">Diagnóstico</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Toda grande virada começa com um diagnóstico honesto. Preencha o formulário para agendar sua auditoria inicial.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background/5 rounded-sm border border-background/10">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-background">Email</h4>
                  <p className="text-muted-foreground">marcoantonioclarosantos@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background/5 rounded-sm border border-background/10">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-background">WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 99865-0424</p>
                </div>
              </div>

              <div className="pt-8 border-t border-background/10">
                <h4 className="font-bold text-background mb-4">MarkSaint SEO</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  São Paulo – SP, Brasil
                </p>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-background/5 hover:bg-primary hover:text-white transition-colors rounded-sm" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background text-foreground p-8 md:p-10 border-t-4 border-secondary shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input id="name" required placeholder="Seu nome" className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo *</Label>
                  <Input id="email" type="email" required placeholder="voce@empresa.com" className="bg-muted/30" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input id="company" required placeholder="Nome da empresa" className="bg-muted/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Site / URL</Label>
                  <Input id="website" placeholder="https://..." className="bg-muted/30" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="revenue">Faturamento Anual</Label>
                  <Select>
                    <SelectTrigger className="bg-muted/30">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<100k">&lt; R$ 100k</SelectItem>
                      <SelectItem value="100k-1m">R$ 100k - R$ 1M</SelectItem>
                      <SelectItem value="1m-10m">R$ 1M - R$ 10M</SelectItem>
                      <SelectItem value=">10m">&gt; R$ 10M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maturity">Maturidade Digital</Label>
                  <Select>
                    <SelectTrigger className="bg-muted/30">
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Iniciante</SelectItem>
                      <SelectItem value="intermediate">Intermediária</SelectItem>
                      <SelectItem value="advanced">Avançada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Conte um pouco sobre seus desafios atuais..." className="min-h-[120px] bg-muted/30" />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero Minha Auditoria Orientada a Dados"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
                Seus dados estão seguros. Resposta em até 24h.
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 MarkSaint SEO. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacidade</a>
            <a href="#" className="hover:text-background transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
