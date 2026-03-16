import logo from "@/assets/wilmila-logo.png";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Wilmila Braga" className="h-8 w-8 rounded-full object-cover" />
        <span className="font-display text-sm font-semibold text-foreground">Wilmila Braga</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Wilmila Braga — Nutricionista & Desenvolvedora. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
