interface LinkGroupProps extends React.ComponentPropsWithoutRef<"a"> {
  children: any;
}

export default function Link({ children, ...props }: LinkGroupProps) {
  return (
    <a
      {...props}
      className="flex gap-[13px] items-center justify-center bg-transparent text-xs leading-normal text-[#00000050] hover:text-Orange uppercase border-none outline-none"
    >
      {children}
    </a>
  );
}
