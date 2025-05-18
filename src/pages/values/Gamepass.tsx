import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const items = [
  {
    name: "Fast Boats",
    category: "UnCommon",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFast%20Boats_Icon.webp&w=256&q=75",
    value: 1000000,
    demand: "1/10",
  },
  {
    name: "2x Boss Drops",
    category: "Underpaid",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Boss%20Drops_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "1/10",
  },
  {
    name: "2x Money",
    category: "UnCommon",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Money_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "1/10",
  },
  {
    name: "2x Mastery",
    category: "Underpaid",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F2x%20Mastery_Icon.webp&w=256&q=75",
    value: 2000000,
    demand: "1/10",
  },
  {
    name: "+1 Fruit Storage",
    category: "Overpaid",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2F%2B1%20Fruit%20Storage_Icon.webp&w=256&q=75",
    value: 2500000,
    demand: "4/10",
  },
  {
    name: "Legendary Scrolls",
    category: "UnCommon",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FLegendary%20Scrolls_Icon.webp&w=256&q=75",
    value: 2750000,
    demand: "4/10",
  },
  {
    name: "Dark Blade",
    category: "Underpaid",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FDark%20Blade_Icon.webp&w=256&q=75",
    value: 5000000,
    demand: "6/10",
  },
  {
    name: "Mythical Scrolls",
    category: "UnCommon",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FRumble_Icon.webp&w=256&q=75",
    value: 7000000,
    demand: "7/10",
  },
  {
    name: "Fruit Notifier",
    category: "Underpaid",
    status: "Stable",
    iconUrl:
      "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Fgamepasses%2FFruit%20Notifier_Icon.webp&w=256&q=75",
    value: 11000000,
    demand: "10/10",
  },
];

export function GamepassPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    script.onload = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-gray-950 text-white py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center">Gamepass</h1>

      {/* AdSense Block */}
      <div className="mb-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "90px", maxWidth: "728px" }}
          data-ad-client="ca-pub-4679619533362780"
          data-ad-slot="3961900505"
          data-ad-format="auto"
        ></ins>
      </div>

      {/* Gamepass Cards */}
      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full max-w-7xl">
        {items.map((item) => (
          <article
            key={item.name}
            tabIndex={0}
            aria-label={`${item.name} gamepass card`}
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 focus:scale-105 flex flex-col items-center"
          >
            {/* Status Indicator */}
            <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full select-none">
              {item.status}
            </span>

            {/* Item Icon */}
            <img
              src={item.iconUrl}
              alt={item.name}
              className="h-32 w-32 object-contain mb-4"
              loading="lazy"
            />

            {/* Item Details */}
            <h2 className="text-xl font-bold mb-2 text-center">{item.name}</h2>
            <p className="text-gray-300 text-lg mb-1">
              Value: {item.value.toLocaleString()}
            </p>
            <p className="text-gray-400 mb-4">Demand: {item.demand}</p>

            {/* Value Type Dropdown */}
            <select
              aria-label={`Select value type for ${item.name}`}
              className="w-full bg-gray-700 text-white p-2 rounded mb-4"
            >
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>

            {/* Favorite Button */}
            <button
              aria-label={`Mark ${item.name} as favorite`}
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <FaStar size={24} />
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default GamepassPage;
