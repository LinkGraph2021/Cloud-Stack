
'use client';
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from '@/app/firebase';
import axios from 'axios';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export async function uploadServer(fileContent:any, stateServer: any, nameP:any, fileURL:any, fileName:any) {
  const blob = new Blob([fileContent], { type: 'text/html' });
  const data = new FormData();
  var serverurls = [];
  var numberServ = 0;
  for (const server of stateServer) {
    if( server?.selected === "on" ){
      console.log( 'server to: ', server.name );
      try {
        data.append('username', server?.username);
        data.append('password', server?.password);
        data.append('type', server?.type);
        data.append('endpoint_url', server?.endpoint);
        data.append('bucket_name', server?.bucket_name);
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
  
        serverurls.push({
          serverName: server?.type,
          serverLink: response.data.url,
        })
  
        console.log(server.type,' - ',JSON.stringify(response.data.url));
        numberServ++;
      }catch (error) {
        console.error('Error:', error);
      }
    }
    else{
      console.log( 'NOT server to: ', server.name );
    }
  }

  try {
    const serverRef = doc(db, "projects", nameP);
    await updateDoc(serverRef, {
      server: serverurls
    });
    console.log(`Server Done: ${numberServ}`);
  } catch (error) {
    console.log( error );
  }


}
