import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { ContactProvider } from "@/context/createContext";
import { Toaster } from "sonner";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "St Joseph's Hospital",
  description: "Empowering Lives Through Better Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>
        <ContactProvider>{children}</ContactProvider>
        <Toaster position="top-right" expand={false} richColors />
      </body>
    </html>
  );
}
