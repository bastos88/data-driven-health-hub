import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Instagram, CalendarCheck, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá, meu nome é ${form.name}. ${form.message}`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contato</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Vamos conversar?</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Entre em contato para agendar sua consulta ou tirar dúvidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Sua mensagem"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Send size={16} /> Enviar Mensagem
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 justify-center"
          >
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MessageCircle size={20} />
              </div>
              <div>
                <span className="font-semibold text-sm text-foreground">WhatsApp</span>
                <p className="text-xs text-muted-foreground">Fale comigo diretamente</p>
              </div>
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Instagram size={20} />
              </div>
              <div>
                <span className="font-semibold text-sm text-foreground">Instagram</span>
                <p className="text-xs text-muted-foreground">Acompanhe meu conteúdo</p>
              </div>
            </a>

            <a
              href="#contato"
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center text-warm-foreground">
                <CalendarCheck size={20} />
              </div>
              <div>
                <span className="font-semibold text-sm text-foreground">Agendar Consulta</span>
                <p className="text-xs text-muted-foreground">Marque seu horário online</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
