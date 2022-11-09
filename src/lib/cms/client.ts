import sanityClient, {type ClientConfig} from '@sanity/client';
import builder from '@sanity/image-url';

const config: ClientConfig = {
    projectId: import.meta.env.CMS_PROJECT_ID,
    dataset: import.meta.env.CMS_DATASET,
    apiVersion: import.meta.env.CMS_API_VERSION,
    useCdn: (import.meta.env.CMS_USE_CDN).toLowerCase() === 'true',
}

export const client = sanityClient(config);
export const imageBuilder = builder(client);