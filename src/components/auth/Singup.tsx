import { useState } from 'react';
import { auth } from '@/app/firebase';

export default function Singup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSignup = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            console.log('User created successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
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
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                    
                    </div>
                </div>
            </div>
        </form>
    );
};
