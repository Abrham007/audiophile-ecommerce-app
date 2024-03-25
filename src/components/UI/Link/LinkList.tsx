import Link from "next/link";

type LinkListProps = {
  className: string;
};
export default function LinkList({ className }: LinkListProps) {
  return (
    <ul className={className}>
      <li>
        <Link
          href="/"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/headphones"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          HEADPHONES
        </Link>
      </li>
      <li>
        <Link
          href="/speakers"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          SPEAKERS
        </Link>
      </li>
      <li>
        <Link
          href="/earphones"
          className="text-xs text-White hover:text-Orange tracking-[0.125rem] uppercase"
        >
          EARPHONES
        </Link>
      </li>
    </ul>
  );
}
