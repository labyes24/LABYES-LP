import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "ly-black": "#222222",
        "ly-white": "#FDFDFD",

        "ly-orange-400": "#FF9500",
        "ly-orange-500": "#EB8B2C",

        "ly-brown": "#B07D54",
        "ly-red": "#AA3B2B",

        "ly-green-400": "#02B659",
        "ly-green-500": "#1DA856",

        "ly-dark-azure-600": "#33475B",
        "ly-dark-azure-700": "#1E2536",
        "ly-dark-azure-800": "#1B202A",
        "ly-dark-azure-transparent": "#33475BE6",

        "ly-gray-50": "#F2F1FA",
        "ly-gray-100": "#EAF0F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
