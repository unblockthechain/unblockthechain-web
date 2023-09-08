"use client";
import { getContents } from "@/sanity/sanity.utils";

import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Certificate } from "@/types/Certificate";
import certificate from "@/sanity/schemas/certificate";

export default async function Home() {
  const contents = await getContents();
  console.log("aqui", contents);

  return (
    <div>
      <Header />
      <main>
        <section className="bg-emerald-800 p-4 text-white">
          <p className="md:px-20 md:pb-20 md:pt-10 md:text-xl">
            Aqui vai ter uma frase sobre a empresa
          </p>
          {contents.map((content: Certificate) => (
            <Card key={content._id} className="bg-transparent text-white w-56 max-h-72">
              <CardHeader>
                <CardTitle>{content.name}</CardTitle>
                <img src={content.image} className="w-12"></img>
              </CardHeader>
              <CardContent>
                <CardDescription >{content.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <p className="text-green-500">Saiba mais</p>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
