import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  show: (node: ReactNode) => void;
  hide: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ReactNode>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const show = (node: ReactNode) => setModal(node);
  const hide = () => setModal(null);

  // abrir dialog cuando hay modal
  useEffect(() => {
    if (modal) dialogRef.current?.showModal();
  }, [modal]);

  // Bloquear el scroll
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
  }, [modal]);

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}
      {modal &&
        createPortal(
          <dialog
            ref={dialogRef}
            className="w-[90%] max-w-xl m-auto backdrop:bg-black/30 backdrop:backdrop-blur-xs bg-transparent p-0 border-none"
            onCancel={hide} // ESC o backdrop nativo
            onClick={(e) => {
              if (e.target === dialogRef.current) hide(); // click fuera
            }}
          >
            {modal}
          </dialog>,
          document.body,
        )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useGlobalModal must be inside ModalProvider");
  return ctx;
}
