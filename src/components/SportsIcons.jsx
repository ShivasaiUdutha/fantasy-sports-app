
export default function SportsIcons({ active, setActive }) {
  const sports = [
    { key: 'cricket', label: 'Cricket', img: 'src/assets/cricket.png' },
    { key: 'football', label: 'Football', img: 'src/assets/football.png' },
    { key: 'basketball', label: 'Basketball', img: 'src/assets/basketball.png' },
    { key: 'rugby', label: 'Rugby', img: 'src/assets/rugby-ball.png' },
    { key: 'hockey', label: 'Hockey', img: 'src/assets/ice-hockey.png' }
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
