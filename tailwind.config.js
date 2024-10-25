/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'cream':'#EBE4D3',
        'green-gray':'#304149',
        'blue-gray':'#6B777C',
        'blue':'#BECED4',
        'orange':'#E9B98B',
        'gold':'#DCAF84',
      },
      backgroundImage: {
        'TicTacToe': "url('/TicTacToe.png')",
        'HollowPlanet': "url('/HollowPlanet.png')",
        'HollowStar': "url('/HollowStar.png')",
        'Slot': "url('/Slot.png')",
        'PlanetIcon': "url('/PlanetIcon.png')",
        'StarIcon': "url('/StarIcon.png')",
        'StarWins': "url('/StarWins.png')",
        'PlanetWins': "url('/PlanetWins.png')",
        'Draw': "url('/Draw.png')",
        'TicTacToeBackground': "url('/TicTacToeBackground.png')",
      }
    },
  },
  plugins: [],
}