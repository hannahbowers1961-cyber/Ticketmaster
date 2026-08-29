import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Tickets",
  description: "Mobile ticketing experience",
};

// This is the magic block that fixes the mobile top bar
export const viewport: Viewport = {
  themeColor: "#1a1a1a", // Matches the dark header of your app
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover", // Pushes the website to the absolute edges (under the notch)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Added a default dark background here to fix the "white bounce" effect when scrolling too far up */}
      <body className="bg-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}