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

export default async function Home() {
  const contents = await getContents();
  console.log("aqui", contents);

  return (
    <div>
      <Header />
      <main>
        <section className="bg-emerald-800 p-4 text-white">
          <div className="md:px-20 md:pb-32 md:pt-16">
            <p className=" md:text-5xl font-semibold mb-3">
              Lorem Ipsum is simply
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>

          <div className="md:px-20">
            {contents.map((content: Certificate) => (
              <Card
                key={content._id}
                className="bg-transparent text-white w-56 h-75 "
              >
                <CardHeader className="gap-3">
                  <CardTitle>{content.name}</CardTitle>
                  <img src={content.image} className="w-12"></img>
                </CardHeader>
                <CardContent>
                  <CardDescription>{content.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <a className="text-green-500" href="">
                    Saiba mais
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
