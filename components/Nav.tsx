import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <h1 className="logo">KP Alligned Yoga</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav>
        <ul>
          <li>
            <Link href="blog">Blog</Link>
          </li>
          <li>
            <Link href="yoga">Yoga</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="community">Community</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </header>
  );
}
