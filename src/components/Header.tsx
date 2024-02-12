import Link from 'next/link';

export default function header() {
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
                        <Link href="/">Sing Up</Link>
                        <Link href="/">User Logged In</Link>
                    </div>
                </div>
            </div>

        </header>
    );
}