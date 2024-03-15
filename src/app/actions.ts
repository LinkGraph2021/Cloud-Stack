'use server'
import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { htmlLayout } from '@/app/general/htmlLayout'
 
export async function createHtml(rawFormData:any) {
  

  var cpath = 'https://cloud-stack-delta.vercel.app';
  if( process.env.NODE_ENV == 'development' ){
    cpath = './public/';
  }
  var htmlResponse =  await htmlLayout(rawFormData);

  try {
    writeFileSync(`${cpath}/static/htmls/${rawFormData.name}.html`, htmlResponse);
  } catch (error) {
    console.error(error);
    return {
      response: '',
      message: "couldn't fetch"
    }
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }finally {
    return {
      response: htmlResponse,
      message :'Done'
    }
  }
  
}