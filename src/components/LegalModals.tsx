'use client';

import { useLegalModal } from '../contexts/LegalModalContext';
import LegalModal from './UI/LegalModal';
import TerminosContent from './UI/LegalModal/TerminosContent';
import PrivacidadContent from './UI/LegalModal/PrivacidadContent';
import CookiesContent from './UI/LegalModal/CookiesContent';

const LegalModals = () => {
  const {
    isTerminosOpen,
    isPrivacidadOpen,
    isCookiesOpen,
    closeAll,
  } = useLegalModal();

  return (
    <>
      <LegalModal
        isOpen={isTerminosOpen}
        onClose={closeAll}
        title="Términos de Servicio"
      >
        <TerminosContent />
      </LegalModal>

      <LegalModal
        isOpen={isPrivacidadOpen}
        onClose={closeAll}
        title="Política de Privacidad"
      >
        <PrivacidadContent />
      </LegalModal>

      <LegalModal
        isOpen={isCookiesOpen}
        onClose={closeAll}
        title="Política de Cookies"
      >
        <CookiesContent />
      </LegalModal>
    </>
  );
};

export default LegalModals;
