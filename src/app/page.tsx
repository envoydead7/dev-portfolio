import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="min-h-screen">
    <Head>
        <title>Mustafa Abbas | Portfolio</title>
        <meta name="description" content="Professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <Hero />
    </main>
    </div>
  );
}
