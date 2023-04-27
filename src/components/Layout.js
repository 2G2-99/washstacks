import { Box, SlideFade } from '@chakra-ui/react';
import Head from 'next/head';

import Navbar from './navigation/Navbar';
import { Link } from '@chakra-ui/next-js';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import ScrolledNavbar from './navigation/ScrolledNavbar';

export default function Layout({ children, home = false }) {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		setScrollPosition(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition]);

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
				{home && scrollPosition === 0 ? <Navbar /> : <ScrolledNavbar />}
			</Box>
			<main>
				{children}
				{home ? null : <Link href="/">← Back to home</Link>}
			</main>
			<Footer />
		</Box>
	);
}
