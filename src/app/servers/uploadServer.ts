
'use client';
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from '@/app/firebase';
import axios from 'axios';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export async function uploadServer(fileContent:any, nameP:any, fileURL:any, fileName:any) {
  const blob = new Blob([fileContent], { type: 'text/html' });
  const data = new FormData();
  var serverurls = [];
  for (const server of allServers) {
    try {
      data.append('username', server.username);
      data.append('password', server.password);
      data.append('type', server.type);
      data.append('endpoint_url', server.endpoint);
      data.append('bucket_name', server.bucket_name);
      data.append('file', blob, `${fileName}.html`);
    
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.searchatlas.com/api/customer/admin/cloud-stack/',
        headers: {
          'Content-Type': 'multipart/form-data', // Set the Content-Type header
        },
        data: data,
      };
      
      const response = await axios.request(config);

      serverurls.push(response.data.url)

      console.log(server.type,' - ',JSON.stringify(response.data.url));
    }catch (error) {
      console.error('Error:', error);
    }
  }

  // setDoc(doc(db, "projects", nameP), {
  //   server: serverurls
  // });

  try {
    const washingtonRef = doc(db, "projects", nameP);
    await updateDoc(washingtonRef, {
      server: serverurls
    });
    console.log('All servers done');
  } catch (error) {
    console.log( error );
  }


}

interface Server {
  username: string;
  password: string;
  type: 'wasabi' | 'exoscale' | 'contabo' | 'AWS'; // Define valid types
  endpoint: string;
  bucket_name: string;
}

const allServers: Server[] = [
  {
      username: process.env.WASABIusername!,
      password: process.env.WASABIpassword!,
      type: 'wasabi',
      endpoint: 'https://s3.us-central-1.wasabisys.com',
      bucket_name: 'lg-cloud-stack'
  },
  {
      username: process.env.EXOSCALEusername!,
      password: process.env.EXOSCALEpassword!,
      type: 'exoscale',
      endpoint: 'https://sos-de-fra-1.exo.io',
      bucket_name: 'lg-cloud-stack'
  },
  {
      username: process.env.CONTABOusername!,
      password: process.env.CONTABOpassword!,
      type: 'contabo',
      endpoint: 'https://usc1.contabostorage.com',
      bucket_name: 'lg-cloud-stack'
  },
  {
      username: process.env.AWSusername!,
      password: process.env.AWSpassword!,
      type: 'AWS',
      endpoint: 'https://usc1.contabostorage.com', // This seems incorrect, please adjust if necessary
      bucket_name: 'cloud-stack.searchatlas.com'
  },
];