import { motion } from "framer-motion";
import photo from "@/assets/wilmila-photo.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-primary/10 -rotate-3" />
          <img src={photo} alt="Wilmila Braga" className="relative w-72 md:w-80 rounded-2xl object-cover shadow-xl" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sobre</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Wilmila Braga
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Sou Wilmila Braga, nutricionista e desenvolvedora de software. Minha missão é transformar a forma como as pessoas cuidam da própria saúde.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Unindo ciência da nutrição com tecnologia, desenvolvo estratégias alimentares inteligentes, baseadas em dados, comportamento e estilo de vida real.
        </p>
        <div className="flex flex-wrap gap-3 mt-2">
          {["Nutricionista Formada", "Desenvolvedora de Software", "Nutrição Baseada em Dados"].map((tag) => (
            <span key={tag} className="rounded-full bg-warm px-4 py-1.5 text-xs font-medium text-warm-foreground">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
