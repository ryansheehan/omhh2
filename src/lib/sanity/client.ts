import sanityClient, {type ClientConfig} from '@sanity/client';

const config: ClientConfig = {
    
}

export const client = sanityClient(config);