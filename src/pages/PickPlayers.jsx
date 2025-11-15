import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getPlayers } from "../api/players"
import Header from "../components/Header"
import RoleTabs from "../components/RoleTabs"
import PlayerCard from "../components/PlayerCard"
import BottomBar from "../components/BottomBar"
import PickPlayersHeader from "../components/PickPlayersHeader"
import PickPlayersFooter from "../components/PickPlayersFooter"
import { useTeamStore } from "../store/useTeamStore"
import { LIMITS, MAX_TEAM_PLAYERS, MAX_PLAYERS, MAX_CREDITS } from "../utils/rules"

export default function PickPlayers() {
  const { id } = useParams()
  const nav = useNavigate()
  const [players, setPlayers] = useState([])
  const [role, setRole] = useState("Batsman")

  const { selectedPlayers, setPlayers: setSelected } = useTeamStore()

  useEffect(() => {
    getPlayers().then((d) => setPlayers(d))
  }, [])

  const filtered = players.filter((p) => p.role === role)

  const totalCredits = selectedPlayers.reduce((a, b) => a + b.event_player_credit, 0)

  const roleCount = selectedPlayers.reduce((acc, p) => {
    acc[p.role] = (acc[p.role] || 0) + 1
    return acc
  }, {})

  const teamCount = selectedPlayers.reduce((acc, p) => {
    acc[p.team_short_name] = (acc[p.team_short_name] || 0) + 1
    return acc
  }, {})

  const checkTeamLimit = (p) => {
    const t = teamCount[p.team_short_name] || 0
    return t < MAX_TEAM_PLAYERS
  }

  const checkRoleLimit = (p) => {
    const r = roleCount[p.role] || 0
    return r < LIMITS[p.role].max
  }

  const checkCreditLimit = (p) => {
    return totalCredits + p.event_player_credit <= MAX_CREDITS
  }

  const toggle = (p) => {
    const exists = selectedPlayers.some((x) => x.player_id === p.player_id)

    if (exists) {
      setSelected(selectedPlayers.filter((x) => x.player_id !== p.player_id))
      return
    }

    if (selectedPlayers.length >= MAX_PLAYERS) return
    if (!checkTeamLimit(p)) return
    if (!checkRoleLimit(p)) return
    if (!checkCreditLimit(p)) return

    setSelected([...selectedPlayers, p])
  }

  const isValid = () => {
    if (selectedPlayers.length !== MAX_PLAYERS) return false
    if (totalCredits > MAX_CREDITS) return false

    for (const r in LIMITS) {
      const count = roleCount[r] || 0
      if (count < LIMITS[r].min) return false
      if (count > LIMITS[r].max) return false
    }

    for (const t in teamCount) {
      if (teamCount[t] > MAX_TEAM_PLAYERS) return false
    }

    return true
  }

  return (
    <div className="pb-32">
           <Header
        title="Select Players"
        showBack={true}
        backTo="/"
      />
    <PickPlayersHeader
  title="Select Players"
  teamA={{ short: "MS", logo: players[0]?.team_logo }}
  teamB={{ short: "PS", logo: players[1]?.team_logo }}
  selectedCount={selectedPlayers.length}
  creditLeft={100 - totalCredits}
/>


      <div className="p-4">
        <RoleTabs active={role} setActive={setRole} />

        <p className="text-center text-gray-500 mt-3">
          Select {LIMITS[role].min} - {LIMITS[role].max} {role}
        </p>

        <div className="mt-4">
          {filtered.map((p) => (
            <PlayerCard
              key={p.player_id}
              p={p}
              selected={selectedPlayers.some((x) => x.player_id === p.player_id)}
              toggle={() => toggle(p)}
            />
          ))}
        </div>
      </div>

      <PickPlayersFooter
  onPreview={() => {}}
  onNext={() => nav(`/match/${id}/captain`)}

/>

    </div>
  )
}
