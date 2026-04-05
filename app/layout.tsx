import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BLOOM EDU-CARE CONSULT (MONTESSORI HUB)",
    template: "%s | Bloom Edu-care"
  },
  description:
    "Top-tier educational consultancy agency helping schools, learning centers, and educational institutions grow through training, materials strategy, curriculum resources, and leadership coaching."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="site-body">{children}</body>
    </html>
  );
}
