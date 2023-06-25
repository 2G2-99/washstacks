import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '@/components/hero/Hero';
import Benefits from '@/components/sections/benefits/Benefits';
import ServiceComparison from '@/components/sections/comparison/ServiceComparison';
import Reviews from '@/components/sections/reviews/Reviews';
import AboutUs from '@/components/sections/about/AboutUs';
import AppDownload from '@/components/sections/app-download/AppDownload';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>WashStacks</title>
			</Head>
			<Hero />
			<Benefits />
			<ServiceComparison />
			<Reviews />
			<AboutUs />
			{/* <AppDownload /> */}
		</Layout>
	);
}
