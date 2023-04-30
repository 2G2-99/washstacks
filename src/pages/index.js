import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '@/components/hero/Hero';
import ScheduleAndFeatures from '@/components/sections/features';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>WashStacks</title>
			</Head>
			<Hero />
			<ScheduleAndFeatures />
		</Layout>
	);
}
