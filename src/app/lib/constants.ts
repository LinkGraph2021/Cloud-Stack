interface Server {
    name: string;
    username: string;
    password: string;
    type: string;
    endpoint: string;
    bucket_name: string;
}
  
export const allServers: Server[] = [
    {
        name: 'Backblaze',
        username: process.env.NEXT_PUBLIC_BACKBLZE_USERNAME!,
        password: process.env.NEXT_PUBLIC_BACKBLZE_PASSWORD!,
        type: 'Backblaze',
        endpoint: 'https://s3.us-east-005.backblazeb2.com',
        bucket_name: 'cloud-stack'
    },
    {
        name: 'Azure',
        username: process.env.NEXT_PUBLIC_WASABI_USERNAME!,
        password: process.env.NEXT_PUBLIC_WASABI_PASSWORD!,
        type: 'Azure',
        endpoint: 'https://sacloudsite.blob.core.windows.net/lg-cloud-stack',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'Wasabi',
        username: process.env.NEXT_PUBLIC_WASABI_USERNAME!,
        password: process.env.NEXT_PUBLIC_WASABI_PASSWORD!,
        type: 'wasabi',
        endpoint: 'https://s3.us-central-1.wasabisys.com',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'Exoscale',
        username: process.env.NEXT_PUBLIC_EXOSCALE_USERNAME!,
        password: process.env.NEXT_PUBLIC_EXOSCALE_PASSWORD!,
        type: 'exoscale',
        endpoint: 'https://sos-de-fra-1.exo.io',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'Contabo',
        username: process.env.NEXT_PUBLIC_CONTABO_USERNAME!,
        password: process.env.NEXT_PUBLIC_CONTABO_PASSWORD!,
        type: 'contabo',
        endpoint: 'https://usc1.contabostorage.com',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'UpCloud',
        username: process.env.NEXT_PUBLIC_UPCLOUD_USERNAME!,
        password: process.env.NEXT_PUBLIC_UPCLOUD_PASSWORD!,
        type: 'upcloud',
        endpoint: 'https://cloud-stack.us-nyc1.upcloudobjects.com',
        bucket_name: 'cloud-stack'
    },
    {
        name: 'Bunny',
        username: process.env.NEXT_PUBLIC_BUNNY_USERNAME!,
        password: process.env.NEXT_PUBLIC_BUNNY_PASSWORD!,
        type: 'bunny',
        endpoint: 'https://ny.storage.bunnycdn.com',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'DigitalOcean',
        username: process.env.NEXT_PUBLIC_DIGITALOCEAN_USERNAME!,
        password: process.env.NEXT_PUBLIC_DIGITALOCEAN_PASSWORD!,
        type: 'digitalocean',
        endpoint: 'https://lg-cloud-stack.nyc3.digitaloceanspaces.com',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'AWS',
        username: process.env.NEXT_PUBLIC_AWS_USERNAME!,
        password: process.env.NEXT_PUBLIC_AWS_PASSWORD!,
        type: 'AWS',
        endpoint: 'https://usc1.contabostorage.com',
        bucket_name: 'cloud-stack.searchatlas.com'
    },
    {
        name: 'Tencent',
        username: process.env.NEXT_PUBLIC_TENCENT_USERNAME!,
        password: process.env.NEXT_PUBLIC_TENCENT_PASSWORD!,
        type: 'tencent',
        endpoint: 'https://lg-cloud-stack-1322916589.cos.na-siliconvalley.myqcloud.com',
        bucket_name: 'lg-cloud-stack-1322916589'
    },
    {
        name: 'Scaleway',
        username: process.env.NEXT_PUBLIC_SCALEWAY_USERNAME!,
        password: process.env.NEXT_PUBLIC_SCALEWAY_PASSWORD!,
        type: 'scaleway',
        endpoint: 'https://lg-cloud-stack.s3.fr-par.scw.cloud',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'GitHub',
        username: process.env.NEXT_PUBLIC_GITHUB_USERNAME!,
        password: process.env.NEXT_PUBLIC_GITHUB_PASSWORD!,
        type: 'github',
        endpoint: 'https://api.github.com/repos/OWNER/REPO/contents/PATH',
        bucket_name: ''
    },
    {
        name: 'Vercel',
        username: process.env.NEXT_PUBLIC_VERCEL_USERNAME!,
        password: process.env.NEXT_PUBLIC_VERCEL_PASSWORD!,
        type: 'vercel',
        endpoint: 'https://vercel.com/projects-linkgraphio/lg-cloud-stack',
        bucket_name: 'lg-cloud-stack'
    },
];