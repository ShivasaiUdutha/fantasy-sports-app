
export default function SportsIcons({ active, setActive }) {
  const sports = [
    { key: 'cricket', label: 'Cricket', img: 'https://cdn-icons-png.flaticon.com/512/2160/2160064.png' },
    { key: 'football', label: 'Football', img: 'https://cdn-icons-png.flaticon.com/512/1099/1099672.png' },
    { key: 'basketball', label: 'Basketball', img: 'https://cdn-icons-png.flaticon.com/512/889/889455.png' },
    { key: 'rugby', label: 'Rugby', img: 'https://cdn-icons-png.flaticon.com/512/2972/2972028.png' },
    { key: 'hockey', label: 'Hockey', img: 'https://cdn-icons-png.flaticon.com/512/9140/9140405.png' }
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
