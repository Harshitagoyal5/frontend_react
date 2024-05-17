//connecting the frontend with sanity

import sanityClient from '@sanity/client' ;
import imageUrlBuilder from '@sanity/image-url';

export const Client= sanityClient({
    projectId: 'to550fb6',
    dataset: 'production',
    apiVersion: '2024-05-03',
    useCdn: true,
    token:' skow5YYkgzgHjwwxM2iRuxdZ2j27mX2OfyewbjLEFhN3UQZctgUbNj2gC4r4aERB8VveB6c7QpYNTIUG5wFKz6tzgUaMEtyMyO8qXFNQZhVQSxHhAgglkbfz2xkW9K8DcYCU2hdvrJUoBC2lL5cpoDFo7j4yCdkJoIXM0qVXoncjX5N0M47B' ,
});

const builder= imageUrlBuilder(Client);
export const urlFor= (source)=> builder.image(source);

