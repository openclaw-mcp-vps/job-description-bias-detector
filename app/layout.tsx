import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Description Bias Detector",
  description: "Detect gender and age bias in job postings. Get instant analysis with highlighted problematic phrases and neutral alternatives."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="400ea6f6-830f-42c4-a0ed-d3a1c408af0e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
