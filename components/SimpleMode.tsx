interface SimpleModeProps {
  runMin: number
  runSec: number
  roxzoneMin: number
  roxzoneSec: number
  stationsMin: number
  stationsSec: number
  setRunMin: (value: number) => void
  setRunSec: (value: number) => void
  setRoxzoneMin: (value: number) => void
  setRoxzoneSec: (value: number) => void
  setStationsMin: (value: number) => void
  setStationsSec: (value: number) => void
}

export default function SimpleMode({
  runMin,
  runSec,
  roxzoneMin,
  roxzoneSec,
  stationsMin,
  stationsSec,
  setRunMin,
  setRunSec,
  setRoxzoneMin,
  setRoxzoneSec,
  setStationsMin,
  setStationsSec
}: SimpleModeProps) {
  return (
    <div className="mb-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-primary">기록 입력</h2>
      
      <div className="space-y-6">
        <div>
          <label className="mb-3 block font-semibold text-primary">1km 평균 기록</label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="0"
              max="30"
              value={runMin}
              onChange={(e) => setRunMin(parseInt(e.target.value) || 0)}
              className="w-20 rounded-lg border-2 border-primary bg-black p-3 text-center text-xl font-semibold text-primary focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            />
            <span className="text-2xl font-semibold text-primary">:</span>
            <input
              type="number"
              min="0"
              max="59"
              value={runSec}
              onChange={(e) => setRunSec(parseInt(e.target.value) || 0)}
              className="w-20 rounded-lg border-2 border-primary bg-black p-3 text-center text-xl font-semibold text-primary focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-3 block font-semibold text-primary">록스존 총합</label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="0"
              max="30"
              value={roxzoneMin}
              onChange={(e) => setRoxzoneMin(parseInt(e.target.value) || 0)}
              className="w-20 rounded-lg border-2 border-primary bg-black p-3 text-center text-xl font-semibold text-primary focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            />
            <span className="text-2xl font-semibold text-primary">:</span>
            <input
              type="number"
              min="0"
              max="59"
              value={roxzoneSec}
              onChange={(e) => setRoxzoneSec(parseInt(e.target.value) || 0)}
              className="w-20 rounded-lg border-2 border-primary bg-black p-3 text-center text-xl font-semibold text-primary focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            />
          </div>
        </div>

        <div>
          <label className="mb-3 block font-semibold text-primary">스테이션 총합</label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="0"
              max="90"
              value={stationsMin}
              onChange={(e) => setStationsMin(parseInt(e.target.value) || 0)}
              className="w-20 rounded-lg border-2 border-primary bg-black p-3 text-center text-xl font-semibold text-primary focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            />
            <span className="text-2xl font-semibold text-primary">:</span>
            <input
              type="number"
              min="0"
              max="59"
              value={stationsSec}
              onChange={(e) => setStationsSec(parseInt(e.target.value) || 0)}
              className="w-20 rounded-lg border-2 border-primary bg-black p-3 text-center text-xl font-semibold text-primary focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300/20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
