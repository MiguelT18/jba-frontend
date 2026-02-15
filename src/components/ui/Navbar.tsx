import { useState } from "react";

const MenuIcon = () => (
  <svg width={32} height={32} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width={32} height={32} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
    ></path>
  </svg>
);

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  return (
    <nav className="sticky top-0 w-full min-h-[10dvh] bg-white/40 backdrop-blur-sm px-6 py-4 z-20 flex items-center justify-between">
      <h1 className="inline-block mr-4 text-xl font-bold bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent truncate">
        Jolimia Beauty Academy
      </h1>

      <button type="button" onClick={handleOpenMenu}>
        {openMenu ? <MenuIcon /> : <CloseIcon />}
      </button>
    </nav>
  );
}
