

import "./globals.css"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B111E] text-white">
        {children}
      </body>
    </html>
  );
}
