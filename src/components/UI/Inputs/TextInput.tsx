type TextInputProps = {
  name: string;
  label: string;
  placeholder: string;
};

export default function TextInput({
  name,
  label,
  placeholder,
}: TextInputProps) {
  return (
    <label className="flex flex-col gap-[9px]">
      <div className="flex justify-between">
        <span className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold">
          {label}
        </span>
        <span className="text-[#CD2C2C] text-[0.75rem] -tracking-[0.01338rem] font-normal"></span>
      </div>
      <input
        name={name}
        placeholder={placeholder}
        type="text"
        className="py-18 pl-6 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg focus:border-Orange text-sm -tracking-[0.01563rem] font-bold"
      ></input>
    </label>
  );
}
