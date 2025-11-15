import { useNavigate } from "react-router-dom"

export default function Header({ title, showBack = false, backTo = "/", showMyTeams = false }) {
  const nav = useNavigate()

  return (
    <div className="bg-indigo-900 text-white p-4 flex justify-between items-center shadow">
      {showBack ? (
        <button
          className="text-white text-xl"
          onClick={() => nav(backTo)}
        >
          ←
        </button>
      ) : (
        <div className="w-6"></div>
      )}

      <p className="text-lg font-semibold">{title}</p>

      {showMyTeams ? (
        <button
          onClick={() => nav("/my-teams")}
          className="text-sm bg-pink-600 px-3 py-1 rounded"
        >
          My Teams
        </button>
      ) : (
        <div className="w-16"></div>
      )}
    </div>
  )
}
