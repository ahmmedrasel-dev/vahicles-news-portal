import Header from "./components/Shared/Header";
import "./globals.css";
import { poppins } from "./fonts";
import FooterSection from "./components/Shared/FooterSection";

export const metadata = {
  title: "Car Solution Blog",
  description: "Discover common problems, solutions, and maintenance techniques to keep your vehicle running smoothly. Get started now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}

        <FooterSection />
      </body>
    </html>
  );
}
