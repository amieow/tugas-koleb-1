import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize : {
        "xl" : ["21px","28px"],
        "2.5xl" : ["26px" , "normal"],
        "3.5xl" : ["32px","normal"],
        "5.5xl" : ["56px","normal"],
      },
      colors : {
        "primary" : "#0192FE",
        "bg" : "#FFF",
        "blue-bg" : "#F0F6FF"
      }
    },
  },
  plugins: [],
}
export default config
