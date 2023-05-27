import { ChakraProvider } from '@chakra-ui/react';

// Theme
import customTheme from '@/styles/customTheme';

// Fonts
import '@fontsource/cabin';
import '@fontsource/cabin/variable.css';
import '@fontsource/roboto-flex';

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
