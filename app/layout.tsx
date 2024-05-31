// app/layout.tsx
import { ReactNode } from 'react';
import "./globals.css"

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>Product Display App</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}