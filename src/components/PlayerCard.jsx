export default function PlayerCard({ p, selected, toggle }) {
  return (
    <div
      className="p-3 bg-white rounded-xl shadow flex justify-between items-center mb-2"
      onClick={toggle}
    >
      <div className="flex items-center gap-3">
        <img src={p.team_logo} className="w-10 h-10" />
        <div>
          <p className="font-semibold">{p.name}</p>
          <p className="text-xs text-gray-500">{p.team_short_name} • {p.role}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm">{p.event_total_points}</p>
        <p className="text-sm font-semibold">{p.event_player_credit}</p>
      </div>

      <div>
        <div
          className={`w-5 h-5 rounded-full border-2 ${
            selected ? "bg-pink-600 border-pink-600" : "border-gray-400"
          }`}
        />
      </div>
    </div>
  )
}
