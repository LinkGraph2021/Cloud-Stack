'use client';
import {useState} from 'react'
import { useRouter } from 'next/navigation'

export interface FormDef {
    typeI: string
    inputT?: string
    textI: string
    placeH?: any
    formInline?: boolean
}
export interface InputObj {
    fieldElement: FormDef;
}

export default function CheckBox( {fieldElement}:InputObj ) {

    return (
        <div key={fieldElement.textI} className={`${fieldElement.formInline ? 'flex items-center gap-4':''} ${fieldElement.inputT == 'hidden' ? 'hidden':''}`}>
            <div className="mt-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input 
                    type="checkbox"
                    id={fieldElement.textI.replaceAll(' ', '-').toLowerCase()} 
                    name={fieldElement.textI.replaceAll(' ', '-').toLowerCase()}
                    defaultChecked />
                </div>
            </div>
            {fieldElement.inputT !== 'hidden' &&
                <label htmlFor={fieldElement.textI.replaceAll(' ', '-').toLowerCase()} className={`${fieldElement.formInline ? 'min-w-36':''} block font-medium leading-6 text-gray-900`}>
                    {fieldElement.textI}
                </label>
            }
        </div>
    )
}
