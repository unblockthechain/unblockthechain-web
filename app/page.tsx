'use client'
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
import SimpleSlider from "@/components/ui/carousel";

export default async function Home() {
  const contents = await getContents();
  // console.log("aqui", contents);

  return (
    <div>
      <Header />
      <main>
        <section className="bg-emerald-800 p-4 text-white">
          <div className="pb-16 pt-8 md:px-20 md:pb-16 md:pt-14">
            <p className=" text-3xl md:text-5xl font-semibold mb-3">
              Lorem Ipsum is simply
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>

          <div className="lg:hidden"><SimpleSlider/></div>

          <div className="hidden lg:px-20 lg:grid lg:grid-cols-3 gap-4 w-fit 2xl:grid-cols-4 ">
            {contents.map((content: Certificate) => (

              <Card
                key={content._id}
                className="bg-transparent text-white w-56 h-75 flex flex-col justify-between"
              >
                <CardHeader className="gap-3 h-40">
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
