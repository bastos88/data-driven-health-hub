import { motion } from "framer-motion";
import { Database, LineChart, MonitorSmartphone, Activity } from "lucide-react";

const highlights = [
  { icon: Database, label: "Análise de Dados" },
  { icon: LineChart, label: "Métricas Nutricionais" },
  { icon: MonitorSmartphone, label: "Acompanhamento Digital" },
  { icon: Activity, label: "Dashboards de Saúde" },
];

const TechNutritionSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Tecnologia & Nutrição</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            O diferencial de quem entende <span className="text-primary">código</span> e <span className="text-accent">nutrição</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Como desenvolvedora, aplico princípios de tecnologia à nutrição: análise de dados, acompanhamento digital e ferramentas que tornam a saúde mais mensurável e sustentável.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cada paciente recebe um acompanhamento que vai além do plano alimentar — com métricas de evolução, dashboards personalizados e insights baseados em dados reais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-6 flex flex-col items-center gap-3 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <h.icon size={24} />
              </div>
              <span className="text-sm font-semibold text-foreground">{h.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default TechNutritionSection;
