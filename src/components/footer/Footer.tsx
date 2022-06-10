import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import styles from './Footer.module.scss';

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const handleClick = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <footer className={styles.footer}>
      <strong>© 2022 RCM Labs. All rights reserved.</strong>
    </footer>
  )
}

export default Footer