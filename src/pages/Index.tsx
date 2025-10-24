import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Schedule } from "@/components/Schedule";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { Registration } from "@/components/Registration";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatsIncluded />
      <Plans />
      <Schedule />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
