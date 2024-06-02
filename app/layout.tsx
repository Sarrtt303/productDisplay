// app/layout.tsx
import { ReactNode } from 'react';
import "./globals.css"   //sets global styles for the App

// Defining an interface for the props of the RootLayout component
interface RootLayoutProps {
  children: ReactNode;
}
// Defining the RootLayout functional component
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