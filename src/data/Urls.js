import { dataTypes } from "./Types";


//purpose : to avoid hard-coding for url
const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const ResultUrls = {
    [dataTypes.PRODUCTS]:`${protocol}://${hostname}:${port}/api/products`,
    [dataTypes.CATEGORIES]:`${protocol}://${hostname}:${port}/api/categoires`
}