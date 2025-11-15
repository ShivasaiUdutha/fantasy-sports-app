import { useState } from 'react'
import HeaderTop from '../components/HeaderTop'
import SportsIcons from '../components/SportsIcons'
import PromoBanner from '../components/PromoBanner'
import MatchTypeTabs from '../components/MatchTypeTabs'
import AllJoinedTabs from '../components/AllJoinedTabs'
import MatchCard from '../components/MatchCard'
import { allMatches } from '../data/allMatches'
import { useNavigate } from 'react-router-dom'

export default function UpcomingMatches() {
  const [sport, setSport] = useState('cricket')
  const [type, setType] = useState('Matches')
  const [filter, setFilter] = useState('All')
  const nav = useNavigate()

  const matches = allMatches[sport] || []

  return (
    <div className="pb-10 bg-gray-100 min-h-screen">
      <HeaderTop />

      <SportsIcons active={sport} setActive={setSport} />

      <PromoBanner />

      <MatchTypeTabs active={type} setActive={setType} />

      <AllJoinedTabs active={filter} setActive={setFilter} />

      <div className="mt-4">
        {matches.map((m) => (
          <MatchCard
            key={m.id}
            m={m}
            onClick={() => nav(`/match/${m.id}/pick-players`)}
          />
        ))}
      </div>
    </div>
  )
}
