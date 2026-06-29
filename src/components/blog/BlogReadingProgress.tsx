"use client";

import { useEffect, useState } from "react";

/**
 * Assinatura editorial: barra fina de progresso de leitura no topo, na cor da
 * marca (laranja). Acompanha o scroll real (window.scrollY) — funciona mesmo
 * com o GSAP ScrollSmoother, que lê o mesmo scroll nativo.
 */
export default function BlogReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[200] h-[3px] bg-px-border/40 dark:bg-white/15"
      aria-hidden="true"
    >
      <div
        className="h-full bg-px-primary"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
