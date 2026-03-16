import { motion } from "framer-motion";
import { BarChart3, Target, Smartphone } from "lucide-react";

const steps = [
  {
    icon: BarChart3,
    title: "Nutrição Baseada em Dados",
    desc: "Avaliação alimentar detalhada com análise de hábitos e métricas para uma compreensão profunda do seu corpo.",
  },
  {
    icon: Target,
    title: "Estratégias Personalizadas",
    desc: "Planos alimentares adaptados à sua rotina, objetivos e estilo de vida — nada genérico.",
  },
  {
    icon: Smartphone,
    title: "Tecnologia Aplicada à Saúde",
    desc: "Ferramentas digitais, acompanhamento inteligente e métricas de evolução para resultados mensuráveis.",
  },
];

const MethodologySection = () => (
  <section id="metodologia" className="py-24">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Metodologia</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
          Como funciona o método
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Uma abordagem que combina ciência, dados e tecnologia para criar resultados reais e sustentáveis.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl bg-card border border-border p-8 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
              <s.icon size={28} />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodologySection;
