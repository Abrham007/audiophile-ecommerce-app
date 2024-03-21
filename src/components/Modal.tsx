import { useEffect, useRef } from "react";

type ModalProps = {
  children: any;
  isOpen: boolean;
  setIsOpen: (s: boolean) => void;
  className: string;
};

export default function Modal({
  children,
  isOpen,
  setIsOpen,
  className,
}: ModalProps) {
  let dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, []);

  function handelClose() {
    setIsOpen(false);
  }

  return (
    <dialog
      ref={dialog}
      onClose={handelClose}
      className={`${className} backdrop:bg-Black backdrop:opacity-40`}
    >
      {isOpen && children}
    </dialog>
  );
}
