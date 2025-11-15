export default function BottomBar({ left, right, leftAction, rightAction }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between shadow-xl">
      <button className="px-4 py-2 bg-gray-200 rounded" onClick={leftAction}>{left}</button>
      <button className="px-4 py-2 bg-pink-600 text-white rounded" onClick={rightAction}>{right}</button>
    </div>
  )
}
