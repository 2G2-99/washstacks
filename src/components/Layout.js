import { Box } from '@chakra-ui/react';
import Head from 'next/head';

import Header from './header/Header';
import Footer from './footer/Footer';

export default function Layout({ children }) {
	return (
		<Box>
			<Head>
				<meta
					name="WashStacks"
					content="Laundry & Dry cleaning delivery service"
				/>
			</Head>
			<Header home />
			<main>{children}</main>
			<Footer />
		</Box>
	);
}
