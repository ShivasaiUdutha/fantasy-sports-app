import b1 from "../assets/banner1.jpg"
import b2 from "../assets/banner2.jpg"
import b3 from "../assets/banner3.jpg"

export default function PromoBanner() {
  const banners = [b1, b2, b3]

  return (
    <div className="w-full mt-3 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 px-4">
        {banners.map((b, i) => (
          <img
            key={i}
            src={b}
            className="w-[90%] h-32 object-cover rounded-xl flex-shrink-0 md:w-[32.5%]"
          />
        ))}
      </div>
    </div>
  )
}
