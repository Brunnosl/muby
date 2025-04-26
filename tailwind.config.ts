
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				pink: {
					50: '#fef1fa',
					100: '#fee5f7',
					200: '#ffcbf1',
					300: '#ffa1e4',
					400: '#ff7ad8',
					500: '#ff4eca',
					600: '#ff20b5',
					700: '#e50e97',
					800: '#bf0d7d',
					900: '#9c1166',
					950: '#650035',
				},
				purple: {
					50: '#f8f6ff',
					100: '#f4effb',
					200: '#e9dff9',
					300: '#d9c4f5',
					400: '#c29eee',
					500: '#ab78e5',
					600: '#9754d8',
					700: '#8340c2',
					800: '#6c359f',
					900: '#5a2e80',
					950: '#371c4d',
				},
				gold: {
					50: '#faf8eb',
					100: '#f8f1ca',
					200: '#f2e297',
					300: '#eace56',
					400: '#e4b72d',
					500: '#d19813',
					600: '#b5730f',
					700: '#8f5110',
					800: '#784014',
					900: '#673615',
					950: '#3d1b09',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-app': 'linear-gradient(to right bottom, #9b87f5, #ff4eca)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
