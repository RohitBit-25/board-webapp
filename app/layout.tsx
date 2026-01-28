import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Premium modern font
import "./globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boardy | Premium Collaborative Whiteboard",
  description: "A high-end real-time collaborative whiteboard for creative professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>

            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>

      </body>
    </html>
  );
}
