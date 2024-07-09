import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      console.log('Login successful:', data);
      router.push('/home'); // Redirect to the home page after successful login
    } else {
      console.error('Login failed:', data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/images.jpg')" }}>
        {/* Background image for desktop */}
      </div>
      <div className="flex-1 flex items-center justify-center p-6 md:p-0">
        <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-red-500 w-6 h-6 rounded-full inline-block"></span> &nbsp;&nbsp;Legalz
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Sign in
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link href="/register">
              <span className="text-blue-500">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-cover bg-center md:hidden" style={{ backgroundImage: "url('/images.jpg')" }}>
        {/* Background image for mobile */}
      </div>
    </div>
  );
}
