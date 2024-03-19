'use client'
import { useState, useEffect } from 'react';
import { auth } from '@/app/firebase';

export default function Home() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        console.log('User logged in successfully!');
    } catch (error) {
        console.error(error);
    }
  };
  

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('User created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="container">
      <div className="flex flex-col justify-center min-h-80vh py-5">
        <h1>Log In</h1>
        
        <div className='flex flex-col gap-28 pb-44'>
          <form className='w-full flex flex-col justify-center' action={handleSignup}>

            <div className="space-y-12">
              <div className="pb-12">
                <div className="mt-10 flex flex-col gap-4">

                  <div className={`flex items-center gap-4`}>
                    <label htmlFor={`email`} className={`min-w-36 block font-medium leading-6 text-gray-900`}>
                      Email
                    </label>
                    <div className="mt-1">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type={`email`}
                          name={`email`}
                          id={`email`}
                          className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={`Email`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4`}>
                    <label htmlFor={`password`} className={`min-w-36 block font-medium leading-6 text-gray-900`}>
                      Password
                    </label>
                    <div className="mt-1">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type={`password`}
                          name={`password`}
                          id={`password`}
                          className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder={`Password`}
                        />
                      </div>
                    </div>
                  </div>

                  
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                  >
                    {isLoading ? 'Saving and Exporting...' : 'Save & Export'}
                  </button>
                  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
