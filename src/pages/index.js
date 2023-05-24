import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "@/components/hero/Hero";
import Benefits from "@/components/sections/benefits/Benefits";
import ServiceComparison from "@/components/sections/comparison/wrapper";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>WashStacks</title>
      </Head>
      <Hero />
      <Benefits />
      <ServiceComparison />
    </Layout>
  );
}
