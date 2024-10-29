import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google';
import Providers from "@/components/Providers";


// const inter = Inter({ subsets: ['latin'] });

// const queryClient = new QueryClient();

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <div className={inter.className}>
//           <QueryClientProvider client={queryClient} >
//           <GoogleOAuthProvider clientId="660015666152-gaipnd4gmjk5q16hq466g7blscb3rj7e.apps.googleusercontent.com">
//             {children}
//             <Toaster />
//             <ReactQueryDevtools />
//           </GoogleOAuthProvider>
//           </QueryClientProvider>
//         </div>
//       </body>
//     </html>
//   );
// }



const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className={inter.className}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
