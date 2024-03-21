'use server'
import axios, {isCancel, AxiosError} from 'axios';
import { Readable } from 'stream';
import {firebase} from '@/app/firebase';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';


export async function uploadServer(fileURL: any) {

  let data = new FormData();
  console.log( fileURL );
  var testURL = 'gs://cloud-sites-a5621.appspot.com/project/Test1/Image-2.png'
  const readableStream = await createReadStreamFromUrl(fileURL);
  data.append('username', 'TC3JZ08JK2O1C1PGKQ70');
  data.append('password', 'X2Wlciv7zDyVTRfrvMEMJWBCk212lXe2YFcbPnVe');
  data.append('type', 'wasabi');
  data.append('endpoint_url', 'https://s3.us-central-1.wasabisys.com');
  data.append('bucket_name', 'lg-cloud-stack');
  //data.append('file', fs.createReadStream('/Users/IGNITER/Downloads/test.html'));
  data.append('file', readableStream);
  data.append('file_name', 'test.html');
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.searchatlas.com/api/customer/admin/cloud-stack/',
    headers: { 
      ...data.getHeaders()
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
}

async function createReadStreamFromUrl(url:any) {
  try {
    const response = await axios.get(url, { responseType: 'stream' });

    // Create a readable stream from the response data
    const readableStream = response.data;

    return readableStream;
  } catch (error) {
    console.error('Error fetching file from URL:', error);
    throw error;
  }
}