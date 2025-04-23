import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client"
import { Cairo } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const cairo = Cairo({ 
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "يعقوب الحيدري - مطور ويب",
  description: "موقع شخصي لعرض أعمالي وخبراتي في مجال تطوير الويب",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", cairo.className)}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return <ClientLayout>{children}</ClientLayout>
// }

