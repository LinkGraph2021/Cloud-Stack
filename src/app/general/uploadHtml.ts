'use client';
import { storage } from '@/app/firebase';

export async function uploadHtml(response:any, fileName:any, pathUrl:string) {
    try {
        const blob = new Blob([response], { type: 'text/html' });
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`${pathUrl}/${fileName}.html`);
        console.log('Text uploaded successfully!');
        await fileRef.put(blob);
        return await fileRef.getDownloadURL();
    } catch (error) {
        console.error('Error uploading text:', error);
        return error;
    }
}