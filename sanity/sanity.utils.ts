import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getCertificates() {
   return client.fetch(
        groq`*[_type == "certificado"]{

            _id,

            _createdAt,

            name,

            "slug": slug.current,

            "image": image.asset->url,

            url,

            description

        }`
    )
}
export async function getCommonQuestions() {
    return client.fetch(
         groq`*[_type == "perguntas"]{
 
             _id,
 
             _createdAt,
 
             title,
 
             "slug": slug.current,

             description
 
         }`
     )
 }