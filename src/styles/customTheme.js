import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
	colors: {
		shade: '#e6f4fe',
		white: '#F7F7F7',
		grey: '#585C62',
		black: '#1B1B1B',
		blue: {
			50: '#bbebff',
			100: '#32a3f3',
			200: '#0890f1',
			300: '#2364aa',
			400: '#202B93',
		},
		turquoise: { 50: '#93ECE5', 100: '#2FCCBF' },
		pink: { 50: '#FBB4C2', 100: '#EF8EA2' },
		yellow: { 50: '#FFE5AE', 100: '#ffd06d' },
		alert: {
			success: '#80b918',
			warning: '#ea7317',
			danger: '#d00000',
		},
	},

	fonts: {
		heading: `Cabin, sans-serif`,
		body: `Roboto Flex, sans-serif`,
	},
});

export default customTheme;
