import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import styles from './Hosting.module.scss'
import Link from 'next/link';
interface Hosting {
    hosting: string;
    isSetup?: boolean;
}
  
type HostingObj = Hosting[];
export default function Projects({ hostingElements } :HostingObj) {
    return (
        <div className='flex flex-col w-full gap-7 mt-6'>
            {hostingElements.map((HostingE:any,i:number) => {
                {
                    return(
                        <div key={HostingE.nameP + i} className={`${styles.hosting} flex flex-col gap-2`}>
                            <div className={`${styles.hostingTop} flex gap-6 items-center`}>
                                <div className={`${styles.hostingName} ${HostingE.isSetup ? 'dataTrue':'dataFalse'} min-w-44`}>
                                    <strong>{HostingE.hosting}</strong> <span className={``}>{HostingE.isSetup ? 'Live':'Not Set Up'}</span>
                                </div>
                                <div className={``}>
                                    {HostingE.isSetup ? 
                                        <Link href="/projects/project/hosting" className='rounded-md border-2 border-indigo-600 bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all'>
                                            Check Settings
                                        </Link>
                                        :
                                        <Link href="/projects/project/hosting" className='rounded-md border-2 border-indigo-600 text-indigo-600 px-3 py-2 font-semibold shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all'>
                                            Set Up
                                        </Link>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
