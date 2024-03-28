import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-h-full max-w-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
