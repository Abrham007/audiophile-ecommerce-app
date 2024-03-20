type LinkListProps = {
  className: string;
};
export default function LinkList({ className }: LinkListProps) {
  return (
    <ul className={className}>
      <li>
        <a
          href="/"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/headphones"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          HEADPHONES
        </a>
      </li>
      <li>
        <a
          href="/speakers"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          SPEAKERS
        </a>
      </li>
      <li>
        <a
          href="/earphones"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          EARPHONES
        </a>
      </li>
    </ul>
  );
}
