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

  const overlayRef = useRef<HTMLDivElement>(null);

  const show = (node: ReactNode) => setModal(node);
  const hide = () => setModal(null);

  // Bloquear el scroll
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
  }, [modal]);

  // ESC handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    if (modal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {children}

      {modal &&
        createPortal(
          <div
            ref={overlayRef}
            className="p-5 fixed inset-0 bg-black/50 backdrop-blur-sm z-9999 flex items-center justify-center overflow-y-auto"
            onClick={(e) => {
              if (e.target === overlayRef.current) hide(); // click afuera
            }}
          >
            {modal}
          </div>,
          document.body,
        )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be inside ModalProvider");
  return ctx;
}
