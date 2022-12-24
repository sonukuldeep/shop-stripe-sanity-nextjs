import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '94lqarf1',
  dataset: 'production',
  apiVersion: '2021-12-23',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);