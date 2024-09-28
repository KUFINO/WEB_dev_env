import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			sparkler: '#f3f3eb', // Light beige
            phoenix: '#F1FD81',   // Bright yellow 
            dobby: '#1e1e21',     // Dark 
  			customGreen: '#28B600',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			customExtra: 'var(--extra)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		  borderRadius: {
			'25p': '10% 30% 50% 70%',
			'15p': '15%', 
			mixed :'10% 25%',
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)',
		  },
  		backgroundImage: {
			'login_side' :"url('/assets/images/login_side_image.jpeg')",
  			'onboarding-screen': "url('/assets/images/neon_green.jpeg')"
  		},
		  fontFamily: {
			cabinet: ['Cabinet', 'sans-serif'], 
		  },
  		fontWeight: {
  			'extra-bold': '900'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
