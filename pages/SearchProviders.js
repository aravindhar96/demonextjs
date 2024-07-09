// components/SearchProviders.js
import Image from 'next/image';

export default function SearchProviders() {
  const providers = [
    { name: 'Olivia Bennett', location: 'Main Street, New York', experience: '17 years', image: '/p1.avif', title: 'lawyer', rating: 5 },
    { name: 'Sarah Smith', location: 'Hills road, Delhi', experience: '12 years', image: '/p2.avif', title: 'lawyer', rating: 5 },
    { name: 'Sophia Anderson', location: 'Downtown, Chicago', experience: '10 years', image: '/p3.avif', title: 'arbitrator', rating: 4 },
  ];

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-red-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.664 5.116h5.364c.967 0 1.371 1.24.588 1.81l-4.367 3.18 1.664 5.116c.3.921-.755 1.688-1.54 1.116L10 13.348l-4.366 3.181c-.785.572-1.84-.195-1.54-1.116l1.664-5.116-4.367-3.18c-.783-.57-.379-1.81.588-1.81h5.364l1.664-5.116z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="mt-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Search Legal Service Providers</h2>
      <div className="flex flex-col md:flex-row justify-center mb-16">
        <input
          type="text"
          placeholder="Search something"
          className="border p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-full md:w-auto mb-4 md:mb-0"
        />
        <button className="bg-red-500 text-white py-2 px-4 rounded-r-md hover:bg-red-600 w-full md:w-auto">Search</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((provider, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <Image src={provider.image} alt={provider.name} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {renderRating(provider.rating)}
                </div>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">{provider.title}</span>
              </div>
              <h3 className="text-lg font-bold">{provider.name}</h3>
              <p className="text-gray-500"><i className="fas fa-map-marker-alt"></i> {provider.location}</p>
              <p className="text-gray-500">{provider.experience} of experience</p>
              <button className="bg-red-500 text-white py-2 px-4 mt-4 rounded w-full hover:bg-red-600">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
