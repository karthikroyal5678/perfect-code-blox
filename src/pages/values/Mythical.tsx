import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const items = [
  {
    name: "Gravity",
    category: "Mythical",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FGravity_Icon.webp&w=256&q=75"
        alt="Gravity"
        className="h-24 w-24 mx-auto"
      />
    ),
    value: 2000000,
    demand: "1/10",
  },
  {
    name: "Shadow",
    category: "Mythical",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FShadow_Icon.webp&w=256&q=75"
        alt="Shadow"
        className="h-24 w-24 mx-auto"
      />
    ),
    value: 6500000,
    demand: "6/10",
  },
  {
    name: "Venom",
    category: "Mythical",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FVenom_Icon.webp&w=256&q=75"
        alt="Venom"
        className="h-24 w-24 mx-auto"
      />
    ),
    value: 8000000,
    demand: "7/10",
  },
  {
    name: "East Dragon",
    category: "Mythical",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FEast%20Dragon_Icon.webp&w=256&q=75"
        alt="East Dragon"
        className="h-24 w-24 mx-auto"
      />
    ),
    value: 860000000,
    demand: "10/10",
  },
  {
    name: "West Dragon",
    category: "Mythical",
    status: "Stable",
    icon: (
      <img
        src="https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FMythical%2FWest%20Dragon_Icon.webp&w=256&q=75"
        alt="West Dragon"
        className="h-24 w-24 mx-auto"
      />
    ),
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
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Mythical Items</h1>

        {/* Grid container for items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-gray-900 p-4 rounded-lg shadow-lg relative transition-transform transform hover:scale-105 focus:scale-105"
              tabIndex={0}
            >
              {/* Status Indicator */}
              <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full select-none">
                {item.status}
              </span>

              {/* Item Icon */}
              <div className="flex justify-center mt-2">{item.icon}</div>

              {/* Item Name */}
              <h2 className="text-xl font-bold mt-4">{item.name}</h2>

              {/* Value & Demand */}
              <p className="text-gray-400 text-lg mt-1">
                Value: {item.value.toLocaleString()}
              </p>
              <p className="text-gray-400 mb-2">Demand: {item.demand}</p>

              {/* Dropdown for Value Type */}
              <select className="w-full bg-gray-800 text-white p-2 rounded mb-4">
                <option>Physical Value</option>
                <option>Trade Value</option>
              </select>

              {/* Favorite Button */}
              <button
                className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label={`Favorite ${item.name}`}
              >
                <FaStar size={20} />
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
