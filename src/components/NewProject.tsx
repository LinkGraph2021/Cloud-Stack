
'use client';
import {useState} from 'react'
import { useRouter } from 'next/navigation'
import InputF from '@/components/FormFields/InputF';
import TextA from '@/components/FormFields/TextA';

export default function NewProject() {
    const router = useRouter();

    const [handleButton, setHandleButton] = useState(false);
    const handleClick = (event:any) => {
        // 👇️ toggle class on click
        var parentE = event.currentTarget.parentElement;
        var row = parentE.getElementsByClassName('repeatableWrap');
        var duplicateObj = parentE.getElementsByClassName('inputRow');
        var duplicateI = parentE.getElementsByClassName('inputSingle')
        var duplicateLength = duplicateObj.length+1;
        
        const clone = duplicateObj[0].cloneNode(true);
        clone.innerHTML = clone.innerHTML.replace(/(question|answer|video|link)( |-)[0-9]/gi, "$1$2"+duplicateLength);
        clone.id = duplicateObj[0].id+duplicateLength;
        row[0].appendChild(clone);
        setHandleButton(true);

        console.log( duplicateObj );
      };

    return (
        <div className='flex flex-col gap-28'>
            <form className='w-full flex flex-col justify-center'>
                <div className="space-y-12">
                    <div className="pb-12">
                        <div className="mt-10 flex flex-col gap-4">

                            <InputF 
                                fieldElement={{
                                    typeI: 'input',
                                    inputT: 'text',
                                    textI: 'Name of Project',
                                    placeH: 'Field.',
                                    formInline: true
                                }}
                            />

                            <div className='flex items-center gap-20'>
                                <InputF 
                                    fieldElement={{
                                        typeI: 'input',
                                        inputT: 'text',
                                        textI: 'Main Header (H1)',
                                        placeH: 'Field.',
                                        formInline: true
                                    }}
                                />
                                
                                <InputF 
                                    fieldElement={{
                                        typeI: 'input',
                                        inputT: 'text',
                                        textI: 'Site URL To Link To',
                                        placeH: 'Field.',
                                        formInline: true
                                    }}
                                />
                            </div>
                            
                            <InputF 
                                fieldElement={{
                                    typeI: 'input',
                                    inputT: 'text',
                                    textI: 'Keywords',
                                    placeH: 'Field.',
                                    formInline: true
                                }}
                            />

                            <TextA 
                                fieldElement={{
                                    typeI: 'textarea',
                                    textI: 'Meta Description (150 Characters)',
                                    placeH: 'Field.',
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
                                                placeH: 'Field.',
                                                formInline: true
                                            }}
                                        />
                                        
                                        <InputF 
                                            fieldElement={{
                                                typeI: 'input',
                                                inputT: 'text',
                                                textI: 'Answer 1',
                                                placeH: 'Field.',
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
                                                placeH: 'Field.',
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
                                    placeH: 'Field.',
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
                                                    placeH: 'Field.',
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
                                                    placeH: 'Field.',
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
                                        textI: 'Address',
                                        placeH: 'Field.',
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
                        type="submit"
                        className="rounded-md border-2 border-indigo-600 px-3 py-2 font-semibold text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                    >
                        Save
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                    >
                        Save & Export
                    </button>
                </div>
            </form>
        </div>
    )
}
