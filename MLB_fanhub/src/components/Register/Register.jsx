import React, { useState } from 'react';
import { auth } from '../../firebase'; // Import the auth instance
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from 'react-router-dom'; // Import Link if you're using react-router-dom

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');  // Add state for full name
  const [phoneNumber, setPhoneNumber] = useState(''); // Add state for phone number
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully!");
      navigate("/");
      // Here, you would typically also save the full name and phone number
      // to your database (e.g., using Firebase Firestore).  The user is
      // authenticated, but you need to store the additional information.
      // Example (using Firestore - you'd need to set up Firestore):
      // const user = auth.currentUser;
      // await firestore.collection('users').doc(user.uid).set({
      //   fullName: fullName,
      //   phoneNumber: phoneNumber,
      //   email: email, // You can also store the email
      // });

      // Redirect or show success message (e.g., using react-router-dom)
      // history.push('/dashboard'); // Example
    } catch (error) {
      setError(error.message);
      console.error("Error registering user:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}> {/* Add onSubmit */}
              <div>
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full Name:
                </label>
                <input
                  type="text" // Correct type for name
                  name="fullName"
                  id="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  value={fullName} // Bind value to state
                  onChange={(e) => setFullName(e.target.value)} // Handle change
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number:
                </label>
                <input
                  type="tel" // Correct type for phone number
                  name="phoneNumber"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1234567890"
                  value={phoneNumber} // Bind value to state
                  onChange={(e) => setPhoneNumber(e.target.value)} // Handle change
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john@gmail.com"
                  value={email} // Bind value to state
                  onChange={(e) => setEmail(e.target.value)} // Handle change
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password} // Bind value to state
                  onChange={(e) => setPassword(e.target.value)} // Handle change
                  required
                />
              </div>
              <button
                type="submit" // Important: Keep type="submit"
                className="w-full text-white bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;