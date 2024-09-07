// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1300': { 'max': '1455px' },
        'max-820':{'max':'817px'},
        'max-730':{'max':'730px'},
        'max-700':{'max':'700px'},
        'max-540':{'max':'540px'},
        'max-800':{'max':'800px'},
        'max-1460':{'max':'1467px'},
        'max-1324':{'max':'1324px'},
        'max-1337':{'max':'1337px'},
      },
      keyframes: {
        'scale-up-down': {
          '0%': { transform: 'scale(.1)' },
          '20%': { transform: 'scale(.7)' },
          '40%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '75%': { transform: 'scale(.7)' },
          '100%': { transform: 'scale(.1)' },
        },
        "water-wave":{
          "0%":
          {
              borderRadius:"56% 44% 70% 30% /30% 54% 46% 70% "
          },
          "50%" :{
              borderRadius: "56% 44% 70% 30% /28% 14% 26% 70%"
          },
          "100%": {
              borderRadius: "56% 44% 70% 30% /30% 54% 46% 70%"
          }
        },
        'bounce-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-75px)' },
        },
      },
      animation: {
        'scale-up-down': 'scale-up-down 2s  ease-in-out infinite',
        'bounce-up-down': 'bounce-up-down 3s ease-in-out infinite',
        'water-wave':'water-wave 2s infinite',
        
      },
      
    },
  },
  plugins: [],
};
