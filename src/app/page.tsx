import Image from "next/image";
import Logo from "../assets/logo.svg";
import { Trash2 } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image src={Logo} alt="logo" />

        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>
      <form action="">
        <label htmlFor="">Cole seu código SQL aqui</label>
      </form>

      <div></div>
    </div>
  );
}
