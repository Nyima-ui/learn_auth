import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-60 w-full max-w-7xl mx-auto">
        <header>
            <nav className="flex justify-between p-5">
               <Link href="/">LOGO</Link>
               <Link href="/signup">Sign up</Link>
            </nav>
        </header>
        <main className="mt-9 max-w-2xl px-5 space-y-4"> 
            <h1 className="text-5xl">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione non quo, necessitatibus itaque temporibus placeat dicta fugit dolorum. Quibusdam dolorum rerum deserunt magnam saepe repudiandae assumenda, praesentium asperiores. Laborum?</p>
            <Button className="px-4 py-2 cursor-pointer">Lorem.</Button>
        </main>
    </div>
  );
}
