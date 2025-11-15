import Header from '../components/Header'
import BottomBar from '../components/BottomBar'
import { useTeamStore } from '../store/useTeamStore'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export default function CaptainSelection() {
  const { id } = useParams()
  const nav = useNavigate()
  const { selectedPlayers, saveTeam, reset } = useTeamStore()

  const [captain, setCaptain] = useState(null)
  const [viceCaptain, setViceCaptain] = useState(null)

  const isCaptain = (p) => captain?.player_id === p.player_id
  const isViceCaptain = (p) => viceCaptain?.player_id === p.player_id

  const assignCaptain = (p) => {
    if (isCaptain(p)) {
      setCaptain(null)
      return
    }
    if (isViceCaptain(p)) {
      setViceCaptain(null)
    }
    setCaptain(p)
  }

  const assignViceCaptain = (p) => {
    if (isViceCaptain(p)) {
      setViceCaptain(null)
      return
    }
    if (isCaptain(p)) {
      setCaptain(null)
    }
    setViceCaptain(p)
  }

  const submit = () => {
    if (captain && viceCaptain) {
      saveTeam(id, { players: selectedPlayers, captain, viceCaptain })
      reset()
      nav(`/match/${id}/teams`)
    }
  }

  return (
    <div className="pb-20">
      <Header title="Select Captain & VC" />

      <div className="p-4">
        {selectedPlayers.map((p) => (
          <div
            key={p.player_id}
            className="p-3 bg-white border mb-2 rounded flex justify-between items-center"
          >
            <p>{p.name || p.player_name}</p>

            <div className="flex gap-2">
              <button
                onClick={() => assignCaptain(p)}
                className={`px-3 py-1 rounded ${
                  isCaptain(p)
                    ? 'bg-pink-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                C
              </button>

              <button
                onClick={() => assignViceCaptain(p)}
                className={`px-3 py-1 rounded ${
                  isViceCaptain(p)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                VC
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomBar
        left="Team Preview"
        right="Save Team"
        leftAction={() => {}}
        rightAction={submit}
      />
    </div>
  )
}
