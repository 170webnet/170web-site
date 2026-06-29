import { SiFacebook, SiX, SiDribbble, SiInstagram } from "react-icons/si";

// Ícones de marca uniformes (Simple Icons / react-icons, 1em quadrado) — o lucide
// não fornece ícones de marca, então usamos o Simple Icons com a mesma estética.
export const socialLinks = [
  { label: "Facebook", icon: <SiFacebook size={17} />, href: "#" },
  { label: "X", icon: <SiX size={17} />, href: "#" },
  { label: "Dribbble", icon: <SiDribbble size={17} />, href: "#" },
  { label: "Instagram", icon: <SiInstagram size={17} />, href: "#" },
];

export const quickLinks = [
  { label: "About", href: "#" },
  { label: "Who we are", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact Us", href: "#" },
];