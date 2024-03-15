import { storage } from '../firebase';

const uploadImageToFirebase = (image:File, imgU:string) => {
    console.log( image );
    if (image) {
        const uploadTask = storage.ref(`${imgU}/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Progress tracking
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(`Upload is ${progress}% done`);
            },
            (error) => {
                console.error(error);
            },
            () => {
                // Upload successful
                console.log('Image uploaded successfully!');
            }
        );
    } else {
        console.error('No image selected');
    }
};

export default uploadImageToFirebase;