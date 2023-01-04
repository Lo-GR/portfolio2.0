// This file mocks dissecting the data that would normally be returned from strapi. I'd approach this a little differently if actually connected to Strapi and running fetches
import { header } from "./mockStrapiResponses";


export function fetchHeader() {
  const { title } = header.data.attributes;
  return title;
}