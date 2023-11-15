
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import "@/firebase/config";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Immer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <head> 
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" /> 
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" /> 
        <link rel="icon" type="image/png" sizes="16x16" href="//favicon_iofavicon-16x16.png" /> 
        <link rel="manifest" href="/favicon_io/site.webmanifest"/> 
        <link rel="mask-icon" href="/favicon_io/safari-pinned-tab.svg" color="#5bbad5"/> 
        <meta name="msapplication-TileColor" content="#da532c"/> 
        <meta name="theme-color" content="#ffffff"/> 
      </head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
