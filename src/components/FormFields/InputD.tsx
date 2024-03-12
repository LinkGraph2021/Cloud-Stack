'use client';
import {useState} from 'react'
import { useRouter } from 'next/navigation'

export interface FormDef {
    typeI: string
    inputT?: string
    textI: string
    placeH?: any
    placeH2?: any
    formInline?: boolean
}
export interface InputObj {
    fieldElement: FormDef;
}

export default function InputD( {fieldElement}:InputObj ) {

    return (
        <div key={fieldElement.textI} className={`${fieldElement.formInline ? 'flex items-center gap-4':''} ${fieldElement.inputT == 'hidden' ? 'hidden':''}`}>
            {fieldElement.inputT !== 'hidden' &&
                <label htmlFor={`label-${fieldElement.textI.replaceAll(' ', '-').toLowerCase()}`} className={`${fieldElement.formInline ? 'min-w-36':''} block font-medium leading-6 text-gray-900`}>
                    {fieldElement.textI}
                </label>
            }
            <div className="mt-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type='text'
                        name={`label-${fieldElement.textI.replaceAll(' ', '-').toLowerCase()}`}
                        id={`label-${fieldElement.textI.replaceAll(' ', '-').toLowerCase()}`}
                        autoComplete={fieldElement.inputT}
                        className="block flex-1 border-0 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6"
                        defaultValue={fieldElement.placeH ? fieldElement.placeH : fieldElement.textI}
                        placeholder={fieldElement.placeH ? fieldElement.placeH : fieldElement.textI}
                    />
                    <input
                        type='text'
                        name={`link-${fieldElement.textI.replaceAll(' ', '-').toLowerCase()}`}
                        id={`link-${fieldElement.textI.replaceAll(' ', '-').toLowerCase()}`}
                        autoComplete={fieldElement.inputT}
                        className="block flex-1 border-0 border-l-2 border-gray-300 bg-transparent py-1.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6"
                        defaultValue={fieldElement.placeH2 ? fieldElement.placeH2 : fieldElement.textI}
                        placeholder={fieldElement.placeH2 ? fieldElement.placeH2 : fieldElement.textI}
                    />
                </div>
            </div>
        </div>
    )
}
