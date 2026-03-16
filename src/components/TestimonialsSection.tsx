import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    text: "A Wilmila mudou completamente minha relação com a comida. O acompanhamento com dados e tecnologia fez toda diferença nos meus resultados!",
  },
  {
    name: "Carlos R.",
    text: "Profissional incrível! Consegui emagrecer de forma saudável e o dashboard de acompanhamento me manteve motivado o tempo todo.",
  },
  {
    name: "Ana Paula L.",
    text: "Nunca tive um atendimento nutricional tão personalizado. A Wilmila usa tecnologia de verdade para entender nossas necessidades.",
  },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Depoimentos</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">O que dizem meus pacientes</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="rounded-2xl bg-background border border-border p-8 text-left flex flex-col gap-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
            <span className="font-semibold text-foreground text-sm mt-auto">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
