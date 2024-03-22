interface ButtonGroupProps extends React.ComponentPropsWithoutRef<"button"> {
  children: any;
  $type: string;
  className?: string;
}

export default function Button({
  $type,
  children,
  className,
  ...props
}: ButtonGroupProps) {
  switch ($type) {
    case "1":
      return (
        <button
          {...props}
          className={`px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-xs text-White font-bold border-none outline-none uppercase ${className}`}
        >
          {children}
        </button>
      );
    case "2":
      return (
        <button
          {...props}
          className={`px-[30px] py-[15px] bg-transparent hover:bg-Black text-xs text-Black hover:text-White font-bold border-[1px] border-solid border-Black outline-none uppercase ${className}`}
        >
          {children}
        </button>
      );
    case "3":
      return (
        <button
          {...props}
          className={`px-[30px] py-[15px] bg-Black hover:bg-LightBlack text-xs text-White hover:text-Black font-bold border-[1px] border-solid border-Black outline-none uppercase ${className}`}
        >
          {children}
        </button>
      );
    default:
      <button
        className={`px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-xs text-White font-bold border-none outline-none uppercase ${className}`}
      >
        {children}
      </button>;
  }
}
