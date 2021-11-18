module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				'logo': ['Lobster', 'serif']
			},
			colors: {
				matheme:{
					champagne: '#ebe0d0',
					hotpink: '#ec9ec0',
					fuchsia: '#ff0080',
					pink: '#a91b60'
				}
			}
		},
	}
}
