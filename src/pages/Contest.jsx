import { useParams, useNavigate } from "react-router-dom"
import { useTeamStore } from "../store/useTeamStore"
import { useState } from "react"
import Header from '../components/Header'
export default function Contest() {
  const { id } = useParams()
  const nav = useNavigate()
  const { teams, deleteTeam, loadTeam } = useTeamStore()

  const matchTeams = teams[id] || []
  const [success, setSuccess] = useState(false)
  const [previewTeam, setPreviewTeam] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(null)

  return (
    <div className="pb-28 bg-gray-100 min-h-screen">

      <div className="bg-indigo-900 text-white p-4 shadow">
        <Header title="Contest" showBack={true} backTo="/" />

      </div>

      <div className="p-4">
        {matchTeams.map((team, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow mb-4 border">
            
            <div className="flex justify-between items-center">
              <p className="font-semibold">Team {i + 1}</p>

              <div className="flex gap-2">
                <button
                  className="px-2 py-1 text-xs bg-gray-200 rounded"
                  onClick={() => {
                    loadTeam(team)
                    nav(`/match/${id}/pick-players?edit=${i}`)
                  }}
                >
                  Edit
                </button>

                <button
                  className="px-2 py-1 text-xs bg-gray-200 rounded"
                  onClick={() => setConfirmDelete(i)}
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4">
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
                className="ml-auto px-3 py-2 rounded bg-pink-600 text-white"
                onClick={() => setPreviewTeam(team)}
              >
                Team Preview
              </button>
            </div>

            <div className="grid grid-cols-4 text-center text-xs mt-4">
              <p>WK<br />{team.counts?.["Wicket-Keeper"] || 0}</p>
              <p>BAT<br />{team.counts?.["Batsman"] || 0}</p>
              <p>AR<br />{team.counts?.["All-Rounder"] || 0}</p>
              <p>BOWL<br />{team.counts?.["Bowler"] || 0}</p>
            </div>

            <button
              className="mt-4 w-full py-3 bg-pink-600 text-white rounded-xl"
              onClick={() => {
                setSuccess(true)
                setTimeout(() => setSuccess(false), 2000)
              }}
            >
              Register Team ₹39
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-xl flex justify-between">
        <button
          onClick={() => nav(`/match/${id}/pick-players`)}
          className="px-6 py-3 border border-pink-600 text-pink-600 rounded-xl"
        >
          Create Team
        </button>
      </div>

      {previewTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-xl w-full max-w-md shadow-md">
            <p className="text-center font-semibold mb-3">Team Preview</p>

            <div className="space-y-2 max-h-80 overflow-y-auto">
              {previewTeam.players.map((p) => (
                <div key={p.player_id} className="flex justify-between bg-gray-100 p-2 rounded">
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

      {confirmDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white p-5 rounded-xl w-full max-w-sm shadow-md">

            <p className="font-semibold text-center mb-4">Delete this team?</p>

            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setConfirmDelete(null)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-pink-600 text-white rounded"
                onClick={() => {
                  deleteTeam(id, confirmDelete)
                  setConfirmDelete(null)
                }}
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}

      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
            <div className="text-green-600 text-4xl mb-3">✓</div>
            <p className="text-lg font-semibold">Team Registered Successfully!</p>
            <p className="text-gray-500 text-sm mt-1">You have joined the contest</p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-4 px-6 py-2 rounded bg-pink-600 text-white w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
