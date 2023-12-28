// Import necessary modules
"use client";
import React, { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

// Simulate API call for authentication with sample data
const authenticateUser = async (username, password) => {
  // Simulate an API call with sample data
  return new Promise((resolve, reject) => {
    // Simulate a delay to mimic the asynchronous nature of API calls
    setTimeout(() => {
      // Replace this with your actual authentication logic
      const sampleUsers = [
        { username: 'admin', password: 'password', role: 'admin' },
        { username: 'user1', password: 'pass123', role: 'user' },
        { username: 'john_doe', password: 'secret', role: 'user' },
      ];

      const matchedUser = sampleUsers.find(user => user.username === username && user.password === password);

      if (matchedUser) {
        resolve({ username: matchedUser.username, role: matchedUser.role });
      } else {
        reject(new Error('Authentication failed'));
      }
    }, 1000); // Simulated 1-second delay
  });
};

// Define the Home component
export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = async () => {
    try {
      

      // Replace this with your actual authentication logic
      const userData = await authenticateUser(username, password);

      // If authentication is successful
      setAuthenticated(true);
      // You can redirect to the dashboard using the Redirect component from react-router-dom
    } catch (error) {
      // If authentication fails
      setAuthenticated(false);
      alert('Login failed. Please check your credentials.');
    }
  };

  const router = useRouter();

  // Redirect to the dashboard if authenticated
  if (authenticated) {
    router.push("./dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Admin Login Section */}
      <h1 className="text-4xl font-semibold mb-4 text-center text-white">
        Welcome to Admin Portal
      </h1>
      {!authenticated && (
        <div className="max-w-2xl w-full mt-8">
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md text-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md text-black"
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </main>
  );
}


