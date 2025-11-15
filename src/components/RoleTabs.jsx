export default function RoleTabs({ active, setActive }) {
  const tabs = [
    { key: "Wicket-Keeper", label: "WK" },
    { key: "Batsman", label: "BAT" },
    { key: "All-Rounder", label: "AR" },
    { key: "Bowler", label: "BOWL" }
  ]

  return (
    <div className="flex justify-between border-b">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setActive(t.key)}
          className={`flex-1 py-2 text-center ${
            active === t.key ? "border-b-4 border-indigo-600 text-indigo-600" : "text-gray-600"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
