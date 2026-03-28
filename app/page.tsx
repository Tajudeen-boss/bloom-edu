import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CompanyOverview />
      <ServiceCards />
    </main>
  );
}
