'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Controls from '@/components/Controls'
import SimpleMode from '@/components/SimpleMode'
import AdvancedMode from '@/components/AdvancedMode'
import Results from '@/components/Results'
import Footer from '@/components/Footer'
import { AVERAGES } from '@/lib/data'
import { timeToSeconds, secondsToTime, formatTimeDifference } from '@/lib/utils'

export default function Home() {
  const [division, setDivision] = useState<'men' | 'women'>('men')
  const [mode, setMode] = useState<'simple' | 'advanced'>('simple')
  
  // Simple mode state
  const [runMin, setRunMin] = useState(0)
  const [runSec, setRunSec] = useState(0)
  const [roxzoneMin, setRoxzoneMin] = useState(0)
  const [roxzoneSec, setRoxzoneSec] = useState(0)
  const [stationsMin, setStationsMin] = useState(0)
  const [stationsSec, setStationsSec] = useState(0)
  
  // Advanced mode state
  const [runs, setRuns] = useState(Array(8).fill({ min: 0, sec: 0 }))
  const [stations, setStations] = useState(Array(8).fill({ min: 0, sec: 0 }))
  const [roxzoneMinAdv, setRoxzoneMinAdv] = useState(0)
  const [roxzoneSecAdv, setRoxzoneSecAdv] = useState(0)
  
  // Results state
  const [predictedTime, setPredictedTime] = useState('00:00:00')
  const [comparison, setComparison] = useState('기록을 입력해주세요')
  const [breakdown, setBreakdown] = useState({
    run: '--:--',
    roxzone: '--:--',
    stations: '--:--'
  })

  // Calculate result
  useEffect(() => {
    calculateResult()
  }, [division, mode, runMin, runSec, roxzoneMin, roxzoneSec, stationsMin, stationsSec, runs, stations, roxzoneMinAdv, roxzoneSecAdv])

  const calculateResult = () => {
    const avgData = AVERAGES[division]
    let runTotal = 0
    let roxzoneTotal = 0
    let stationsTotal = 0

    if (mode === 'simple') {
      const runPaceSec = timeToSeconds(runMin, runSec)
      runTotal = runPaceSec * 8
      roxzoneTotal = timeToSeconds(roxzoneMin, roxzoneSec)
      stationsTotal = timeToSeconds(stationsMin, stationsSec)
    } else {
      runs.forEach(run => {
        runTotal += timeToSeconds(run.min, run.sec)
      })
      stations.forEach(station => {
        stationsTotal += timeToSeconds(station.min, station.sec)
      })
      roxzoneTotal = timeToSeconds(roxzoneMinAdv, roxzoneSecAdv)
    }

    const totalSeconds = runTotal + roxzoneTotal + stationsTotal

    if (totalSeconds === 0) {
      setPredictedTime('00:00:00')
      setComparison('기록을 입력해주세요')
      return
    }

    setPredictedTime(secondsToTime(totalSeconds))

    const avgTotal = timeToSeconds(avgData.overall.min, avgData.overall.sec)
    const diff = totalSeconds - avgTotal
    const diffText = formatTimeDifference(diff)
    
    let comparisonHTML = ''
    if (diff < 0) {
      comparisonHTML = `평균 대비 <span class="text-primary font-semibold">${diffText} 빠름</span>`
    } else if (diff > 0) {
      comparisonHTML = `평균 대비 <span class="text-secondary font-semibold">${diffText} 느림</span>`
    } else {
      comparisonHTML = '평균과 동일'
    }
    comparisonHTML += `<br><span class="text-sm opacity-70">(2025 서울 평균: ${secondsToTime(avgTotal)})</span>`
    
    setComparison(comparisonHTML)

    const runPercent = (runTotal / totalSeconds * 100).toFixed(1)
    const roxzonePercent = (roxzoneTotal / totalSeconds * 100).toFixed(1)
    const stationsPercent = (stationsTotal / totalSeconds * 100).toFixed(1)

    setBreakdown({
      run: `${secondsToTime(runTotal)} (${runPercent}%)`,
      roxzone: `${secondsToTime(roxzoneTotal)} (${roxzonePercent}%)`,
      stations: `${secondsToTime(stationsTotal)} (${stationsPercent}%)`
    })
  }

  const fillAverageValues = () => {
    const avgData = AVERAGES[division]
    
    if (mode === 'simple') {
      const runTotalSec = timeToSeconds(avgData.run.min, avgData.run.sec)
      const runPaceSec = Math.round(runTotalSec / 8)
      const runPaceMin = Math.floor(runPaceSec / 60)
      const runPaceSecRem = runPaceSec % 60
      
      setRunMin(runPaceMin)
      setRunSec(runPaceSecRem)
      setRoxzoneMin(avgData.roxzone.min)
      setRoxzoneSec(avgData.roxzone.sec)
      setStationsMin(avgData.stations.min)
      setStationsSec(avgData.stations.sec)
    } else {
      const runTotalSec = timeToSeconds(avgData.run.min, avgData.run.sec)
      const runPaceSec = Math.round(runTotalSec / 8)
      const runPaceMin = Math.floor(runPaceSec / 60)
      const runPaceSecRem = runPaceSec % 60
      
      setRuns(Array(8).fill({ min: runPaceMin, sec: runPaceSecRem }))
      
      const stationKeys = ['skierg', 'sledpush', 'sledpull', 'burpees', 'row', 'farmerscarry', 'lunges', 'wallballs'] as const
      const stationValues = stationKeys.map(key => avgData.stationDetails[key])
      setStations(stationValues)
      
      setRoxzoneMinAdv(avgData.roxzone.min)
      setRoxzoneSecAdv(avgData.roxzone.sec)
    }
  }

  const resetAllInputs = () => {
    setRunMin(0)
    setRunSec(0)
    setRoxzoneMin(0)
    setRoxzoneSec(0)
    setStationsMin(0)
    setStationsSec(0)
    setRuns(Array(8).fill({ min: 0, sec: 0 }))
    setStations(Array(8).fill({ min: 0, sec: 0 }))
    setRoxzoneMinAdv(0)
    setRoxzoneSecAdv(0)
    setPredictedTime('00:00:00')
    setComparison('평균과 비교')
    setBreakdown({ run: '--:--', roxzone: '--:--', stations: '--:--' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Controls
          division={division}
          setDivision={setDivision}
          mode={mode}
          setMode={setMode}
          onFillAverage={fillAverageValues}
          onReset={resetAllInputs}
        />
        
        {mode === 'simple' ? (
          <SimpleMode
            runMin={runMin}
            runSec={runSec}
            roxzoneMin={roxzoneMin}
            roxzoneSec={roxzoneSec}
            stationsMin={stationsMin}
            stationsSec={stationsSec}
            setRunMin={setRunMin}
            setRunSec={setRunSec}
            setRoxzoneMin={setRoxzoneMin}
            setRoxzoneSec={setRoxzoneSec}
            setStationsMin={setStationsMin}
            setStationsSec={setStationsSec}
          />
        ) : (
          <AdvancedMode
            runs={runs}
            stations={stations}
            roxzoneMin={roxzoneMinAdv}
            roxzoneSec={roxzoneSecAdv}
            setRuns={setRuns}
            setStations={setStations}
            setRoxzoneMin={setRoxzoneMinAdv}
            setRoxzoneSec={setRoxzoneSecAdv}
          />
        )}
        
        <Results
          predictedTime={predictedTime}
          comparison={comparison}
          breakdown={breakdown}
          division={division}
        />
      </main>
      
      <Footer />
    </div>
  )
}
