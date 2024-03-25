'use client';
import { createHtml } from '@/app/actions';
import { htmlLayout } from '@/app/general/htmlLayout';
import { uploadHtml } from '@/app/general/uploadHtml';
import { downloadHtml } from '@/app/general/downloadHtml';
import { uploadServer } from '@/app/servers/uploadServer';
import { setProject } from  '@/app/firebase/projectsObject';
import uploadImageToFirebase from '@/app/firebase/uploadImage';

 
export async function projectAction(prevState: any, formData: FormData) {
  const hSection = document.getElementById(`hidden-section`);
  const hSectionT = hSection?.firstChild instanceof HTMLElement ? hSection.firstChild.innerHTML : '';

  let faqCode: { title: any; description: any }[] = [];
  if( Number(formData.get('faqc')) > 0 ){
    for (let index = 1; index <= Number(formData.get('faqc')); index++) {
      const element = document.getElementById(`questionr-${index}`);
      const faqDesc = element?.firstChild instanceof HTMLElement ? element.firstChild.innerHTML : '';
      //console.log(faqDesc);
      if( formData.get("question-"+index) ){
        faqCode.push({
          title: formData.get("question-"+index),
          description: faqDesc ? faqDesc : formData.get("answer-"+index),
        });
      }
    }
  }

  let videoCode: { url: any; }[] = [];
  if( Number(formData.get("videoc")) > 0 ){
    for(let index = 1; index <= Number(formData.get("videoc")); index++){
      if( formData.get("video-"+index) ){
        videoCode.push({
          url: formData.get("video-"+index)
        });
      }
    }
  }

  let linkCode: { url: any; text: any }[] = [];
  if( Number(formData.get("linkc")) > 0 ){
    for(let index = 1; index <= Number(formData.get("linkc")); index++){
      if( formData.get("label-link-"+index) && formData.get("label-link-"+index) ){
        linkCode.push({
          url: formData.get("link-link-"+index) ? formData.get("link-link-"+index) : '#',
          text: formData.get("label-link-"+index)
        })
      }
    }
  }

  let socialCode: { url: any; text: any }[] = [];
  if( Number(formData.get("socialc")) > 0 ){
    for(let index = 1; index <= Number(formData.get("socialc")); index++){
      if( formData.get("link-social-"+index) && formData.get("label-social-"+index) ){
        socialCode.push({
          url: formData.get("link-social-"+index) ? formData.get("link-social-"+index) : '#',
          text: formData.get("label-social-"+index)
        })
      }
    }
  }

  const projectName = formData.get('name-of-project');
  const fixUrl = typeof projectName === 'string' ? projectName.replace(" ", "-").toLowerCase() : projectName;
  
  const rawFormData = {
    name: formData.get('name-of-project'),
    h1: formData.get('main-header-(h1)'),
    url: fixUrl,
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
    hsection: hSectionT,
  }
  var pathUrl = 'project/'+ rawFormData.name;
  var pathImg = null;
  //const rawHtml = await createHtml(rawFormData, pathUrl);
  var isLoading = false;

  try {
    var urlImg = await uploadImageToFirebase( (formData.get('img-featured') as File), pathUrl );
    pathImg = pathUrl+'/'+(formData.get('img-featured') as File)?.name;
    const rawHtml = await htmlLayout(rawFormData, urlImg);
    var uploadURL = await uploadHtml(rawHtml, rawFormData.url, pathUrl);
    downloadHtml(rawHtml, rawFormData.url);
    setProject( rawFormData, pathImg, pathUrl );
    await setProject( rawFormData, pathImg, pathUrl );
    uploadServer( rawHtml, rawFormData.name, uploadURL, rawFormData.url );
    isLoading = true;
    return{
      success: false,
      message: 'loading',
      loading: isLoading,
    }
  } catch (error) {
    isLoading = false;
    return {
      success: false,
      message: 'error',
      loading: isLoading,
    }
  }finally{
    isLoading = false;
    return {
      success: true,
      message: 'All Done',
      loading: isLoading,
    }
  }
}