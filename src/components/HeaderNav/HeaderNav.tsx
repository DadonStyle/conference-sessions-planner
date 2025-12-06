"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./HeaderNav.module.css";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={pathname === "/" ? styles.active : ""}>
        Sessions
      </Link>
      <Link href="/agenda" className={pathname === "/agenda" ? styles.active : ""}>
        My Agenda
      </Link>
    </nav>
  );
};

export { HeaderNav };
