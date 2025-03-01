import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                'ly-black': '#222222',
                'ly-white': '#FDFDFD',
                'ly-orange-400': '#FF9500',
                'ly-orange-500': '#EB8B2C',
                'ly-brown': '#B07D54',
                'ly-red': '#AA3B2B',
                'ly-green-400': '#02B659',
                'ly-green-500': '#1DA856',
                'ly-dark-azure-600': '#33475B',
                'ly-dark-azure-700': '#1E2536',
                'ly-dark-azure-800': '#1B202A',
                'ly-dark-azure-transparent': '#33475BE6',
                'ly-gray-50': '#F2F1FA',
                'ly-gray-100': '#EAF0F6',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                section: {
                    light: {
                        DEFAULT: 'hsl(var(--section-light))',
                        foreground: 'hsl(var(--section-light-foreground))',
                    },
                    medium: {
                        DEFAULT: 'hsl(var(--section-medium))',
                        foreground: 'hsl(var(--section-medium-foreground))',
                    },
                    dark: {
                        DEFAULT: 'hsl(var(--section-dark))',
                        foreground: 'hsl(var(--section-dark-foreground))',
                    },
                },
                form: {
                    DEFAULT: 'hsl(var(--form))',
                    foreground: 'hsl(var(--form-foreground))',
                    success: 'hsl(var(--form-success))',
                    error: 'hsl(var(--form-error))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['var(--font-DM-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config
