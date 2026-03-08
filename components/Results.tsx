'use client'

import { secondsToTime } from '@/lib/utils'

interface ResultsProps {
  predictedTime: string
  comparison: string
  breakdown: {
    run: string
    roxzone: string
    stations: string
  }
  division: 'men' | 'women'
}

export default function Results({ predictedTime, comparison, breakdown, division }: ResultsProps) {
  const shareResult = () => {
    const divisionText = division === 'men' ? '남자' : '여자'
    const shareText = `🏃 하이록스 예상 기록 (오픈 싱글 ${divisionText})

⏱️ 예상 완주: ${predictedTime}

📊 구간별 기록:
🏃 런: ${breakdown.run}
🔄 록스존: ${breakdown.roxzone}
💪 스테이션: ${breakdown.stations}

📱 하이록스 기록 계산기
https://hyroxguide.kr
@hyrox.guide.kr`

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('결과가 복사되었습니다!\n인스타그램이나 카톡에 공유해보세요.')
      }).catch(() => {
        alert('복사에 실패했습니다. 다시 시도해주세요.')
      })
    } else {
      alert('이 브라우저는 복사 기능을 지원하지 않습니다.')
    }
  }

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-primary">예상 완주 기록</h2>
      
      <div className="mb-8 py-8 text-center">
        <div className="mb-4 text-5xl font-extrabold text-primary md:text-6xl">
          {predictedTime}
        </div>
        <div 
          className="text-gray-400"
          dangerouslySetInnerHTML={{ __html: comparison }}
        />
      </div>

      <h3 className="mb-4 text-lg font-semibold text-primary">구간별 비중</h3>
      <div className="mb-6 space-y-3">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <span className="font-semibold text-primary">런</span>
          <span className="font-medium">{breakdown.run}</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <span className="font-semibold text-primary">록스존</span>
          <span className="font-medium">{breakdown.roxzone}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-primary">스테이션</span>
          <span className="font-medium">{breakdown.stations}</span>
        </div>
      </div>

      <button
        onClick={shareResult}
        className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-all hover:-translate-y-1 hover:bg-yellow-300"
      >
        결과 복사하기
      </button>
    </div>
  )
}
