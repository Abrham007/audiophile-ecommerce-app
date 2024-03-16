type RadioInputProps = {
  name: string;
  label: string;
};

export default function RadioInput({ name, label }: RadioInputProps) {
  return (
    <label className="py-[18px] pl-4 flex gap-4 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg hover:border-Orange focus:border-Orange">
      <input
        name={name}
        type="radio"
        className="peer absolute opacity-0 h-0 w-0"
      />
      <span className="w-5 h-5 relative bg:transparent border border-solid border-[#CFCFCF] rounded-full after:w-[10] after:h-[10px] after:rounded-full after:bg-Orange after:absolute after:top-[5px] after:left-[5px] after:hidden peer-checked:block"></span>
      <span className="text-sm -tracking-[0.01563rem] font-bold">{label}</span>
    </label>
  );
}
