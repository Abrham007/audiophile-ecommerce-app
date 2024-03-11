type ButtonProps = {
  $type: string;
  children: any;
};

export default function Button({ $type, children }: ButtonProps) {
  switch ($type) {
    case "1":
      return (
        <button className="px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-sm text-White font-bold border-none outline-none">
          {children}
        </button>
      );
    case "2":
      return (
        <button className="px-[30px] py-[15px] bg-White hover:bg-Black text-sm text-Black hover:text-White font-bold border-[1px] border-solid border-Black outline-none">
          {children}
        </button>
      );
    case "3":
      return (
        <button className="flex gap-[13px] items-center justify-center bg-transparent text-sm text-[#00000050] hover:text-Orange font-bold border-none outline-none">
          {children}
        </button>
      );
    default:
      <button className="px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-sm text-White font-bold border-none outline-none">
        {children}
      </button>;
  }
}
