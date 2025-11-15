import { Routes, Route } from 'react-router-dom'
import UpcomingMatches from './pages/UpcomingMatches'
import MyTeams from './pages/MyTeams'
import PickPlayers from './pages/PickPlayers'
import CaptainSelection from './pages/CaptainSelection'
import PickCaptain from './pages/PickCaptain'
import Contest from './pages/Contest'
// import MyTeams from "./pages/MyTeams"
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/my-teams" element={<MyTeams />} />
      <Route path="/match/:id/contest" element={<Contest />} />
      <Route path="/match/:id/captain" element={<PickCaptain />} />
      <Route path="/" element={<UpcomingMatches />} />
      <Route path="/match/:id/teams" element={<MyTeams />} />
      <Route path="/match/:id/pick-players" element={<PickPlayers />} />
      <Route path="/match/:id/captain" element={<CaptainSelection />} />
    </Routes>
  )
}
