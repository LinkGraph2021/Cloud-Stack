'use client';
import {useState} from 'react'
import { useRouter } from 'next/navigation'

export interface FormDef {
    typeI: string
    inputT?: string
    textI: string
    placeH?: string
    formInline?: boolean
    rows?: number
}
export interface InputObj {
    fieldElement: FormDef;
}

export default function TextA( {fieldElement}:InputObj ) {

    return (
        <div key={fieldElement.textI} className="">
            <label htmlFor={fieldElement.textI.replaceAll(' ', '-').toLowerCase()} className="block font-medium leading-6 text-gray-900">
                {fieldElement.textI}
            </label>
            <div className="mt-2">
                <textarea
                    id={fieldElement.textI.replaceAll(' ', '-').toLowerCase()}
                    name={fieldElement.textI.replaceAll(' ', '-').toLowerCase()}
                    rows={fieldElement.rows? fieldElement.rows:3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:sm:leading-6"
                    defaultValue={fieldElement.placeH ? fieldElement.placeH : fieldElement.textI}
                    placeholder={fieldElement.placeH ? fieldElement.placeH : fieldElement.textI}
                />
            </div>
            {/* <p className="mt-3 leading-6 text-gray-600">Write a few sentences about yourself.</p> */}
        </div>
    )
}
