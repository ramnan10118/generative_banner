import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={150}
          height={150}
          className={styles.logo}
        />
        <p>
          Edit <code>pages/index.js</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://openai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 