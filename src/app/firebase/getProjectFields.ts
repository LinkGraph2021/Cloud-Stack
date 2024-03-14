import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


// Get all fields to a specific project. Try projectID: uFJzIIs16EKG0kSPLMPo
export const dataRun2 = async (projectID: any) => {
    const newdataPosts: { id: string; h1: string; }[] = [];

    const colRef = collection(db, 'projects', `${projectID}`);

    try {
        const postsData = await getDocs(colRef);
        postsData.forEach((doc) => {
            newdataPosts.push({
                id: doc.id,
                h1: doc.data().h1,
            });
        });

        return (newdataPosts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return newdataPosts;
    }
};
