import { useState } from "react";
import { storage } from '@/app/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


export const uploadImg = async (file:any, imgU:string) => {
    if (!file) return;


    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: file.type? file.type : 'image/jpeg'
    };


    const storageRef = ref(storage, imgU);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    return uploadTask.on("state_changed",
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    //console.log('Upload is paused');
                    break;
                case 'running':
                    //console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    //console.log('storage/unauthorized');
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    //console.log('storage/canceled');
                    // User canceled the upload
                    break;
        
                // ...
        
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        async () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                //console.log('File available at: ', downloadURL);
            });
        }
    );
}
