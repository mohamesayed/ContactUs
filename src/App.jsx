import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Navbar from './components/Navbar';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create a custom theme
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#4A154B',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Cairo, Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>
          <ContactHero />
          <ContactMethods />
          <ContactForm />
        </main>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
