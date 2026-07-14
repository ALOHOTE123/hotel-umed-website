import "./globals.css";

export const metadata = {
  title: "Hotel Umed Resto Bar",
  description: "Nature Resort & Outdoor Dining in Akole",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}