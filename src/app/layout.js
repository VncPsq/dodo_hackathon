import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Dodo Hackathon",
	description: "Dodo Hackathon",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body suppressHydrationWarning className={inter.className}>
				<AuthProvider>
					<Header />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
