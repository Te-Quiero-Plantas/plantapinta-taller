import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkshopTypes } from "@/components/WorkshopTypes";
import { Plans } from "@/components/Plans";
import { Schedule } from "@/components/Schedule";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { Registration } from "@/components/Registration";
import { Footer } from "@/components/Footer";
import { WorkshopProvider, useWorkshop } from "@/contexts/WorkshopContext";

const IndexContent = () => {
  const { selectedWorkshop } = useWorkshop();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WorkshopTypes />
      {selectedWorkshop && (
        <>
          <WhatsIncluded />
          <Plans />
          <Schedule />
          <Registration />
        </>
      )}
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <WorkshopProvider>
      <IndexContent />
    </WorkshopProvider>
  );
};

export default Index;
