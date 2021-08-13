import Head from 'next/head';
import Pricing from '../components/pricing';

export default function PricingPage() {
  return (
    <div>
      <Head>
        <title>1787 Coworking</title>
        <meta name="description" content="Middleburg coworking space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Pricing />
    </div>
  );
}
