export default function AllJoinedTabs({ active, setActive }) {
  return (
    <div className="flex gap-3 px-4 mt-4">
      <button
        className={`px-4 py-2 rounded-full ${
          active === 'All' ? 'bg-pink-600 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setActive('All')}
      >
        All
      </button>

      <button
        className={`px-4 py-2 rounded-full ${
          active === 'Joined' ? 'bg-pink-600 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setActive('Joined')}
      >
        Joined
      </button>
    </div>
  )
}
