"use client";

import { getCertificates, getCommonQuestions } from "@/sanity/sanity.utils";

import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Certificate } from "@/types/Certificate";
import SimpleSlider from "@/components/ui/carousel";
import { Questions } from "@/types/Questions";
import Footer from "@/components/footer";

export default async function Home() {
  const certificate = await getCertificates();
  const questions = await getCommonQuestions();
  // console.log("aqui", contents);

  return (
    <div className="bg-emerald-800">
      <Header />
      <main>
        <section className="bg-emerald-800 p-4 text-white md:pb-16 flex flex-row">
          <div>
            <div className="pb-16 pt-8 md:px-20 md:pb-16 md:pt-0">
              <h1 className=" text-3xl md:text-5xl font-bold mb-3">
                Certisecure Serviços Digitais
              </h1>
              <h2 className="md:text-xl">
                Soluções Eficientes e Seguras em Certificação Digital para
                transações online
              </h2>
            </div>

            <div className="lg:hidden">
              <SimpleSlider />
            </div>

            <div className="hidden lg:px-20 lg:grid lg:grid-cols-3 gap-4 w-fit 2xl:grid-cols-4 ">
              {certificate.map((content: Certificate) => (
                <Card
                  key={content._id}
                  className="bg-transparent text-white w-56 h-75 flex flex-col justify-between hover:border-green-500"
                >
                  <a href="https://certisecure.mercadoshops.com.br/">
                    <CardHeader className="gap-3 h-40">
                      <CardTitle>{content.name}</CardTitle>
                      <img src={content.image} className="w-12"></img>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {content.description.slice(0, 80) + "..."}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <a
                        className="text-green-500"
                        href="https://certisecure.mercadoshops.com.br/"
                      >
                        Saiba mais
                      </a>
                    </CardFooter>
                  </a>
                </Card>
              ))}
            </div>
          </div>
          <div className="hidden md:w-96 lg:block">
            <img src="/images/illustrationCertif.svg" />
          </div>
        </section>

        <section className=" p-4 pt-16 md:pt-16 bg-white text-emerald-800 flex flex-row md:p-24">
          <div className="hidden md:flex md:w-3/6">
            <img src="/images/ask.svg"></img>
          </div>
          <div className="w-full md:w-3/6 flex flex-col justify-center">
            <h3 className="flex justify-center text-emerald-800 font-semibold text-3xl mb-12">
              Como Funciona?
            </h3>
            <ul className="self-center w-56 md:w-full flex flex-col md:items-center gap-6">
              <li className="flex flex-col  md:w-96">
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-2xl">1</span>
                  <p className="text-xl">Escolha o certificado</p>
                </div>
                <p className="text-sm">
                  Compre ou renove o seu Certificado Digital
                </p>
              </li>

              <li className="flex flex-col md:w-96">
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-2xl">2</span>
                  <p className="text-xl">Pagamento</p>
                </div>
                <p className="text-sm">
                  Compre em até 12x no cartão ou pague em até 15 dias no boleto.
                </p>
              </li>
              <li className="flex flex-col md:w-96">
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-2xl">3</span>
                  <p className="text-xl">Validação</p>
                </div>
                <p className="text-sm">
                  Agende a sua validação no melhor horário e local e apresente a
                  documentação obrigatória.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className=" p-4 pt-16 pb-16 md:pt-16 bg-white text-emerald-800 flex flex-col md:p-24 items-center">
          <h3 className="w-full flex justify-center text-emerald-800 font-semibold text-3xl mb-12 text-center">
            Perguntas frequentes
          </h3>
          <div className="md:w-3/6">
            {questions.map((question: Questions) => (
              <Accordion
                type="single"
                collapsible
                className="hover:text-green-500 hover:no-underline"
              >
                <AccordionItem value="item-1" key={question._id}>
                  <AccordionTrigger>{question.title}</AccordionTrigger>
                  <AccordionContent>{question.description}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
