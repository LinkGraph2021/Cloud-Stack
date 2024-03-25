export const MY_CONSTANT: number = 10;


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
        username: process.env.EXOSCALE_USERNAME!,
        password: process.env.EXOSCALE_PASSWORD!,
        type: 'wasabi',
        endpoint: 'https://s3.us-central-1.wasabisys.com',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'Exoscale',
        username: process.env.EXOSCALE_USERNAME!,
        password: process.env.EXOSCALE_PASSWORD!,
        type: 'exoscale',
        endpoint: 'https://sos-de-fra-1.exo.io',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'Contabo',
        username: process.env.CONTABO_USERNAME!,
        password: process.env.CONTABO_PASSWORD!,
        type: 'contabo',
        endpoint: 'https://usc1.contabostorage.com',
        bucket_name: 'lg-cloud-stack'
    },
    {
        name: 'AWS',
        username: process.env.AWS_USERNAME!,
        password: process.env.AWS_PASSWORD!,
        type: 'AWS',
        endpoint: 'https://usc1.contabostorage.com', // This seems incorrect, please adjust if necessary
        bucket_name: 'cloud-stack.searchatlas.com'
    },
];