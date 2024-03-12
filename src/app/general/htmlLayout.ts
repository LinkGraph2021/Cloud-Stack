'use server'
import { readFileSync } from 'fs';
 
export async function htmlLayout(formData: FormData) {
    var cssData = readFileSync(`./public/static/htmls/all.css`);
    var postCSS = '';
    var faqCode = '';
    var videoCode = '';
    var linkCode = '';
    for (let index = 1; index <= Number(formData.get('faqc')); index++) {
        const element = formData.get('question-'+index);
        faqCode += 
            '<div class="card mb-3" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">'+
                '<div class="card-header" role="tab">'+
                    '<button class="panel-title">'+
                        '<h3 class="mbr-fonts-style mb-0 display-7" itemprop="name">'+formData.get("question-"+index)+'</h3>'+
                        '<span class="dashicons dashicons-arrow-down-alt2"></span>'+
                    '</button>'+
                '</div>'+
                '<div class="panel-body" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">'+
                    '<div itemprop="text">'+formData.get("answer-"+index)+'</div>'+
                '</div>'+
            '</div>';
    }

    for(let index = 2; index <= Number(formData.get("videoc")); index++){
        videoCode += '<div class="video-wrapper video-big">'+
            '<iframe '+
                'class="mbr-embedded-video" '+
                'src='+formData.get("video-"+index)+' '+
                'width="1280" '+
                'height="720" '+
                'allowfullscreen="" '+
            '></iframe>'+
        '</div>';
    }

    for(let index = 1; index <= Number(formData.get("linkc")); index++){
        linkCode += '<li class="mb-2"><a href="'+formData.get("link-"+index)+'" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Backlink Analyzer</a></li>';
    }

    const rawHTML = ' '+
        '<!DOCTYPE html>'+
        '<html lang="en">'+
            '<head>'+
                '<meta charset="utf-8" />'+
                '<meta name="viewport" content="width=device-width" />'+
                '<link rel="apple-touch-icon" sizes="180x180" href="/favicon/searchatlas-favicon-1.png" />'+
                '<link rel="icon" type="image/png" sizes="32x32" href="/favicon/searchatlas-favicon-1.png" />'+
                '<link rel="icon" type="image/png" sizes="16x16" href="/favicon/searchatlas-favicon-1.png" />'+
                '<title>'+formData.get("main-header-(h1)")+'</title>'+
                '<meta name="description" content="'+formData.get("meta-description-(150-characters)")+'" />'+
                '<meta name="keywords" content="'+formData.get("keywords")+'" />'+
                '<meta name="next-head-count" content="16" />'+
                '<link rel="manifest" href="/favicon/site.webmanifest" />'+
                '<meta name="msapplication-TileColor" content="#000000" />'+
                '<meta name="msapplication-config" content="/favicon/browserconfig.xml" />'+
                '<meta name="theme-color" content="#000" />'+
                '<link rel="alternate" type="application/rss+xml" href="/feed.xml" />'+
                '<meta property="og:image" content="https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**WordPress**.png?theme=light&amp;md=1&amp;fontSize=75px&amp;images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&amp;images=data%3Aimage%2Fsvg%2Bxml%2C%253C%253Fxml+version%3D%271.0%27+encoding%3D%27UTF-8%27%253F%253E%253Csvg+preserveAspectRatio%3D%27xMidYMid%27+version%3D%271.1%27+viewBox%3D%270+0+256+255%27+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%253E%253Cg+fill%3D%27%2523464342%27%253E%253Cpath+d%3D%27m18.124+127.5c0+43.295+25.161+80.711+61.646+98.441l-52.176-142.96c-6.0691+13.603-9.4699+28.657-9.4699+44.515zm183.22-5.5196c0-13.518-4.8557-22.88-9.0204-30.166-5.5446-9.01-10.742-16.64-10.742-25.65+0-10.055+7.6259-19.414+18.367-19.414+0.48494+0+0.94491+0.060358+1.4174+0.087415-19.46-17.828-45.387-28.714-73.863-28.714-38.213+0-71.832+19.606-91.39+49.302+2.5662+0.077008+4.9847+0.13112+7.039+0.13112+11.441+0+29.151-1.3882+29.151-1.3882+5.8963-0.34758+6.5915+8.3127+0.7014+9.01+0+0-5.9255+0.69724-12.519+1.0427l39.832+118.48+23.937-71.79-17.042-46.692c-5.8901-0.3455-11.47-1.0427-11.47-1.0427-5.8942-0.3455-5.2033-9.3575+0.69099-9.01+0+0+18.064+1.3882+28.811+1.3882+11.439+0+29.151-1.3882+29.151-1.3882+5.9005-0.34758+6.5936+8.3127+0.7014+9.01+0+0-5.938+0.69724-12.519+1.0427l39.528+117.58+10.91-36.458c4.7287-15.129+8.3273-25.995+8.3273-35.359zm-71.921+15.087l-32.818+95.363c9.7988+2.8805+20.162+4.4561+30.899+4.4561+12.738+0+24.953-2.202+36.323-6.2002-0.29346-0.46829-0.55987-0.96572-0.77841-1.5069l-33.625-92.112zm94.058-62.046c0.47037+3.4841+0.73678+7.2242+0.73678+11.247+0+11.1-2.073+23.577-8.3169+39.178l-33.411+96.599c32.518-18.963+54.391-54.193+54.391-94.545+0.002081-19.017-4.8557-36.899-13.399-52.48zm-95.977-75.023c-70.304+0-127.5+57.196-127.5+127.5+0+70.313+57.2+127.51+127.5+127.51+70.302+0+127.51-57.194+127.51-127.51-0.002082-70.304-57.209-127.5-127.51-127.5zm0+249.16c-67.08+0-121.66-54.578-121.66-121.66+0-67.08+54.576-121.65+121.66-121.65+67.078+0+121.65+54.574+121.65+121.65+0+67.084-54.574+121.66-121.65+121.66z%27%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E" />'+
                '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />'+
                '<link data-next-font="" rel="preconnect" href="/" crossorigin="anonymous" />'+
                '<link rel="preload" href="./28449e32fdf92c49.css" as="style" />'+
                '<link rel="stylesheet" href="./28449e32fdf92c49.css" data-n-g="" />'+
                '<noscript data-n-css=""></noscript>'+
                '<script src="./assets/static/js/js.js" defer=""></script>'+
                '<style data-href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500&display=swap">'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 300;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zJtBhPNqw73oHH7BbQp4-B6XlrZrMFNI4.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zJtBhPNqw73oHH7BbQp4-B6XlrZu0FNI4.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zJtBhPNqw73oHH7BbQp4-B6XlrZt8FNI4.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7myjJQVF.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7myRJQVF.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 600;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7mx9IgVF.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 700;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7mxEIgVF.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 800;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zPtBhPNqw79Ij1E865zBUv7mwjIgVF.woff) format("woff");'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 300;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt5D4hXRAy7lRq.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 300;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt7j4hXRAy7lRq.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 300;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt4D4hXRAy7g.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt5D4hXRAy7lRq.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt7j4hXRAy7lRq.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt4D4hXRAy7g.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt5D4hXRAy7lRq.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt7j4hXRAy7lRq.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: italic;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zUtBhPNqw73oHt4D4hXRAy7g.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73ord4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 400;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oTd4jQmfxI.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73ord4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 500;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oTd4jQmfxI.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 600;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 600;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73ord4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 600;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oTd4jQmfxI.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 700;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 700;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73ord4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 700;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oTd4jQmfxI.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 800;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oDd4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 800;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73ord4jQmfxIC7w.woff2) format("woff2");'+
                        'unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;'+
                    '}'+
                    '@font-face {'+
                        'font-family: "Jost";'+
                        'font-style: normal;'+
                        'font-weight: 800;'+
                        'font-display: swap;'+
                        'src: url(https://fonts.gstatic.com/s/jost/v15/92zatBhPNqw73oTd4jQmfxI.woff2) format("woff2");'+
                        'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;'+
                    '}'+
                '</style>'+
            '</head>'+
            '<body>'+
                '<div id="__next">'+
                    '<header>'+
                        '<section data-bs-version="5.1" class="menu menu1 cid-t9fGzm7kMq" id="menu1-0">'+
                            '<nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg px-0">'+
                                '<div class="container">'+
                                    '<div class="navbar-brand">'+
                                        '<span class="navbar-caption-wrap"><a class="navbar-caption text-black display-7" href="/#">'+formData.get("name-of-project")+'</a></span>'+
                                    '</div>'+
                                '</div>'+
                            '</nav>'+
                        '</section>'+
                    '</header>'+

                    '<main>'+
                        '<section class="flex-col md:flex-row flex items-center header1 cid-t9fGBrS5Op mbr-fullscreen">'+
                            '<div class="container flex md:flex-row flex-col">'+
                                '<div class="flex-1">'+
                                    '<h1 class="text-6xl font-bold tracking-tighter leading-tight md:pr-8 mbr-section-title mbr-fonts-style mb-3 display-1">'+formData.get("main-header-(h1)")+'</h1>'+
                                    '<p>'+formData.get("description")+'</p>'+
                                '</div>'+
                                '<div class="flex-1"><img src="images/hero-image-3.webp" alt="hero"></div>'+
                            '</div>'+
                        '</section>'+
                        '<section class="content16 cid-tNbUWJTv2K">'+
                            '<div class="container">'+
                                '<div class="row justify-content-center">'+
                                    '<div class="col-12 col-md-10">'+
                                        '<div class="mbr-section-head align-center mb-4">'+
                                            '<div class="sub-1">See what people ask</div>'+
                                            '<h2 class="mbr-section-title mb-0 mbr-fonts-style display-2">Frequently Asked Questions</h2>'+
                                        '</div>'+
                                        '<div id="accordion_1" itemscope itemtype="https://schema.org/FAQPage" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">'+
                                            faqCode+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</section>'+
                        '<section class="video2 cid-t9j5IJrIY6">'+
                            '<div class="container">'+
                                '<div class="row flex flex-wrap justify-content-center mt-4">'+
                                    '<div class="col-12">'+
                                        '<div class="sub-1">Learn more on this section</div>'+
                                        '<h2 class="display-2 mb-6">Video Section</h2>'+
                                    '</div>'+
                                    '<div class="col-12 lg:col-8 video-left video-block">'+
                                        '<div class="video-wrapper video-big">'+
                                            '<iframe '+
                                                'class="mbr-embedded-video" '+
                                                'src='+formData.get("video-1")+' '+
                                                'width="1280" '+
                                                'height="720" '+
                                                'allowfullscreen="" '+
                                            '></iframe>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="col-12 lg:col-4 video-right video-block video-multiple">'+
                                        videoCode+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</section>'+
                        '<section id="custom-html-o">'+
                            '<div class="container">'+
                                '<div class="sub-1">Location</div>'+
                                '<h2 class="display-2 display-bspe-legal">BSPE Legal Marketing</h2>'+
                                '<div>'+formData.get("address")+'</div>'+
                            '</div>'+
                        '</section>'+
                    '</main>'+
                    '<footer class="bg-accent-1 border-t border-accent-2">'+
                        '<div class="container mx-auto">'+
                            '<section class="footer2 cid-tNct9Z79rF text-white py-8">'+
                                '<div class="container mx-auto px-4">'+
                                    '<div class="flex flex-wrap">'+
                                        '<div class="w-full md:w-1/3 px-4">'+
                                            '<h5 class="text-lg font-bold mb-2">SearchAtlas</h5>'+
                                            '<ul class="list-decimal pl-5">'+
                                                '<li class="mb-2">Company Website:</li>'+
                                                '<li><a href="'+formData.get("company-link")+'" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">'+formData.get("name-of-project")+'</a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                        '<div class="w-full md:w-1/3 px-4">'+
                                            '<h5 class="text-lg font-bold mb-2">Useful Links</h5>'+
                                            '<ul class="list-decimal pl-5">'+
                                                linkCode+
                                            '</ul>'+
                                        '</div>'+
                                        '<div class="w-full md:w-1/3 px-4">'+
                                            '<h5 class="text-lg font-bold mb-2">Follow us on Social Media</h5>'+
                                            '<ul class="list-decimal pl-5">'+
                                                '<li class="mb-2"><a href="https://www.instagram.com/searchatlasseo/" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>'+
                                                '<li class="mb-2"><a href="https://twitter.com/LinkGraphSEO" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></li>'+
                                                '<li class="mb-2"><a href="https://www.linkedin.com/company/linkgraph" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>'+
                                                '<li><a href="https://www.facebook.com/linkgraphseo" class="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row justify-content-center" hidden>'+
                                        '<div class="col-12 col-md-10">'+
                                            '<div id="accordion_1" class="panel-group accordionStyles accordion" role="tablist" aria-multiselectable="true">'+
                                                '<div class="mb-3">'+
                                                    '<div class="card-header" role="tab">'+
                                                        '<button class="panel-title">'+
                                                            '<h6 class="mbr-fonts-style mb-0 display-7"></h6>'+
                                                            '<span class="dashicons dashicons-arrow-down-alt2"></span>'+
                                                        '</button>'+
                                                    '</div>'+
                                                    '<div class="panel-body">'+
                                                        formData.get('hidden-section')+
                                                    '</div>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</section>'+
                        '</div>'+
                    '</footer>'+
                '</div>'+
                '<script id="__NEXT_DATA__" type="application/json">'+
                    '{'+
                        '"props": {'+
                            '"pageProps": {'+
                                '"allPosts": {'+
                                    '"edges": ['+
                                        '{'+
                                            '"node": {'+
                                                '"title": "Hello world!",'+
                                                '"excerpt": "\u003cp\u003eWelcome to WordPress. This is your first post. Edit or delete it, then start writing!\u003c/p\u003e\n",'+
                                                '"slug": "hello-world",'+
                                                '"date": "2023-09-13T14:50:53",'+
                                                '"featuredImage": null,'+
                                                '"author": {'+
                                                    '"node": { "name": "basicwordp1stg", "firstName": null, "lastName": null, "avatar": { "url": "https://secure.gravatar.com/avatar/1d8c3d0794a633bddd6f10a408deb7b5?s=96\u0026d=mm\u0026r=g" } }'+
                                                '}'+
                                            '}'+
                                        '}'+
                                    ']'+
                                '},'+
                                '"preview": false'+
                            '},'+
                            '"__N_SSG": true'+
                        '},'+
                        '"page": "/",'+
                        '"query": {},'+
                        '"buildId": "P9d7BXloohF3HimVsG1FE",'+
                        '"isFallback": false,'+
                        '"gsp": true,'+
                        '"scriptLoader": []'+
                    '}'+
                '</script>'+
                '<style>'+cssData+'</style>'+
                '<script>'+
                    'document.addEventListener("DOMContentLoaded", function() {'+
                        'var accordions = document.querySelectorAll(".accordion");'+
                        'accordions.forEach(function(accordion) {'+
                            'var buttons = accordion.querySelectorAll(".card-header");'+
                            'buttons.forEach(function(button) {'+
                                'button.addEventListener("click", function() {'+
                                    'var currentCardBody = button.closest(".card").querySelector(".panel-body");'+
                                    'currentCardBody.parentElement.classList.toggle( "activeCard" );'+
                                    'var otherCardBodies = accordion.querySelectorAll(".card .panel-body");'+
                                    'otherCardBodies.forEach(function(cardBody) {'+
                                        'if (cardBody !== currentCardBody) {'+
                                            'cardBody.parentElement.classList.remove("activeCard");'+
                                        '}'+
                                    '});'+
                                '});'+
                            '});'+
                        '});'+
                    '});'+
                ' </script>'+
            '</body>'+
        '</html>'+
    '';

  return rawHTML;
}