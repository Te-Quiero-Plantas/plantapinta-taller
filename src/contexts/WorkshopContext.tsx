import { createContext, useContext, useState, ReactNode } from "react";

export type WorkshopType = "family" | "adults" | null;

interface WorkshopContextType {
  selectedWorkshop: WorkshopType;
  setSelectedWorkshop: (type: WorkshopType) => void;
}

const WorkshopContext = createContext<WorkshopContextType | undefined>(undefined);

export const WorkshopProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopType>(null);

  return (
    <WorkshopContext.Provider value={{ selectedWorkshop, setSelectedWorkshop }}>
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshop = () => {
  const context = useContext(WorkshopContext);
  if (context === undefined) {
    throw new Error("useWorkshop must be used within a WorkshopProvider");
  }
  return context;
};
