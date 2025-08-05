'use client';

import React, { createContext, useContext, useState } from 'react';

interface LegalModalContextType {
  isTerminosOpen: boolean;
  isPrivacidadOpen: boolean;
  isCookiesOpen: boolean;
  openTerminos: () => void;
  openPrivacidad: () => void;
  openCookies: () => void;
  closeAll: () => void;
}

const LegalModalContext = createContext<LegalModalContextType | undefined>(undefined);

export const useLegalModal = () => {
  const context = useContext(LegalModalContext);
  if (!context) {
    throw new Error('useLegalModal must be used within a LegalModalProvider');
  }
  return context;
};

export const LegalModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTerminosOpen, setIsTerminosOpen] = useState(false);
  const [isPrivacidadOpen, setIsPrivacidadOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);

  const openTerminos = () => {
    setIsTerminosOpen(true);
    setIsPrivacidadOpen(false);
    setIsCookiesOpen(false);
  };

  const openPrivacidad = () => {
    setIsPrivacidadOpen(true);
    setIsTerminosOpen(false);
    setIsCookiesOpen(false);
  };

  const openCookies = () => {
    setIsCookiesOpen(true);
    setIsTerminosOpen(false);
    setIsPrivacidadOpen(false);
  };

  const closeAll = () => {
    setIsTerminosOpen(false);
    setIsPrivacidadOpen(false);
    setIsCookiesOpen(false);
  };

  return (
    <LegalModalContext.Provider
      value={{
        isTerminosOpen,
        isPrivacidadOpen,
        isCookiesOpen,
        openTerminos,
        openPrivacidad,
        openCookies,
        closeAll,
      }}
    >
      {children}
    </LegalModalContext.Provider>
  );
};
