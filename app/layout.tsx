import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Hotel Umed Resto Bar | Family Restaurant in Rumbhodi",
  description:
    "Enjoy delicious food, refreshing beverages, and a peaceful green atmosphere at Hotel Umed Resto Bar, Rumbhodi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}