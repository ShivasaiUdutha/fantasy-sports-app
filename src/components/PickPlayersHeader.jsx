export default function PickPlayersHeader({ title, teamA, teamB, selectedCount, creditLeft }) {
  return (
    <div className="bg-indigo-900 text-white p-4 rounded-b-3xl">
      <p className="text-lg font-semibold mb-3">{title}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <img src={teamA.logo} className="w-12 h-12" />
          <p className="mt-1 font-semibold">{teamA.short}</p>
        </div>

        <div className="text-center">
          <p className="text-sm opacity-70">Max 7 players from a team</p>
          <div className="flex items-center justify-center gap-4 mt-1">
            <div className="text-center">
              <p className="text-xl font-bold">{selectedCount}</p>
              <p className="text-xs opacity-70">Players</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">{creditLeft}</p>
              <p className="text-xs opacity-70">Credits Left</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src={teamB.logo} className="w-12 h-12" />
          <p className="mt-1 font-semibold">{teamB.short}</p>
        </div>
      </div>

      <div className="flex gap-1 mt-4 justify-center flex-wrap">
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < selectedCount ? "bg-pink-600" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
