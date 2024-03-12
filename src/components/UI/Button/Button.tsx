type ButtonProps = {
  $type: string;
  children: any;
  props: any;
};

export default function Button({ $type, children, ...props }: ButtonProps) {
  switch ($type) {
    case "1":
      return (
        <button
          {...props}
          className="px-[30px] py-[15px] bg-Orange hover:bg-LightOrange text-sm text-White font-bold border-none outline-none"
        >
          {children}
        </button>
      );
    case "2":
      return (
        <button
          {...props}
          className="px-[30px] py-[15px] bg-White hover:bg-Black text-sm text-Black hover:text-White font-bold border-[1px] border-solid border-Black outline-none"
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
