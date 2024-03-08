
'use client';
import {useState, FormEvent} from 'react'
import { useRouter } from 'next/navigation'
import InputF from '@/components/FormFields/InputF';
import TextA from '@/components/FormFields/TextA';
import fs from 'fs';


export default function NewProject() {
    const router = useRouter();

    const [handleButton, setHandleButton] = useState(false);
    const handleClick = (event:any) => {
        // 👇️ toggle class on click
        var parentE = event.currentTarget.parentElement;
        var row = parentE.getElementsByClassName('repeatableWrap');
        var duplicateObj = parentE.getElementsByClassName('inputRow');
        var duplicateI = parentE.getElementsByClassName('inputSingle');
        var duplicateLength = duplicateObj.length+1;

        const clone = duplicateObj[0].cloneNode(true);
        if( duplicateI.length > 0 ){
            duplicateLength = duplicateI.length;
        }
        //console.log( duplicateI );
        if( duplicateI.length > 0 ){
            clone.innerHTML = clone.innerHTML.replace(/(question|answer|video|link)( |-)\d+(?!\d)(?<=[13579])/gi, "$1$2"+(duplicateLength+1));
            clone.innerHTML = clone.innerHTML.replace(/(question|answer|video|link)( |-)\d+(?!\d)(?<=[02468])/gi, "$1$2"+(duplicateLength+2));
        }else{
            clone.innerHTML = clone.innerHTML.replace(/(question|answer|video|link)( |-)[0-9]/gi, "$1$2"+duplicateLength);
        }
        clone.id = duplicateObj[0].id+duplicateLength;
        row[0].appendChild(clone);
        setHandleButton(true);
    };

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
 
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        var fs = require('fs');

        var fileName = 'path/to/file';
        var stream = fs.createWriteStream(fileName);

        stream.once('open', function(fd) {
        var html = buildHtml();

        stream.end(html);
        });

        // event.preventDefault()
        // setIsLoading(true)
        // setError(null) // Clear previous errors when a new request starts
    
        // try {
        // const formData = new FormData(event.currentTarget)
        // const response = await fetch('/api/submit', {
        //     method: 'POST',
        //     body: formData,
        // })
    
        // if (!response.ok) {
        //     throw new Error('Failed to submit the data. Please try again.')
        // }
    
        // // Handle response if necessary
        // const data = await response.json()
        // // ...
        // } catch (error) {
        // // Capture the error message to display to the user
        // setError(error.message)
        //     console.error(error)
        // } finally {
        //     setIsLoading(false)
        // }
    }

    return (
        <div className='flex flex-col gap-28 pb-44'>
            <form className='w-full flex flex-col justify-center' onSubmit={onSubmit}>
                <div className="space-y-12">
                    <div className="pb-12">
                        <div className="mt-10 flex flex-col gap-4">

                            <InputF 
                                fieldElement={{
                                    typeI: 'input',
                                    inputT: 'text',
                                    textI: 'Name of Project',
                                    placeH: 'Test1',
                                    formInline: true
                                }}
                            />

                            <div className='flex items-center gap-20'>
                                <InputF 
                                    fieldElement={{
                                        typeI: 'input',
                                        inputT: 'text',
                                        textI: 'Main Header (H1)',
                                        placeH: 'Tester H1',
                                        formInline: true
                                    }}
                                />
                                
                                <InputF 
                                    fieldElement={{
                                        typeI: 'input',
                                        inputT: 'text',
                                        textI: 'Site URL To Link To',
                                        placeH: 'test',
                                        formInline: true
                                    }}
                                />
                            </div>
                            
                            <InputF 
                                fieldElement={{
                                    typeI: 'input',
                                    inputT: 'text',
                                    textI: 'Keywords',
                                    placeH: 'test,tester,testing',
                                    formInline: true
                                }}
                            />

                            <TextA 
                                fieldElement={{
                                    typeI: 'textarea',
                                    textI: 'Meta Description (150 Characters)',
                                    placeH: 'testing this field',
                                    rows: 5
                                }}
                            />

                            <h2 className='mt-6'>FAQ Section</h2>
                            <div className='repeatableSection'>
                                <div className='repeatableWrap flex flex-col gap-3 mb-5'>
                                    <div id="faq" className='inputRow flex items-center gap-20'>
                                        <InputF 
                                            fieldElement={{
                                                typeI: 'input',
                                                inputT: 'text',
                                                textI: 'Question 1',
                                                placeH: 'test is okay',
                                                formInline: true
                                            }}
                                        />
                                        
                                        <InputF 
                                            fieldElement={{
                                                typeI: 'input',
                                                inputT: 'text',
                                                textI: 'Answer 1',
                                                placeH: 'checking',
                                                formInline: true
                                            }}
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={handleClick}
                                    type="button"
                                    className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                                >
                                    Add FAQ
                                </button>
                            </div>

                            <h2 className='mt-6'>Video Section</h2>
                            <div className='repeatableSection'>
                                <div className='repeatableWrap flex flex-col gap-3 mb-5'>
                                    <div id="video" className='inputRow flex items-center gap-20'>
                                        <InputF 
                                            fieldElement={{
                                                typeI: 'input',
                                                inputT: 'text',
                                                textI: 'Video 1',
                                                placeH: 'https://www.youtube.com/embed/f4igJfT6iU0?si=7PckjR1-tDCLnq90?rel=0&amp;&amp;showinfo=0&amp;autoplay=0&amp;loop=0',
                                                formInline: true
                                            }}
                                        />
                                    </div>
                                </div>
                                <button
                                    onClick={handleClick}
                                    type="button"
                                    className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                                >
                                    Add Video URL
                                </button>
                            </div>

                            
                            <h2 className='mt-6'>Map Location</h2>
                            <InputF 
                                fieldElement={{
                                    typeI: 'input',
                                    inputT: 'text',
                                    textI: 'Address',
                                    placeH: 'street test 1, #9999',
                                    formInline: true
                                }}
                            />

                            
                            <h2 className='mt-6'>Footer</h2>
                            <div className='repeatableSection'>
                                <div className='repeatableWrap flex flex-col gap-3 mb-5'>
                                    <div id="usefullink" className='inputRow flex items-center gap-20'>
                                        <div className="inputSingle">
                                            <InputF 
                                                fieldElement={{
                                                    typeI: 'input',
                                                    inputT: 'text',
                                                    textI: 'Link 1',
                                                    placeH: '/testing',
                                                    formInline: true
                                                }}
                                            />
                                        </div>

                                        <div className="inputSingle">
                                            <InputF 
                                                fieldElement={{
                                                    typeI: 'input',
                                                    inputT: 'text',
                                                    textI: 'Link 2',
                                                    placeH: '/tester',
                                                    formInline: true
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <InputF 
                                    fieldElement={{
                                        typeI: 'input',
                                        inputT: 'text',
                                        textI: 'Company Link',
                                        placeH: 'https://test.com',
                                        formInline: true
                                    }}
                                />
                                <button
                                    onClick={handleClick}
                                    type="button"
                                    className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                                >
                                    Add Video URL
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-x-6">
                    <button onClick={() => router.back()} type="button" className="rounded-md border-2 px-3 py-2 border-red-600 hover:border-red-400 hover:bg-red-400 hover:text-white transition-all">
                        Back
                    </button>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="rounded-md border-2 border-indigo-600 px-3 py-2 font-semibold text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                    >
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                    >
                        {isLoading ? 'Saving and Exporting...' : 'Save & Export'}
                    </button>
                </div>
            </form>
        </div>
    )
}
