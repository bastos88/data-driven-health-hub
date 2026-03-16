import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6"
      >
        <span className="inline-block w-fit rounded-full bg-sage px-4 py-1.5 text-xs font-semibold text-sage-foreground tracking-wide uppercase">
          Nutrição + Tecnologia
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
          Nutrição Inteligente para um Corpo e uma Vida em{" "}
          <span className="text-primary">Equilíbrio</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Unindo ciência da nutrição e tecnologia para transformar saúde em dados, hábitos e resultados.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <a href="#contato" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            Agendar Consulta
          </a>
          <a href="#metodologia" className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
            Conhecer o Método
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={heroImg}
          alt="Nutrição e tecnologia — dashboards nutricionais e alimentos saudáveis"
          className="w-full max-w-lg rounded-2xl shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
