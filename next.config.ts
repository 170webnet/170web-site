import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Não expor o header X-Powered-By
  poweredByHeader: false,

  // Formatos modernos de imagem (menor peso) para o next/image
  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // Tree-shaking de imports "barril" das libs mais pesadas → reduz o JS inicial.
    // (lucide-react já é otimizado por padrão pelo Next; os demais entram aqui.)
    optimizePackageImports: [
      "lucide-react",
      "swiper",
      "framer-motion",
      "gsap",
      "@gsap/react",
      "react-use",
    ],
  },
};

export default nextConfig;
