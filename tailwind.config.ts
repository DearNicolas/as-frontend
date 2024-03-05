import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'footer-texture': "url('https://media.istockphoto.com/id/1745254605/pt/foto/new-years-and-christmas-mood.jpg?s=2048x2048&w=is&k=20&c=D77FjmYA0eXXlFrKQPdASQvNY7k2tfv550CrqJjC3Q0=')",
      },
    },
  },
  plugins: [],
};
export default config;
