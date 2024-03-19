/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client';
import {useState} from 'react'
import { useRouter } from 'next/navigation'


export interface FormObj {
    titleH?: string
    formElements: Array<any>
    formBack?: boolean
    toggleButton?: boolean
    formInline?: boolean
    formButton?: string
}
export interface FormArr {
    formObj: FormObj;
}



import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function BasicForm({formObj}:FormArr) {
    const router = useRouter();

    const [handleButton, setHandleButton] = useState(false);
    const handleClick = (event:any) => {
        // 👇️ toggle class on click
        event.currentTarget.parentElement.classList.toggle('expandInput');
        setHandleButton(true);
    
        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
      };

    return (
        <div className='flex flex-col gap-28'>
            <form className='w-full flex flex-col justify-center'>
                <div className="space-y-12">
                    <div className="pb-12">
                        {formObj.titleH && <h2 className="text-base font-semibold leading-7 text-gray-900">{formObj.titleH}</h2>}

                        <div className="mt-10 flex flex-col gap-4">
                            {formObj.formElements.map((formE:any,i:number) => {
                                switch( formE.typeI ){
                                    case 'section':
                                        return(
                                            <h2 key={formE.textI} className='mt-6'>{formE.textI}</h2>
                                        );
                                    case 'input':
                                        return (
                                            <div key={formE.textI} className={`${formObj.formInline ? 'flex items-center gap-4':''}`}>
                                                <label htmlFor={formE.textI.replaceAll(' ', '-')} className={`${formObj.formInline ? 'min-w-36':''} block font-medium leading-6 text-gray-900`}>
                                                    {formE.textI}
                                                </label>
                                                <div className="mt-1">
                                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        {formE.prev && <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">workcation.com/</span>}
                                                        <input
                                                            type={formE.inputT}
                                                            name={formE.textI.replaceAll(' ', '-')}
                                                            id={formE.textI.replaceAll(' ', '-')}
                                                            autoComplete={formE.inputT}
                                                            className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6"
                                                            placeholder={formE.placeH ? formE.placeH : formE.textI}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    case 'double':
                                        return (
                                            <div key={i} className={`${formObj.formInline ? 'flex flex-col flex-wrap gap-4':''}`}>
                                                {formE.inputs.map((inputW:any,i:number) => {
                                                    {
                                                        return(
                                                            <div key={inputW.textI1} className='flex items-center gap-20'>
                                                                {inputW.textI1 &&
                                                                    <div className='flex items-center'>
                                                                        <label htmlFor={inputW.textI1.replaceAll(' ', '-')} className={`${formObj.formInline ? 'min-w-36':''} block font-medium leading-6 text-gray-900`}>
                                                                            {inputW.textI1}
                                                                        </label>
                                                                        <div className="mt-1">
                                                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                                                {inputW.prev && <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">workcation.com/</span>}
                                                                                <input
                                                                                    type={inputW.inputT1}
                                                                                    name={inputW.textI1.replaceAll(' ', '-')}
                                                                                    id={inputW.textI1.replaceAll(' ', '-')}
                                                                                    autoComplete={inputW.inputT1}
                                                                                    className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6"
                                                                                    placeholder={inputW.placeH1 ? inputW.placeH1 : inputW.textI1}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                                {inputW.textI2 &&
                                                                    <div key={inputW.textI2} className='flex items-center'>
                                                                        <label htmlFor={inputW.textI2.replaceAll(' ', '-')} className={`${formObj.formInline ? 'min-w-36':''} block font-medium leading-6 text-gray-900`}>
                                                                            {inputW.textI2}
                                                                        </label>
                                                                        <div className="mt-1">
                                                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                                                {inputW.prev && <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">workcation.com/</span>}
                                                                                <input
                                                                                    type={inputW.inputT2}
                                                                                    name={inputW.textI2.replaceAll(' ', '-')}
                                                                                    id={inputW.textI2.replaceAll(' ', '-')}
                                                                                    autoComplete={inputW.inputT2}
                                                                                    className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6"
                                                                                    placeholder={inputW.placeH2 ? inputW.placeH2 : inputW.textI2}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        );
                                    case 'textarea' :
                                        return(
                                            <div key={formE.textI} className="">
                                                <label htmlFor={formE.textI.replaceAll(' ', '-')} className="block font-medium leading-6 text-gray-900">
                                                    {formE.textI}
                                                </label>
                                                <div className="mt-2">
                                                    <textarea
                                                        id={formE.textI.replaceAll(' ', '-')}
                                                        name={formE.textI.replaceAll(' ', '-')}
                                                        rows={formE.rows? formE.rows:3}
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                                {/* <p className="mt-3 leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
                                            </div>
                                        );
                                    case 'change':
                                        return (
                                            <div key={formE.textI} className="min-w-10 expandible">
                                                <button onClick={handleClick}
                                                    type="button"
                                                    className="rounded-md bg-white px-2.5 py-1.5 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                >
                                                    {formE.buttonT}
                                                </button>
                                                <label htmlFor={formE.textI.replaceAll(' ', '-')} className="block font-medium leading-6 text-gray-900">
                                                    {formE.buttonT}
                                                </label>
                                                <div className="containerExpandible">
                                                    <div className="text-center mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                        <div className="mt-4 flex leading-6 text-gray-600">
                                                            <label
                                                                htmlFor={formE.textI.replaceAll(' ', '-')}
                                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-400"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input id={formE.textI.replaceAll(' ', '-')} name={formE.textI.replace(' ', '-')} type="file" className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs leading-5 text-gray-600">HTML up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                }
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-x-6">
                    {formObj.formBack && 
                        <button onClick={() => router.back()} type="button" className="rounded-md border-2 px-3 py-2 border-red-600 hover:border-red-400 hover:bg-red-400 hover:text-white transition-all">
                            Back
                        </button>
                    }
                    {(formObj.toggleButton && handleButton) &&
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                        >
                            {formObj.formButton}
                        </button>
                    }
                    {!formObj.toggleButton &&
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                        >
                            {formObj.formButton}
                        </button>
                    }
                </div>
            </form>
        </div>
    )
}
