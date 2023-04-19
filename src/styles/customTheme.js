import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
	colors: {
		brand: {
			100: '#0890f1',
			200: '#32a3f3',
			250: '#bbebff',
			300: '#2fccc0',
			400: '#ffd06d',
			500: '#ea7317ff',
			600: '#d00000',
			700: '#80b918',
			800: '#1B1B1B',
			900: '#F7F7F7',
		},
	},
	fonts: {
		heading: `Cabin, sans-serif`,
		body: `Roboto Flex, sans-serif`,
	},
});

export default customTheme;
