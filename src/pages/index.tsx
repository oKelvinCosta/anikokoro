import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="bg-slate-950 h-screen text-white flex lg:items-center ">
        {/* Grid */}
        <main className="w-full h-screen grid lg:items-center grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="h-[50vh] lg:h-auto lg:col-span-5 relative rounded-4xl">
            <Image
              src="/assets/cover-login.png"
              width={578}
              height={900}
              alt=""
              quality={90}
              className=" max-h-[50vh] h-full lg:min-h-screen p-8 object-cover rounded-[45px] w-full"
            />

            <Image
              src="/assets/logo-anikokoro.svg"
              width={213}
              height={68}
              alt=""
              priority
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
          <div className="lg:h-auto lg:col-span-7 flex lg:items-center pt-[7vh] justify-center h-[50vh]">
            <div>
              <h1>Boas vindas!</h1>
              <p className="text-gray-200">
                Faça seu login ou acesse como visitante.
              </p>
              <div className="flex flex-col gap-3 mt-10">
                <Button
                  variant={"slate"}
                  size={"lg"}
                  className="p-5  px-6 rounded"
                >
                  Entrar com Google
                </Button>
                <Button
                  variant={"slate"}
                  size={"lg"}
                  className="p-5  px-6 rounded"
                >
                  Acessar como visitante
                </Button>
              </div>
            </div>
          </div>
        </main>
        {/* Grid End*/}
      </div>
      {/* <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
      </main>
    </div> */}
    </>
  );
}
