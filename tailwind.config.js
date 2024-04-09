/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
  theme: {
    extend: {
		backgroundImage: {
       		'hero-image': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fmakeagif.com%2Fgif%2Ftu-tu-tu-tu-max-verstappen-full-meme-2xocbn&psig=AOvVaw1HjipsXom9rUF63lUcebFb&ust=1712520196842000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiGv4KxroUDFQAAAAAdAAAAABAE')",
      	}},
  },
  plugins: [],
}

