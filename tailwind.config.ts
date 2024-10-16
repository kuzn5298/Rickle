import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      sigmar: ['var(--font-sigmar)'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        card: 'var(--card)',
        white: 'var(--white)',
        grey: 'var(--grey)',
      },
      boxShadow: {
        'hover-card': '0 0 24px 0 var(--primary)',
      },
    },
  },
  plugins: [],
};
export default config;
