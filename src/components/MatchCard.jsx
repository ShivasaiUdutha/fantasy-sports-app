export default function MatchCard({ m, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-4 mt-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl shadow cursor-pointer mx-4"
    >
      <p className="text-xs text-gray-600 mb-1">10th IPL Match</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={m.t1_image} className="w-10 h-10" />
          <p className="font-semibold">{m.t1_short_name}</p>
        </div>

        <p className="font-semibold text-lg">VS</p>

        <div className="flex items-center gap-2">
          <p className="font-semibold">{m.t2_short_name}</p>
          <img src={m.t2_image} className="w-10 h-10" />
        </div>
      </div>
    </div>
  )
}
