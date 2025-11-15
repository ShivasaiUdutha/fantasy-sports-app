import { useNavigate } from "react-router-dom"

export default function HeaderTop() {
  const nav = useNavigate()

  return (
    <div className="bg-indigo-900 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="w-10 h-10 rounded-full"
        />
        <p className="font-medium">Bhupender Singh</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm opacity-60">Balance</p>
          <p className="font-semibold text-green-400">₹12,120.99</p>
        </div>

        <button
          onClick={() => nav("/my-teams")}
          className="px-3 py-1 bg-pink-600 text-white rounded text-sm"
        >
          My Teams
        </button>
      </div>
    </div>
  )
}
