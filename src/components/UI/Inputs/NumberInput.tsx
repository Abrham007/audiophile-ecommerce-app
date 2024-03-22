type NumberInputProps = {
  number: number;
  increment: () => void;
  decrement: () => void;
};
export default function NumberInput({
  number,
  increment,
  decrement,
}: NumberInputProps) {
  return (
    <div
      className={`w-full h-full bg-VeryDarkWhite flex gap-5 items-center justify-center`}
    >
      <button
        onClick={() => decrement()}
        className="w-full h-full text-xs text-[#00000025] hover:text-Orange leading-normal tracking-[0.0625rem]"
      >
        -
      </button>
      <span className="text-xs text-Black  leading-normal tracking-[0.0625rem]">
        {number}
      </span>
      <button
        onClick={() => increment()}
        className="w-full h-full text-xs text-[#00000025] hover:text-Orange leading-normal tracking-[0.0625rem]"
      >
        +
      </button>
    </div>
  );
}
