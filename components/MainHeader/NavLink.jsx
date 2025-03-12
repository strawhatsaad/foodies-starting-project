"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
}
