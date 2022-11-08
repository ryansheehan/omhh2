import groq from 'groq';
import {client} from '../client';

const allAuthors = groq`
    *[_type=="author"]{image,name,slug}
`;

const someAuthors = groq`
    *[_type=="authors" && slug.current in $slugs]{slug,bio,name,image}
`;

export interface Author {
    bio?: any;
    slug: string;
    name: string;
    image: any;
};

export async function fetchAuthors(...slugs: string[]) {
    let query = allAuthors;
    let params = {};
    if (slugs.length > 0) {
        query = someAuthors;
        params = {slugs};
    }

    const authors = await client.fetch<Author[]>(query, params);
    return authors;
}
