import { __unstable__loadDesignSystem } from 'tailwindcss';

const css = `
@import "tailwindcss";

@theme {
  --font-family-display: "Satoshi", "sans-serif";

  --breakpoint-3xl: 1920px;

  --color-neon-pink: oklch(71.7% 0.25 360);
  --color-neon-lime: oklch(91.5% 0.258 129);
  --color-neon-cyan: oklch(91.3% 0.139 195.8);
}
`
const designSystem = __unstable__loadDesignSystem(css)

console.log(designSystem.candidatesToCss([
  'max-w-lg',
  '3xl:max-w-xl',
  'font-display',
  'text-4xl',
  'text-neon-cyan'
]))
