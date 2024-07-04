import { Montserrat, Maven_Pro, Kalam } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { AuthProvider } from "@/context/AuthContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const maven = Maven_Pro({ subsets: ["latin"], variable: "--font-maven" });

export const metadata = {
  title: "Dodo Hackathon",
  description: "Dodo Hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${maven.variable}`}
      >
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
