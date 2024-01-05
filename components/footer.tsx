"use client";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 p-4 text-white md:px-20">
      <div className="flex flex-row  gap-20s gap-x-8">
        <div className="w-60">
          {" "}
          <img src="/images/logo-png.png"></img>
        </div>
        <div className="flex flex-col my-10 gap-5">
          <div className="flex flex-row gap-5">
            <a href="">
              <Linkedin />
            </a>

            <a href="">
              <MessageCircle />
            </a>
          </div>

          <p>
            <a href="">Segurança e privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}