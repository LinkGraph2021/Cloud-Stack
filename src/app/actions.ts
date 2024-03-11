'use server'
import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { htmlLayout } from '@/app/general/htmlLayout'
 
export async function createHtml(prevState: any, formData: FormData) {
  const path = 'test';
  var htmlResponse =  await htmlLayout(formData);

  try {
    writeFileSync(`./tmp/${formData.get('site-url-to-link-to')}.html`, htmlResponse);
    return {
      message: 'Done'
    }
  } catch (error) {
    console.error(error);
    return {
      message: console.error(error)
    }
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
  
}