import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getContents() {
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