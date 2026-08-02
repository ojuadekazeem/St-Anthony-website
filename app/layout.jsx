import "./globals.css";

export const metadata = {
  title: "Sts. Anthony & Lydia Foundation — Adopt a Widow",
  description:
    "A non-profit founded in 2010, alleviating hunger and poverty among widows and widowers in Nigeria. Provide food, shelter and essential services — adopt a widow today.",
  keywords: [
    "widows",
    "widowers",
    "charity",
    "Nigeria",
    "Ibadan",
    "nonprofit",
    "adopt a widow",
    "donate",
  ],
  openGraph: {
    title: "Sts. Anthony & Lydia Foundation",
    description:
      "Alleviating hunger and poverty among widows and widowers in Nigeria since 2010.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
