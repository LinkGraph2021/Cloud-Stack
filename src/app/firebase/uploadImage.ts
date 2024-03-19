import { storage } from '../firebase';
import {getDownloadURL} from "firebase/storage";
import { downloadHtml } from '../general/downloadHtml';

const uploadImageToFirebase = async (image:File, imgU:string) => {

    const storageRef = storage.ref();
    const fileRef = storageRef.child(`${imgU}/${image.name}`);

    try {
        await fileRef.put(image);
        console.log('Image uploaded successfully!');
        return await fileRef.getDownloadURL();
    } catch (error) {
        console.error('Error uploading image:', error);
        return error; // Return false to indicate failed upload
    }




    // console.log( image );
    // var urlDownload = null;
    // try {
    //     const uploadTask = storage.ref(`${imgU}/${image.name}`).put(image);
    //     uploadTask.on(
    //         'state_changed',
    //         (snapshot) => {
    //             // Progress tracking
    //             const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //             console.log(`Upload is ${progress}% done`);
    //         },
    //         (error) => {
    //             console.error(error);
    //         },
    //         () => {
    //             // Upload successful
    //             console.log('Image uploaded successfully!');
    //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                 return downloadURL;
    //             });
    //         }
    //     );
    // } catch (error) {
    //     return error;
    // }
    
};

export default uploadImageToFirebase;