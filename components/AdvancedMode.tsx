interface AdvancedModeProps {
  runs: { min: number; sec: number }[]
  stations: { min: number; sec: number }[]
  roxzoneMin: number
  roxzoneSec: number
  setRuns: (runs: { min: number; sec: number }[]) => void
  setStations: (stations: { min: number; sec: number }[]) => void
  setRoxzoneMin: (value: number) => void
  setRoxzoneSec: (value: number) => void
}

const stationNames = ['SkiErg', 'Sled Push', 'Sled Pull', 'Burpees', 'Row', 'Farmers Carry', 'Lunges', 'Wall Balls']

export default function AdvancedMode({
  runs,
  stations,
  roxzoneMin,
  roxzoneSec,
  setRuns,
  setStations,
  setRoxzoneMin,
  setRoxzoneSec
}: AdvancedModeProps) {
  const updateRun = (index: number, field: 'min' | 'sec', value: number) => {
    const newRuns = [...runs]
    newRuns[index] = { ...newRuns[index], [field]: value }
    setRuns(newRuns)
  }

  const updateStation = (index: number, field: 'min' | 'sec', value: number) => {
    const newStations = [...stations]
    newStations[index] = { ...newStations[index], [field]: value }
    setStations(newStations)
  }

  return (
    <div className="mb-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-primary">상세 기록 입력</h2>
      
      <h3 className="mb-4 text-lg font-semibold text-secondary">런 (1km × 8회)</h3>
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {runs.map((run, index) => (
          <div key={index}>
            <label className="mb-2 block text-sm">{index + 1}회차</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="30"
                value={run.min}
                onChange={(e) => updateRun(index, 'min', parseInt(e.target.value) || 0)}
                className="w-12 rounded-md border-2 border-secondary bg-black p-2 text-center text-secondary focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
              <span className="text-secondary">:</span>
              <input
                type="number"
                min="0"
                max="59"
                value={run.sec}
                onChange={(e) => updateRun(index, 'sec', parseInt(e.target.value) || 0)}
                className="w-12 rounded-md border-2 border-secondary bg-black p-2 text-center text-secondary focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-4 text-lg font-semibold text-secondary">스테이션 (8개)</h3>
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stations.map((station, index) => (
          <div key={index}>
            <label className="mb-2 block text-sm">{stationNames[index]}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="30"
                value={station.min}
                onChange={(e) => updateStation(index, 'min', parseInt(e.target.value) || 0)}
                className="w-12 rounded-md border-2 border-secondary bg-black p-2 text-center text-secondary focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
              <span className="text-secondary">:</span>
              <input
                type="number"
                min="0"
                max="59"
                value={station.sec}
                onChange={(e) => updateStation(index, 'sec', parseInt(e.target.value) || 0)}
                className="w-12 rounded-md border-2 border-secondary bg-black p-2 text-center text-secondary focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/20"
              />
            </div>
          </div>
        ))}
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
    </div>
  )
}
