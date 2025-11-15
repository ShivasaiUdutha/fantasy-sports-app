export default function TeamCard({ team, index }) {
  return (
    <div className="bg-white p-4 rounded-lg border mb-3">
      <p className="font-bold">Team {index + 1}</p>
      <p className="text-sm text-gray-500">C: {team.captain.player_name}</p>
      <p className="text-sm text-gray-500">VC: {team.viceCaptain.player_name}</p>
    </div>
  )
}
