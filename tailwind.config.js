/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html", /* IMPORTANTE: Ahora lee todos los archivos HTML (nosotros, servicios, etc.) */
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corporate: {
          blue: '#1E3A8A',    /* Azul Marino muy institucional */
          dark: '#0F172A',    /* Casi negro para fondos oscuros */
          orange: '#F58220',  /* El naranjo de tu marca para destacar */
          gray: '#64748B',    /* Gris pizarra elegante para textos */
          light: '#F8FAFC',   /* Fondo gris súper claro para dar respiro */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}