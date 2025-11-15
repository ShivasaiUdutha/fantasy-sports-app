import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PickPlayersHeader from "../components/PickPlayersHeader"
import { useTeamStore } from "../store/useTeamStore"
import Header from "../components/Header"
export default function PickCaptain() {
  const { id } = useParams()
  const nav = useNavigate()
  const { selectedPlayers, setCaptain, setViceCaptain, captain, viceCaptain, saveTeam, reset } =
    useTeamStore()

  const [teamA, setTeamA] = useState(null)
  const [teamB, setTeamB] = useState(null)

  useEffect(() => {
    if (selectedPlayers.length > 0) {
      const t1 = selectedPlayers[0].team_short_name
      const t2 = selectedPlayers.find((p) => p.team_short_name !== t1)?.team_short_name

      setTeamA({
        short: t1,
        logo: selectedPlayers.find((p) => p.team_short_name === t1)?.team_logo
      })

      setTeamB({
        short: t2,
        logo: selectedPlayers.find((p) => p.team_short_name === t2)?.team_logo
      })
    }
  }, [selectedPlayers])

  const isCaptain = (p) => captain?.player_id === p.player_id
  const isViceCaptain = (p) => viceCaptain?.player_id === p.player_id

  const assignCaptain = (p) => {
    if (isCaptain(p)) setCaptain(null)
    else {
      if (isViceCaptain(p)) setViceCaptain(null)
      setCaptain(p)
    }
  }

  const assignViceCaptain = (p) => {
    if (isViceCaptain(p)) setViceCaptain(null)
    else {
      if (isCaptain(p)) setCaptain(null)
      setViceCaptain(p)
    }
  }

  const countRoles = (players) => {
    const roles = {}
    players.forEach(p => {
      roles[p.role] = (roles[p.role] || 0) + 1
    })
    return roles
  }

  const saveFinalTeam = () => {
    saveTeam(id, {
      players: selectedPlayers,
      captain,
      viceCaptain,
      counts: countRoles(selectedPlayers)
    })

    reset()
    nav(`/match/${id}/contest`)
  }

  const canSave = captain && viceCaptain && captain.player_id !== viceCaptain.player_id

  return (
    <div className="pb-32">
        <Header title="Select C & VC" showBack={true} backTo={`/match/${id}/pick-players`} />

      <PickPlayersHeader
        title="Select Captain & Vice-Captain"
        teamA={teamA || {}}
        teamB={teamB || {}}
        selectedCount={11}
        creditLeft={0}
      />

      <div className="p-4">
        {selectedPlayers.map((p) => (
          <div
            key={p.player_id}
            className="flex items-center justify-between bg-white p-3 rounded-xl shadow mb-2"
          >
            <div className="flex items-center gap-3">
              <img src={p.team_logo} className="w-10 h-10" />
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-gray-500">
                  {p.team_short_name} • {p.role}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className={`px-3 py-1 rounded-full text-xs ${
                  isCaptain(p)
                    ? "bg-pink-600 text-white"
                    : "border border-gray-400 text-gray-500"
                }`}
                onClick={() => assignCaptain(p)}
              >
                C
              </button>

              <button
                className={`px-3 py-1 rounded-full text-xs ${
                  isViceCaptain(p)
                    ? "bg-indigo-600 text-white"
                    : "border border-gray-400 text-gray-500"
                }`}
                onClick={() => assignViceCaptain(p)}
              >
                VC
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-xl">
        <div className="flex justify-between">
          <button className="px-6 py-3 border border-pink-600 text-pink-600 rounded-xl">
            Team Preview
          </button>

          <button
            className={`px-6 py-3 rounded-xl ${
              canSave ? "bg-pink-600 text-white" : "bg-gray-300 text-gray-500"
            }`}
            disabled={!canSave}
            onClick={saveFinalTeam}
          >
            Save Team
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-2">
          Registration closed in : 02h 11m Left
        </p>
      </div>
    </div>
  )
}
