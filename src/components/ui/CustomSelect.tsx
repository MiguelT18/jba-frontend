import { useState, useRef, useEffect } from "react";

type Option = { value: string; label: string };

interface Props {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const ArrowIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1a2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1"
    ></path>
  </svg>
);

export function CustomSelect({ value, options, onChange, placeholder }: Props) {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  const handleToggle = () => {
    if (!open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const estimatedHeight = options.length * 40; // px aproximados por opción
      setDropUp(spaceBelow < estimatedHeight);
    }
    setOpen((v) => !v);
  };

  // cerrar al click afuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        className={`input flex justify-between items-center w-full px-4 py-2 rounded-lg transition-all ${open ? "border-2 border-rose-500" : "border border-gray-300"}`}
      >
        <span>{selected?.label ?? placeholder ?? "Selecciona una opción"}</span>
        <span
          className={`transition-all ${open ? "text-rose-500 rotate-180" : "text-gray-300"}`}
        >
          <ArrowIcon />
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className={`absolute z-50 w-full bg-white rounded-lg shadow-black/30 shadow-lg overflow-hidden
            ${dropUp ? "bottom-full mb-1" : "top-full mt-1"}`}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-rose-100 cursor-pointer"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
