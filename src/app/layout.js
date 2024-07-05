import { Montserrat, Maven_Pro, Kalam } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
					<div className="flex flex-col min-h-60">{children}</div>
					<Footer />
					<ToastContainer />
				</AuthProvider>
			</body>
		</html>
	);
}
