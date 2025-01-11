import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primaryPurple: "hsl(257, 27%, 26%)",
				primaryGrey: "hsl(0, 0%, 75%)",
				primaryCyan: "hsl(180, 66%, 49%)",
				textGrayish: "hsl(257, 7%, 63%)",
				primaryDarkFooter: "#232027",
			},
		},
	},
	plugins: [],
} satisfies Config;

/* ## Colors

### Primary

- Cyan: hsl(180, 66%, 49%)
- Dark Violet: hsl(257, 27%, 26%)

### Secondary

- Red: hsl(0, 87%, 67%)

### Neutral

- Gray: hsl(0, 0%, 75%)
- Grayish Violet: hsl(257, 7%, 63%)
- Very Dark Blue: hsl(255, 11%, 22%)
- Very Dark Violet: hsl(260, 8%, 14%) */
