'use client';
import { createHtml } from '@/app/actions';
import { downloadHtml } from '@/app/general/downloadHtml';
import { setProject } from  '@/app/firebase/projectsObject';
import { uploadImg } from  '@/app/firebase/uploadImage';

 
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
    interface MyFile extends Blob {
        lastModified: any;
    }

    let imgF: {lastModified: any, name: any, size: any, type: any, webkitRelativePath:any} = {
        lastModified: (formData.get('img-featured') as File)?.lastModified,
        name: (formData.get('img-featured') as File)?.name,
        size: (formData.get('img-featured') as File)?.size,
        type: (formData.get('img-featured') as File)?.type,
        webkitRelativePath: (formData.get('img-featured') as File)?.webkitRelativePath,
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
      imgf: imgF,
    }
    var pathUrl = 'project/'+ rawFormData.name+'/'+rawFormData.imgf.name;
    //console.log( pathUrl );
    const rawHtml = await createHtml(rawFormData);
    uploadImg(rawFormData.imgf, pathUrl);
    downloadHtml(rawHtml?.response, rawFormData.url);
    setProject( rawFormData, pathUrl );

    return {
        success: true,
        rawData: 'rawFormData',
        fileName: 'rawFormData.name',
        response: 'htmlResponse',
        message :'Done'
    }
}