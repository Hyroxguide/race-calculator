export default function Header() {
  return (
    <header className="border-b-2 border-gray-800 py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-black">
            <span className="text-3xl font-bold text-primary">H</span>
          </div>
          <h1 className="text-3xl font-bold text-primary">하이록스 기록 계산기</h1>
        </div>
        <a
          href="https://www.instagram.com/hyrox.guide.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-2 text-primary transition-all hover:bg-primary hover:text-black"
        >
          <i className="fab fa-instagram"></i>
          @hyrox.guide.kr
        </a>
        <p className="mt-4 text-sm text-gray-400">2025 서울(코엑스) 오픈 싱글 평균 기준</p>
      </div>
    </header>
  )
}
