"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { AgendaContextType } from "../../types";

const AgendaContext = createContext<AgendaContextType | undefined>(undefined);

interface AgendaProviderProps {
  children: React.ReactNode;
}

const AgendaProvider = ({ children }: AgendaProviderProps) => {
  const [agenda, setAgenda] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("agenda");
    if (stored) {
      setAgenda(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("agenda", JSON.stringify(agenda));
    }
  }, [agenda, isLoaded]);

  const addSession = (id: string) => {
    setAgenda((prev) => [...prev, id]);
  };

  const removeSession = (id: string) => {
    setAgenda((prev) => prev.filter((sessionId) => sessionId !== id));
  };

  const isInAgenda = (id: string) => {
    return agenda.includes(id);
  };

  return (
    <AgendaContext.Provider value={{ agenda, addSession, removeSession, isInAgenda }}>
      {children}
    </AgendaContext.Provider>
  );
};

const useAgenda = () => {
  const context = useContext(AgendaContext);
  if (!context) {
    throw new Error("useAgenda must be used within AgendaProvider");
  }
  return context;
};

export { AgendaProvider, useAgenda, AgendaContext };
