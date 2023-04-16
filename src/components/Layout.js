import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

import Navbar from './navigation/Navbar';
import { Link } from '@chakra-ui/next-js';
import Footer from './Footer';
export const siteTitle = 'WashStacks';

export default function Layout({ children, home }) {
	return (
		<Box>
			<Head>
				<meta
					name="WashStacks"
					content="Laundry & Dry cleaning delivery service"
				/>
			</Head>
			<Box
				as="header"
				position="fixed"
				top="0"
				left="0"
				right="0"
				w="100%"
				zIndex={10}
			>
				{home || !home ? <Navbar /> : null}
			</Box>
			<main>
				{children}
				{!home && <Link href="/">← Back to home</Link>}
			</main>
			<Footer />
		</Box>
	);
}
