import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '하이록스 기록 계산기 | HYROX Calculator',
  description: 'HYROX 예상 기록 계산 및 2025 서울(코엑스) 평균 비교 도구. 초보자도 쉽게 사용할 수 있는 무료 계산기.',
  keywords: 'HYROX, 하이록스, 기록, 계산기, 서울, 코엑스, 평균, 비교',
  openGraph: {
    title: '하이록스 기록 계산기',
    description: 'HYROX 예상 기록 계산 및 2025 서울 평균 비교',
    url: 'https://hyroxguide.kr',
    siteName: 'HYROX Guide Korea',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '하이록스 기록 계산기',
    description: 'HYROX 예상 기록 계산 및 서울 평균 비교',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
