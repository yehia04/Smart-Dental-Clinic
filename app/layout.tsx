import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Dental Clinic | عيادة سمارت لطب الأسنان",
  description:
    "Thoughtful dental care in Shafa Badran, Amman. Comprehensive dentistry, implants, cosmetic treatments and endodontics with Dr. Suhaib Ali.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
