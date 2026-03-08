export default function Footer() {
  return (
    <footer className="mt-12 border-t-2 border-gray-800 py-8 text-center text-gray-500">
      <div className="container mx-auto px-4">
        <p className="mb-2">&copy; 2025 HYROX Guide Korea</p>
        <p>
          <a
            href="https://www.instagram.com/hyrox.guide.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Instagram
          </a>
          {' | '}
          <a
            href="https://hybridathleteclub.com/average-hyrox-times/season_8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            데이터 출처
          </a>
        </p>
      </div>
    </footer>
  )
}
