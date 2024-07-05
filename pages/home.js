import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
     <header className="bg-white shadow">
  <div className="container mx-auto p-5 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Legalz</h1>
    <nav className="flex items-center justify-center">
      <Link href="/" className="mr-5 cursor-pointer">
        <span>Home</span>
      </Link>
      <Link href="/create" className="mr-5 cursor-pointer">
        <span>Create</span>
      </Link>
      <Link href="/legals" className="mr-5 cursor-pointer">
        <span>Legals</span>
      </Link>
      <Link href="/contracts" className="mr-5 cursor-pointer">
        <span>Contracts</span>
      </Link>
    </nav>
    <nav className="flex items-center">
      <Link href="/login">
        <span className="bg-black text-white py-2 px-4 rounded cursor-pointer">Logout</span>
      </Link>
    </nav>
  </div>
</header>


      <main className="container mx-auto py-16">
        <section className="text-center flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold">New issues are waiting to solve</h2>
            <p className="text-gray-600 mt-4">
              Search and solving your legal issue is now easier than ever. Just browse your issue and contact the resource person.
            </p>
            <button className="bg-red-500 text-white py-2 px-4 mt-6 rounded">Explore Now</button>
          </div>
          <div className="relative w-full md:w-1/2 mx-auto md:mx-0">
            <Image src="/abcd.avif" alt="Legalz" layout="responsive" width={400} height={400} objectFit="cover" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center">Search Legal Service Providers</h2>
          <div className="flex justify-center mt-8">
            <input type="text" placeholder="Search something" className="border p-2 rounded-l" />
            <button className="bg-red-500 text-white py-2 px-4 rounded-r">Search</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { name: 'Olivia Bennett', location: 'Main Street, New York', experience: '17 years', image: '/p1.avif', title: 'lawyer' },
              { name: 'Sarah Smith', location: 'Hills road, Delhi', experience: '12 years', image: '/p2.avif', title: 'lawyer' },
              { name: 'Sophia Anderson', location: 'Downtown, Chicago', experience: '10 years', image: '/p3.avif', title: 'arbitrator' },
            ].map((provider, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <Image src={provider.image} alt={provider.name} width={200} height={200} className="rounded-full mx-auto" />
                <h3 className="text-xl font-bold text-center mt-4">{provider.name}</h3>
                <p className="text-gray-600 text-center">{provider.title}</p>
                <p className="text-gray-600 text-center">{provider.location}</p>
                <p className="text-gray-600 text-center">{provider.experience} of experience</p>
                <button className="bg-red-500 text-white py-2 px-4 mt-4 rounded w-full">Contact</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}