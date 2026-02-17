import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo, Archivo_Black } from "next/font/google";
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  variable: "--font-archivo-black",
  weight: ["400"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` ${archivo.variable} ${archivoBlack.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
