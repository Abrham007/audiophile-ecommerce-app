type RadioInputProps = {
  name: string;
  label: string;
  checked?: boolean;
  register: any;
  value: string;
};

export default function RadioInput({
  name,
  label,
  checked = false,
  register,
  value,
}: RadioInputProps) {
  return (
    <label className="py-[18px] pl-4 flex gap-4 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg hover:border-Orange focus:border-Orange">
      <input
        name={name}
        {...register(`${name}`)}
        value={value}
        type="radio"
        className="peer absolute w-0 h-0 opacity-0"
        defaultChecked={checked}
      />
      <span className="w-5 h-5 relative bg:transparent border border-solid border-[#CFCFCF] rounded-full  after:w-[10px] after:h-[10px]  after:rounded-full after:bg-Orange after:absolute after:top-[50%] after:left-[50%] after:-translate-y-[50%] after:-translate-x-[50%] after:hidden peer-checked:after:block"></span>
      <span className="text-sm -tracking-[0.01563rem] font-bold">{label}</span>
    </label>
  );
}
