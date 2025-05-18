import React, { useEffect } from "react";
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

// Hook to load Google AdSense script once and push ads
function useAdsense() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense script load error:", e);
        }
      };
    } else {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense push error:", e);
      }
    }
  }, []);
}

export function MythicalPage() {
  useAdsense();

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-800 min-h-screen max-w-7xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">Mythical Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-gray-900 p-4 rounded-lg shadow-lg relative flex flex-col"
          >
            {/* Status Indicator */}
            <span className="absolute top-2 right-2 text-green-500 text-xs font-bold">
              🟢 {item.status}
            </span>

            {/* Item Icon */}
            <div className="flex justify-center mt-2">
              <img
                src={item.icon}
                alt={item.name}
                className="h-16 w-16 sm:h-20 sm:w-20 mx-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Item Name */}
            <h2 className="text-lg sm:text-xl font-bold text-white mt-4 text-center">
              {item.name}
            </h2>

            {/* Value & Demand */}
            <p className="text-gray-400 text-base sm:text-lg text-center">
              Value: {item.value.toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm sm:text-base text-center">
              Demand: {item.demand}
            </p>

            {/* Dropdown for Value Type */}
            <select
              className="mt-3 w-full bg-gray-800 text-white text-sm sm:text-base p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Select value type"
            >
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>

            {/* Favorite Button */}
            <button
              className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400 p-2"
              aria-label={`Favorite ${item.name}`}
            >
              <FaStar className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Google AdSense Ad Block */}
      <div className="my-6 flex justify-center">
        <ins
          className="adsbygoogle block w-full"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-ad-client="ca-pub-4679619533362780"
          data-ad-slot="2037186537"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        ></script>
      </div>
    </div>
  );
}

export default MythicalPage;