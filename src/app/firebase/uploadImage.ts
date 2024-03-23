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
};

export default uploadImageToFirebase;