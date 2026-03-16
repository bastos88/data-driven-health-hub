import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    tag: "Alimentação",
    title: "5 Alimentos que Potencializam sua Energia no Dia a Dia",
    excerpt: "Descubra quais alimentos podem transformar seu nível de energia e produtividade.",
  },
  {
    tag: "Ciência",
    title: "Como a Nutrição Baseada em Dados Está Revolucionando a Saúde",
    excerpt: "Entenda como métricas e tecnologia estão mudando o atendimento nutricional.",
  },
  {
    tag: "Estilo de Vida",
    title: "Hábitos Simples para uma Vida Mais Equilibrada",
    excerpt: "Pequenas mudanças que fazem grande diferença na saúde e no bem-estar.",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Blog</span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">Conteúdo & Conhecimento</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-40 bg-gradient-to-br from-sage to-primary/10" />
            <div className="p-6 flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase text-accent tracking-wide">{p.tag}</span>
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-2 cursor-pointer">
                Ler mais <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
