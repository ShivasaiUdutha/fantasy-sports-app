const sports = ['cricket', 'football', 'basketball', 'rugby', 'hockey']

export default function SportTabs({ active, setActive }) {
  return (
    <div className="flex gap-3 overflow-auto p-3 bg-indigo-900 text-white">
      {sports.map((s) => (
        <div
          key={s}
          onClick={() => setActive(s)}
          className={`px-4 py-2 rounded-full cursor-pointer ${
            active === s ? 'bg-pink-500' : 'bg-indigo-700'
          }`}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </div>
      ))}
    </div>
  )
}
