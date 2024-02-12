import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import styles from './Projects.module.scss'
import Link from 'next/link';
interface Project {
    nameP: string;
    contentStatus?: boolean;
    hostings?: string[];
  }
  
type ProjectObj = Project[];
export default function Projects({ projectsElement } :ProjectObj) {
    return (
        <div className='flex flex-col w-full gap-7'>
            {projectsElement.map((projectE:any,i:number) => {
                {
                    return(
                        <div key={projectE.nameP + i} className={`${styles.project} flex flex-col gap-2`}>
                            <div className={`${styles.projectTop} flex gap-12 items-center`}>
                                <div className={`${styles.projectName}`}>
                                    {projectE.nameP}
                                </div>
                                <div className={`${styles.button}`}>
                                    <Link href="/projects/project" className='rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                        Edit this Project
                                    </Link>
                                </div>
                            </div>
                            <div className={` flex gap-12`}>
                                <div className={`${projectE.contentStatus ? 'dataTrue':'dataFalse'} ${styles.projectBottom} projectContent`}>
                                    Content: <span>{projectE.contentStatus ? 'Added':'Not Added'}</span>
                                </div>
                                <div className={`${projectE.hostings ? 'dataTrue':'dataFalse'} ${styles.projectBottom} projectHosting`}>
                                    Hosting <span>{projectE.hostings ? projectE.hostings:'Not Live'}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
