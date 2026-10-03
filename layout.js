import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Fritz John M. Cañete",
  description: "Personal portfolio website for Fritz John M. Cañete.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#f8f7f3] text-[#1d1d1b] antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
