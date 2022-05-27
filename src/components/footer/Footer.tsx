import Container from '../container/Container'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const handleClick = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Container>
      <footer>
        {/* <button onClick={handleClick}>Toggle dark mode</button> */}
      </footer>
    </Container>
  )
}

export default Footer