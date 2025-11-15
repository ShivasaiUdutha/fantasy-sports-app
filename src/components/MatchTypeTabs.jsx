const types = ['Matches', 'Live', 'Completed']

export default function MatchTypeTabs({ active, setActive }) {
  return (
    <div className="flex justify-around bg-white shadow p-3">
      {types.map((t) => (
        <button
          key={t}
          onClick={() => setActive(t)}
          className={`px-4 pb-2 border-b-4 ${
            active === t ? 'border-indigo-700 text-indigo-700' : 'border-transparent text-gray-400'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
