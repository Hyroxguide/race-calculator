interface ControlsProps {
  division: 'men' | 'women'
  setDivision: (division: 'men' | 'women') => void
  mode: 'simple' | 'advanced'
  setMode: (mode: 'simple' | 'advanced') => void
  onFillAverage: () => void
  onReset: () => void
}

export default function Controls({
  division,
  setDivision,
  mode,
  setMode,
  onFillAverage,
  onReset
}: ControlsProps) {
  return (
    <div className="mb-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="mb-3 block font-semibold text-primary">디비전</label>
          <div className="flex gap-4">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="division"
                value="men"
                checked={division === 'men'}
                onChange={(e) => setDivision(e.target.value as 'men')}
                className="h-4 w-4 accent-primary"
              />
              <span>남자</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="division"
                value="women"
                checked={division === 'women'}
                onChange={(e) => setDivision(e.target.value as 'women')}
                className="h-4 w-4 accent-primary"
              />
              <span>여자</span>
            </label>
          </div>
        </div>

        <div>
          <label className="mb-3 block font-semibold text-primary">입력 모드</label>
          <div className="flex gap-4">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="mode"
                value="simple"
                checked={mode === 'simple'}
                onChange={(e) => setMode(e.target.value as 'simple')}
                className="h-4 w-4 accent-primary"
              />
              <span>초보 모드</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="mode"
                value="advanced"
                checked={mode === 'advanced'}
                onChange={(e) => setMode(e.target.value as 'advanced')}
                className="h-4 w-4 accent-primary"
              />
              <span>상세 모드</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <button
          onClick={onFillAverage}
          className="rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-all hover:-translate-y-1 hover:bg-yellow-300"
        >
          평균값으로 채우기
        </button>
        <button
          onClick={onReset}
          className="rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-600"
        >
          초기화
        </button>
      </div>
    </div>
  )
}
