import type { Config } from 'tailwindcss';
export default {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{ivory:'#F7F3EE',espresso:'#2B2220',rose:'#C79A84',sage:'#8A9A8B'},fontFamily:{serif:['var(--font-cormorant)'],sans:['var(--font-manrope)']}}},plugins:[]} satisfies Config;
