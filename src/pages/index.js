import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '@/components/hero/Hero';
import Benefits from '@/components/sections/benefits/Benefits';
import ServiceComparison from '@/components/sections/comparison/ServiceComparison';
import Reviews from '@/components/sections/reviews/Reviews';
import AboutUs from '@/components/sections/about/AboutUs';
import AppDownload from '@/components/sections/app-download/AppDownload';
import { Divider } from '@chakra-ui/react';
import FAQ from '@/components/sections/faq/FAQ';
import Team from '@/components/sections/dev-team/Team';
import Banner from '@/components/upsell-banner/Banner';

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
			<Banner />
			<Team />
			<AppDownload />
			<Divider borderColor={'grey'} />
			<FAQ />
			<Banner />
		</Layout>
	);
}
