type PrductHeaderProps = {
  title: string;
};
export default function ProductHeader({ title }: PrductHeaderProps) {
  return (
    <header className="h-[192px] md:h-[336px] flex justify-center items-end pb-8 md:pb-[97px] bg-Black ">
      <h1 className="text-xl2 md:text-xl4 text-White uppercase">{title}</h1>
    </header>
  );
}
