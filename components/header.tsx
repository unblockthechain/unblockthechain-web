"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const handleClick = () => {
    window.open("https://certisecure.mercadoshops.com.br/", "_blank");
  };
  return (
    <header className="flex justify-between p-4 md:px-20 bg-emerald-800 pb-0">
      <div className="">
        <img src="/images/logoGreen.png" className=" w-24 md:w-36"></img>
      </div>
      <Button
        className="w-40 md:w-60 h-16 md:p-4 flex items-center gap-2 text-lg md:my-10  right-5 md:right-20 "
        onClick={handleClick}
      >
        <ShoppingBag className="w-5" /> Comprar
      </Button>
    </header>
  );
}