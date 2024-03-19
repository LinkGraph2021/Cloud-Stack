'use client'
import { useEffect } from 'react';
import useAuthState from '@/app/profile';
import Link from 'next/link';
import { auth } from '@/app/firebase';

export default function header() {

    const user = useAuthState();

    useEffect(() => {
        if (user) {
            // User is logged in
            console.log('User is logged in:', user);
        } else {
            // User is logged out
            console.log('User is logged out');
        }
    }, [user]);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            console.log('User logged out successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header>
            <div className="container">
                <div className="flex items-center justify-between pt-12 pb-6">
                    <div className="w-1/2	">
                        <Link href="/projects">Cloud Sites Dashboard</Link>
                    </div>
                    <div className="w-1/2	flex justify-end items-center gap-8">
                        <Link href="/projects">Reports</Link>
                        <Link href="/projects/new" className='rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Create a New Project</Link>
                        {user && <button onClick={handleLogout}>Sign Out</button>}
                        {user && <Link href="/">User Logged In</Link>}
                    </div>
                </div>
            </div>

        </header>
    );
}