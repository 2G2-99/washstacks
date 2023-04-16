import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Hero from '@/components/Hero';
import ScheduleAndFeatures from '@/components/sections/features';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Hero />
			<ScheduleAndFeatures />
		</Layout>
	);
}
