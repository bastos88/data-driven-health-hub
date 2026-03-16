import { motion } from "framer-motion";
import { HeartPulse, Apple, TrendingDown, Dumbbell, ClipboardList, Code2 } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Nutrição Clínica", desc: "Tratamento nutricional baseado em evidências científicas." },
  { icon: Apple, title: "Reeducação Alimentar", desc: "Mudança de hábitos de forma gradual e sustentável." },
  { icon: TrendingDown, title: "Emagrecimento Saudável", desc: "Perda de peso com saúde, sem dietas restritivas." },
  { icon: Dumbbell, title: "Nutrição para Performance", desc: "Alimentação estratégica para atletas e praticantes." },
  { icon: ClipboardList, title: "Consultoria Personalizada", desc: "Acompanhamento individual com foco nos seus objetivos." },
  { icon: Code2, title: "Ferramentas Digitais para Saúde", desc: "Desenvolvimento de soluções tecnológicas aplicadas à nutrição." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Serviços</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">O que posso fazer por você</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-background border border-border p-6 text-left flex gap-4 items-start hover:shadow-lg hover:border-primary/30 transition-all"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <s.icon size={22} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
