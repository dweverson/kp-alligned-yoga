import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="blog">Blog</Link>
      <Link href="yoga">Yoga</Link>
      <Link href="about">About</Link>
      <Link href="community">Community</Link>
      <Link href="contact">Contact</Link>
    </nav>
  );
}
