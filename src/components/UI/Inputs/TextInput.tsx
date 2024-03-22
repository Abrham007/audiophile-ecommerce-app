type TextInputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  register: any;
  errors: any;
};

export default function TextInput({
  name,
  label,
  placeholder,
  type = "text",
  register,
  errors,
}: TextInputProps) {
  return (
    <label className="flex flex-col gap-[9px]">
      <div className="flex justify-between">
        <span className="text-Black text-[0.75rem] -tracking-[0.01338rem] font-bold">
          {label}
        </span>
        {errors[name] && (
          <span className="text-[#CD2C2C] text-[0.75rem] -tracking-[0.01338rem] font-normal">
            Can't be empty
          </span>
        )}
      </div>
      <input
        name={name}
        {...register(`${name}`, { required: true })}
        placeholder={placeholder}
        type={type}
        className="py-[18px] pl-6 hover:cursor-pointer border border-solid border-[#CFCFCF] rounded-lg focus:border-Orange hover:border-Orange text-sm -tracking-[0.01563rem] font-bold outline-none"
      ></input>
    </label>
  );
}
