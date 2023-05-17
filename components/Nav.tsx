import Link from "next/link";
import { Lovers_Quarrel } from "@next/font/google";
import { cinzel } from "@/app/page";

const loversQuarrel = Lovers_Quarrel({
  subsets: ["latin"],
  weight: "400",
});

export default function Nav() {
  return (
    <header>
      <Link href="/">
        <h1 className={`${loversQuarrel.className} logo`}>KP Alligned Yoga</h1>
      </Link>
      <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav className={cinzel.className}>
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
