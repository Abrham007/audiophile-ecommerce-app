export default function NavBar() {
  return (
    <nav>
      <button className="w-4 h-4 cursor-pointer border-none outline-none md:hidden">
        <img src="./shared/mobile/hamburger.svg" alt="hamberger icon" />
      </button>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <dialog></dialog>
    </nav>
  );
}
