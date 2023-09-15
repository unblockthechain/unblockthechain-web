'use client'
import { Store } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function Header() {

  const handleClick = () => {
    window.open('https://certisecure.mercadoshops.com.br/', '_blank')
  }  
  return (
    <header className="flex justify-between p-4">
      <div className=" flex items-center justify-start text-green-500">Certisecure</div>
      <Button className="w-40 md:w-60 md:p-4 flex items-center gap-2" onClick={handleClick}><Store className='w-5'/> Ir para loja</Button>
    </header>
  );
}
