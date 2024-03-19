'use client';
import { createHtml } from '@/app/actions';
import { uploadHtml } from '@/app/general/uploadHtml';
import { downloadHtml } from '@/app/general/downloadHtml';
import { setProject } from  '@/app/firebase/projectsObject';
import uploadImageToFirebase from '@/app/firebase/uploadImage';

 
export async function projectAction(prevState: any, formData: FormData) {

    let faqCode: { title: any; description: any }[] = [];
    for (let index = 1; index <= Number(formData.get('faqc')); index++) {
      faqCode.push({
        title: formData.get("question-"+index),
        description: formData.get("answer-"+index),
      });
    }
  
    let videoCode: { url: any; }[] = [];
    for(let index = 1; index <= Number(formData.get("videoc")); index++){
      videoCode.push({
        url: formData.get("video-"+index)
      });
    }
  
    let linkCode: { url: any; text: any }[] = [];
    for(let index = 1; index <= Number(formData.get("linkc")); index++){
      linkCode.push({
        url: formData.get("link-link-"+index),
        text: formData.get("label-link-"+index)
      })
    }
  
    let socialCode: { url: any; text: any }[] = [];
    for(let index = 1; index <= Number(formData.get("socialc")); index++){
      socialCode.push({
        url: formData.get("link-social-"+index),
        text: formData.get("label-social-"+index)
      })
    }
  
    const rawFormData = {
      name: formData.get('name-of-project'),
      h1: formData.get('main-header-(h1)'),
      url: formData.get('site-url-to-link-to'),
      description: formData.get('description'),
      keywords: formData.get('keywords'),
      mtitle: formData.get('meta-title'),
      mdescription: formData.get('meta-description-(150-characters)'),
      faqs: faqCode,
      videos: videoCode,
      location: formData.get('address'),
      links: linkCode,
      socials: socialCode,
      clink: formData.get('company-link'),
      hsection: formData.get('hidden-section'),
      
    }
    var pathUrl = 'project/'+ rawFormData.name;
    var pathImg = null;
    //console.log( pathUrl );
    const rawHtml = await createHtml(rawFormData);
    uploadHtml(rawHtml?.response, rawFormData.url, pathUrl);
    downloadHtml(rawHtml?.response, rawFormData.url, pathUrl);
    if( (formData.get('img-featured') as File)?.name ){
      uploadImageToFirebase( (formData.get('img-featured') as File), pathUrl );
      pathImg = pathUrl+'/'+(formData.get('img-featured') as File)?.name;
    }
    setProject( rawFormData, pathImg, pathUrl );

    return {
        success: true,
        rawData: 'rawFormData',
        fileName: 'rawFormData.name',
        response: 'htmlResponse',
        message :'Done'
    }
}