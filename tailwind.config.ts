import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* ── Greens (from HHAI logo) ── */
          blue:         '#0B4422',   // deep forest green — headers, nav, dark BGs
          'blue-mid':   '#1B6B38',   // medium green — gradients, borders
          'blue-light': '#EBF8F1',   // soft green tint — section BGs
          green:        '#00A850',   // bright logo green — accents, icons
          'green-light':'#E2F7EC',   // lightest green

          /* ── Purples (from HHAI logo) ── */
          orange:        '#7848A8',  // rich logo purple — CTA buttons, badges
          'orange-light':'#EEE6F8',  // light purple tint
          purple:        '#7848A8',  // same — explicit alias
          'purple-dark': '#562E8F',  // deeper purple — hover states
          'purple-light':'#EEE6F8',

          /* ── Neutrals ── */
          dark:  '#0F1720',          // rich near-black for body text
          gray:  '#64748B',          // blue-tinted gray
          cream: '#F8F6F3',          // warm off-white section backgrounds
        },
      },
      fontFamily: {
        /* Poppins is the only heading/display font — no serifs anywhere */
        sans:    ['var(--font-poppins)',  'var(--font-inter)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-poppins)',  'system-ui', 'sans-serif'], /* intentionally remapped — no serif */
        display: ['var(--font-poppins)',  'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)',  'system-ui', 'sans-serif'],
        body:    ['var(--font-inter)',    'system-ui', 'sans-serif'],
      },
      fontSize: {
        /* Fluid heading scale */
        'hero-xl': ['clamp(2.4rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-lg': ['clamp(2rem, 5vw, 3.5rem)',   { lineHeight: '1.1',  letterSpacing: '-0.015em'}],
        'section-title': ['clamp(1.7rem, 3.5vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'slide-right':'slideRight 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee':    'marquee 35s linear infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn:      { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:     { '0%': { opacity: '0', transform: 'translateY(30px)' },
                       '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideRight:  { '0%': { opacity: '0', transform: 'translateX(-30px)' },
                       '100%': { opacity: '1', transform: 'translateX(0)' } },
        marquee:     { '0%': { transform: 'translateX(0)' },
                       '100%': { transform: 'translateX(-50%)' } },
        shimmer:     { '0%': { backgroundPosition: '-200% 0' },
                       '100%': { backgroundPosition: '200% 0' } },
      },
      backgroundImage: {
        'hero-pattern':    'linear-gradient(135deg, rgba(11,68,34,0.92) 0%, rgba(0,168,80,0.72) 100%)',
        'section-pattern': 'linear-gradient(135deg, #EBF8F1 0%, #EEE6F8 100%)',
        'card-shine':      'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
      },
      boxShadow: {
        'green':  '0 4px 24px rgba(11,68,34,0.18)',
        'purple': '0 4px 24px rgba(120,72,168,0.25)',
        'card':   '0 2px 16px rgba(15,23,32,0.08)',
        'card-hover': '0 8px 32px rgba(15,23,32,0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
