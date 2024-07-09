import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState(null); // State for registration message

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegistrationMessage('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, email, phone, password })
      });

      const data = await res.json();

      if (res.ok) {
        setRegistrationMessage('Registration successful');
        console.log('Registration successful:', data);
        // Optionally handle successful registration (e.g., redirect to login page)
      } else {
        setRegistrationMessage('Registration failed');
        console.error('Registration failed:', data);
      }
    } catch (error) {
      setRegistrationMessage('Error registering');
      console.error('Error registering:', error);
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
            <span className="bg-red-500 w-6 h-6 rounded-full inline-block"></span> &nbsp;&nbsp;Legalz Registration
          </h2>
          <form onSubmit={handleRegister}>
            <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-2">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>
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
                type="tel"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Sign up
            </button>
          </form>
          {registrationMessage && (
            <p className={`mt-4 text-center ${registrationMessage.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
              {registrationMessage}
            </p>
          )}
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link href="/login">
              <span className="text-blue-500">Sign in</span>
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
