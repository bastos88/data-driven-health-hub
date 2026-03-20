import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RotateCcw, Calculator } from "lucide-react";

type BMIResult = {
  value: number;
  label: string;
  message: string;
  colorClass: string;
};

const classify = (bmi: number): Omit<BMIResult, "value"> => {
  if (bmi < 18.5)
    return {
      label: "Abaixo do peso",
      message: "Seu peso está abaixo da faixa recomendada. Consulte um nutricionista para um plano alimentar adequado.",
      colorClass: "text-accent",
    };
  if (bmi < 25)
    return {
      label: "Peso normal",
      message: "Parabéns! Seu peso está dentro da faixa ideal. Continue mantendo hábitos saudáveis. 🎉",
      colorClass: "text-primary",
    };
  if (bmi < 30)
    return {
      label: "Sobrepeso",
      message: "Seu peso está um pouco acima do ideal. Pequenos ajustes na alimentação podem fazer grande diferença.",
      colorClass: "text-yellow-600",
    };
  return {
    label: "Obesidade",
    message: "Seu IMC indica obesidade. Procure acompanhamento profissional para cuidar da sua saúde.",
    colorClass: "text-destructive",
  };
};

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    setResult(null);

    const w = parseFloat(weight.replace(",", "."));
    let h = parseFloat(height.replace(",", "."));

    if (!w || !h || w <= 0 || h <= 0) {
      setError("Preencha peso e altura com valores válidos.");
      return;
    }

    // auto-convert cm to m
    if (h > 3) h = h / 100;

    const bmi = w / (h * h);
    const info = classify(bmi);
    setResult({ value: parseFloat(bmi.toFixed(2)), ...info });
  };

  const clear = () => {
    setWeight("");
    setHeight("");
    setResult(null);
    setError("");
  };

  return (
    <section id="imc" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-primary font-body text-sm font-semibold tracking-wider uppercase mb-3">
            <Heart className="w-4 h-4" /> Ferramenta
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Calculadora de IMC
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            O Índice de Massa Corporal (IMC) é uma medida que relaciona peso e altura para avaliar se você está dentro da faixa de peso saudável.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="bmi-weight" className="block text-sm font-medium text-foreground mb-1.5">
                Peso (kg)
              </label>
              <input
                id="bmi-weight"
                type="text"
                inputMode="decimal"
                placeholder="Ex: 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>

            <div>
              <label htmlFor="bmi-height" className="block text-sm font-medium text-foreground mb-1.5">
                Altura (cm ou m)
              </label>
              <input
                id="bmi-height"
                type="text"
                inputMode="decimal"
                placeholder="Ex: 175 ou 1.75"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>

            {error && (
              <p className="text-destructive text-sm font-medium">{error}</p>
            )}

            <div className="flex gap-3 pt-2">
              <button
                onClick={calculate}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all"
              >
                <Calculator className="w-4 h-4" />
                Calcular IMC
              </button>
              <button
                onClick={clear}
                className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground font-medium py-3 px-5 rounded-lg hover:bg-muted transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Limpar
              </button>
            </div>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-6 pt-6 border-t border-border text-center space-y-2">
                  <p className="text-muted-foreground text-sm">Seu IMC é</p>
                  <p className={`text-5xl font-display font-bold ${result.colorClass}`}>
                    {result.value}
                  </p>
                  <span
                    className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${result.colorClass} bg-muted`}
                  >
                    {result.label}
                  </span>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {result.message}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BMICalculator;
