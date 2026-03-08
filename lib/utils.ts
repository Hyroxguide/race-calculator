export function timeToSeconds(min: number, sec: number): number {
  return parseInt(String(min || 0)) * 60 + parseInt(String(sec || 0))
}

export function secondsToTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  
  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export function formatTimeDifference(seconds: number): string {
  const absSeconds = Math.abs(seconds)
  const minutes = Math.floor(absSeconds / 60)
  const secs = absSeconds % 60
  const sign = seconds < 0 ? '-' : '+'
  return `${sign}${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
