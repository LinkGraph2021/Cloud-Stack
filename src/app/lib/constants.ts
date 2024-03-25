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
        name: 'AWS',
        username: process.env.NEXT_PUBLIC_AWS_USERNAME!,
        password: process.env.NEXT_PUBLIC_AWS_PASSWORD!,
        type: 'AWS',
        endpoint: 'https://usc1.contabostorage.com', // This seems incorrect, please adjust if necessary
        bucket_name: 'cloud-stack.searchatlas.com'
    },
];