import Head from 'next/head';
import Features from '../components/features';
import Hero from '../components/hero';
import Pricing from '../components/pricing';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>1787 Coworking</title>
        <meta name="description" content="Middleburg coworking space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <main>
        <Features />
        <Pricing />
      </main>
    </div>
  );
}
