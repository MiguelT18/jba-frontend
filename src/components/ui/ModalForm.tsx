import { useModal } from "@/contexts/ModalContext";

export default function ModalForm() {
  const { hide } = useModal();

  return (
    <article className=" bg-white w-full rounded-xl shadow-xl p-5">
      <h1 className="font-bold text-xl uppercase text-center">Hello World!</h1>

      <button
        onClick={hide}
        className="py-3 w-full bg-primary rounded-md text-white"
      >
        Cerrar
      </button>
    </article>
  );
}
