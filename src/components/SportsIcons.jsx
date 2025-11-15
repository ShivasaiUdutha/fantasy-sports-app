
export default function SportsIcons({ active, setActive }) {
  const sports = [
    { key: 'cricket', label: 'Cricket', img: 'public/cricket.png' },
    { key: 'football', label: 'Football', img: 'public/football.png' },
    { key: 'basketball', label: 'Basketball', img: 'public/basketball.png' },
    { key: 'rugby', label: 'Rugby', img: 'public/rugby-ball.png' },
    { key: 'hockey', label: 'Hockey', img: 'public/ice-hockey.png' }
  ]

  return (
    <div className="bg-indigo-900 text-white px-4 pb-4 flex gap-6 overflow-auto">
      {sports.map((s) => (
        <div
          key={s.key}
          onClick={() => setActive(s.key)}
          className={`flex flex-col items-center cursor-pointer ${
            active === s.key ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <img src={s.img} className="w-10 h-10" />
          <p className="text-xs mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
