import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "@/app/firebase";


// Get all fields to a specific project. Try projectID: uFJzIIs16EKG0kSPLMPo
export const getProject = async (projectID: any) => {
    const newdataPosts: { id: number; h1: string; projectName: string; }[] = [];

    //const colRef = collection(db, 'projects', `${projectID}`);
    const colRef = doc(db, 'projects', `${projectID}`);

    try {
        const postsData = await getDoc(colRef);
        if (postsData.exists()) {
            newdataPosts.push({
                id: postsData.data().id,
                h1: postsData.data().h1,
                projectName: postsData.data().projectName,
            });
            console.log( postsData );
        }


        return (newdataPosts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return newdataPosts;
    }
};

export const setProject = async ( rawData:any, pathUrl:any ) => {
    try {
        await setDoc(doc(db, "projects", rawData.name), {
            name: rawData.name,
            h1: rawData.h1,
            url: rawData.url,
            description: rawData.description,
            keywords: rawData.keywords,
            mtitle: rawData.mtitle,
            mdescription: rawData.mdescription,
            faqs: rawData.faqs,
            videos: rawData.videos,
            location: rawData.location,
            links: rawData.links,
            socials: rawData.socials,
            clink: rawData.clink,
            hsection: rawData.hsection,
            imgf: pathUrl
        });

        return ('correct');
    } catch (error) {
        console.error("Error fetching posts:", error);
        return 'error';
    }
};