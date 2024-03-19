type NumberInputProps = {
  number: number;
  className?: string;
  increment: (num: number) => void;
  decrement: (num: number) => void;
};
export default function NumberInput({
  number,
  increment,
  decrement,
  className,
}: NumberInputProps) {
  return (
    <div
      className={`w-full h-full bg-VeryDarkWhite flex gap-5 items-center justify-center ${className}`}
    >
      <button
        onClick={() => decrement(number - 1)}
        className="text-xs text-[#00000025] hover:text-Orange leading-normal tracking-[0.0625rem]"
      >
        -
      </button>
      <span className="text-xs text-Black  leading-normal tracking-[0.0625rem]">
        {number}
      </span>
      <button
        onClick={() => increment(number + 1)}
        className="text-xs text-[#00000025] hover:text-Orange leading-normal tracking-[0.0625rem]"
      >
        +
      </button>
    </div>
  );
}
