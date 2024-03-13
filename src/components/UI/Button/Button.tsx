interface ButtonGroupProps extends React.ComponentPropsWithoutRef<"button"> {
  children: any;
  $type: string;
}

export default function Button({
  $type,
  children,
  ...props
}: ButtonGroupProps) {
  switch ($type) {
    case "1":
      return (
        <button
          {...props}
          className="px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-xs text-White font-bold border-none outline-none"
        >
          {children}
        </button>
      );
    case "2":
      return (
        <button
          {...props}
          className="px-[30px] py-[15px] bg-White hover:bg-Black text-xs text-Black hover:text-White font-bold border-[1px] border-solid border-Black outline-none"
        >
          {children}
        </button>
      );
    default:
      <button className="px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-sm text-White font-bold border-none outline-none">
        {children}
      </button>;
  }
}
