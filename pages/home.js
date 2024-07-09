// pages/index.js
import Header from '../pages/Header';
import SearchProviders from '../pages/SearchProviders';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />

      <main className="container mx-auto py-8 px-4 md:py-16">
        <section className="text-center flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold">New issues are waiting to solve</h2>
            <p className="text-gray-600 mt-4">
              Search and solving your legal issue is now easier than ever. Just browse your issue and contact the resource person.
            </p>
            <button className="bg-red-500 text-white py-2 px-4 mt-6 rounded">Explore Now</button>
          </div>
          <div className="relative w-full md:w-1/2 mx-auto md:mx-0">
            <Image src="/abcd.avif" alt="Legalz" layout="responsive" width={400} height={400} objectFit="cover" />
          </div>
        </section>

        <SearchProviders />
      </main>
    </div>
  );
}
