export default function PickPlayersFooter({ onPreview, onNext }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-xl">
      <div className="flex justify-between">
        <button className="px-6 py-3 border border-pink-600 text-pink-600 rounded-xl">
          Team Preview
        </button>

        <button
          onClick={onNext}
          className="px-6 py-3 bg-pink-600 text-white rounded-xl"
        >
          Next
        </button>
      </div>

      <p className="text-center text-xs text-gray-500 mt-2">
        Registration closed in : 02h 11m Left
      </p>
    </div>
  )
}
