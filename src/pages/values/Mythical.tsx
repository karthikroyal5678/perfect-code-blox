import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const items = [
  {
    name: "Gravity",
    category: "Mythical",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FGravity_Icon.webp&w=256&q=75",
    value: 2000000,
    demand: "1/10",
  },
  {
    name: "Shadow",
    category: "Mythical",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FShadow_Icon.webp&w=256&q=75",
    value: 6500000,
    demand: "6/10",
  },
  {
    name: "Venom",
    category: "Mythical",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FVenom_Icon.webp&w=256&q=75",
    value: 8000000,
    demand: "7/10",
  },
  {
    name: "East Dragon",
    category: "Mythical",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FEast%20Dragon_Icon.webp&w=256&q=75",
    value: 860000000,
    demand: "10/10",
  },
  {
    name: "West Dragon",
    category: "Mythical",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FWest%20Dragon_Icon.webp&w=256&q=75",
    value: 1000000000,
    demand: "10/10",
  },
];

function useAdsense() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    }
  }, []);
}

export function MythicalPage() {
  useAdsense();

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center">
      <div className="container px-4 py-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Mythical Items</h1>

        {/* Grid container for items */}
        <div className="flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-xs transition-transform transform hover:scale-105 focus:scale-105"
              tabIndex={0}
            >
              {/* Status Indicator */}
              <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full select-none">
                {item.status}
              </span>

              {/* Item Icon */}
              <img
                src={item.icon}
                alt={item.name}
                className="h-24 w-24 object-contain mb-4"
              />

              {/* Item Name */}
              <h2 className="text-xl font-bold mb-2 text-center">{item.name}</h2>

              {/* Value & Demand */}
              <p className="text-gray-400 text-lg mb-1 text-center">
                Value: {item.value.toLocaleString()}
              </p>
              <p className="text-gray-400 mb-4 text-center">
                Demand: {item.demand}
              </p>

              {/* Dropdown for Value Type */}
              <select className="w-full bg-gray-800 text-white p-2 rounded mb-4">
                <option>Physical Value</option>
                <option>Trade Value</option>
              </select>

              {/* Favorite Button */}
              <button
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label={`Favorite ${item.name}`}
              >
                <FaStar size={24} />
              </button>
            </div>
          ))}
        </div>

        {/* Google AdSense Block */}
        <div className="my-8 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "320px", height: "100px" }}
            data-ad-client="ca-pub-4679619533362780"
            data-ad-slot="3961900505"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
      </div>
    </div>
  );
}

export default MythicalPage;
