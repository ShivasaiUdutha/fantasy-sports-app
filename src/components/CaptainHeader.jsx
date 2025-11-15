export default function CaptainHeader({ teamA, teamB }) {
  return (
    <div className="bg-indigo-900 text-white p-4 rounded-b-3xl">
      <p className="text-center text-lg font-semibold">Select Captain & Vice-Captain</p>

      <div className="flex items-center justify-between mt-3">
        <div className="flex flex-col items-center">
          <img src={teamA.logo} className="w-12 h-12" />
          <p className="mt-1 font-semibold">{teamA.short}</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={teamB.logo} className="w-12 h-12" />
          <p className="mt-1 font-semibold">{teamB.short}</p>
        </div>
      </div>
    </div>
  )
}
