import "./globals.css";
import { Navbar10 } from "@/components/navbar-10";
import { Footer2 } from "@/components/footer-02";

export const metadata = {
  title: "Inn The Middle | Langley Mill",
  description:
    "Inn The Middle, 125 Station Road, Langley Mill NG16 4DU. A traditional community pub with cask ales, a lunchtime carvery, courtyard garden, live entertainment and quiz nights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar10 />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
