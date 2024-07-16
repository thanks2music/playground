import Image from "next/image";
import styles from "../../../app/styles/layouts/header.module.sass";

const Header = () => {
  return (
    <header className={styles.playground__header}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </header>
  );
};

export default Header;
