import Header from "../components/Header"
import { useTeamStore } from "../store/useTeamStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function MyTeams() {
  const { teams, deleteTeam, loadTeam } = useTeamStore()
  const [openIndex, setOpenIndex] = useState(null)
  const [previewTeam, setPreviewTeam] = useState(null)
  const nav = useNavigate()

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Header title="My Teams" showBack={true} backTo="/" />

      <div className="p-4">
        {Object.keys(teams).length === 0 && (
          <p className="text-center text-gray-500 mt-10">No teams created yet</p>
        )}

        {Object.entries(teams).map(([matchId, teamList]) => (
          <div key={matchId} className="mb-4">
            <p className="font-semibold mb-2">Match #{matchId}</p>

            {teamList.map((team, index) => {
              const idKey = `${matchId}-${index}`
              const isOpen = openIndex === idKey

              return (
                <div
                  key={idKey}
                  className="bg-white p-4 rounded-xl shadow mb-4 border"
                >
                  <div
                    onClick={() => setOpenIndex(isOpen ? null : idKey)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <p className="font-semibold">Team {index + 1}</p>
                    <p className="text-pink-600 text-sm">{isOpen ? "Hide" : "View"}</p>
                  </div>

                  <div className="flex gap-6 mt-3">
                    <div className="text-center">
                      <img src={team.captain?.team_logo} className="w-12 h-12 rounded-full" />
                      <p className="text-xs font-bold text-pink-600 mt-1">C</p>
                      <p className="text-xs">{team.captain?.name}</p>
                    </div>

                    <div className="text-center">
                      <img src={team.viceCaptain?.team_logo} className="w-12 h-12 rounded-full" />
                      <p className="text-xs font-bold text-indigo-600 mt-1">VC</p>
                      <p className="text-xs">{team.viceCaptain?.name}</p>
                    </div>

                    <button
                      className="ml-auto px-3 py-2 rounded bg-pink-600 text-white text-sm"
                      onClick={() => setPreviewTeam(team)}
                    >
                      Preview
                    </button>
                  </div>

                  {isOpen && (
                    <div
                      className="mt-4 transition-all duration-300 ease-in-out"
                    >
                      <div className="flex justify-between mb-3">
                        <button
                          className="px-3 py-2 bg-gray-200 rounded text-sm"
                          onClick={() => {
                            loadTeam(team)
                            nav(`/match/${matchId}/pick-players?edit=${index}`)
                          }}
                        >
                          Edit Team
                        </button>

                        <button
                          className="px-3 py-2 bg-red-500 text-white rounded text-sm"
                          onClick={() => deleteTeam(matchId, index)}
                        >
                          Delete
                        </button>
                      </div>

                      <p className="font-semibold mb-2 text-sm">Players</p>

                      <div className="space-y-2">
                        {team.players.map((p) => (
                          <div
                            key={p.player_id}
                            className="flex justify-between bg-gray-100 p-2 rounded"
                          >
                            <div className="flex items-center gap-3">
                              <img src={p.team_logo} className="w-8 h-8 rounded" />
                              <span className="text-sm">{p.name}</span>
                            </div>
                            <span className="text-xs text-gray-600">{p.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {previewTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-4 rounded-xl w-full max-w-md shadow-md">
            <p className="text-center font-semibold mb-3">Team Preview</p>

            <div className="space-y-2 max-h-80 overflow-y-auto">
              {previewTeam.players.map((p) => (
                <div
                  key={p.player_id}
                  className="flex justify-between bg-gray-100 p-2 rounded"
                >
                  <span>{p.name}</span>
                  <span className="text-gray-500 text-xs">{p.role}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setPreviewTeam(null)}
              className="w-full mt-4 bg-pink-600 text-white py-2 rounded"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
