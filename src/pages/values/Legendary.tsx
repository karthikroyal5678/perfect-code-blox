import { FaStar } from "react-icons/fa";
import { useEffect } from "react";

const items = [
  {
    name: "Quake",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FQuake_Icon.webp&w=256&q=75",
    value: 1000000,
    demand: "1/10",
  },
  {
    name: "Love",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FLove_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "1/10",
  },
  {
    name: "Spider",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FSpider_Icon.webp&w=256&q=75",
    value: 1500000,
    demand: "1/10",
  },
  {
    name: "Pain",
    category: "Legendary",
    status: "Underpaid",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FPain_Icon.webp&w=256&q=75",
    value: 2000000,
    demand: "1/10",
  },
  {
    name: "Sound",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FSound_Icon.webp&w=256&q=75",
    value: 2500000,
    demand: "4/10",
  },
  {
    name: "Phoenix",
    category: "UnCommon",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FPhoenix_Icon.webp&w=256&q=75",
    value: 2750000,
    demand: "4/10",
  },
  {
    name: "Blizzard",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FBlizzard_Icon.webp&w=256&q=75",
    value: 5000000,
    demand: "6/10",
  },
  {
    name: "Rumble",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FRumble_Icon.webp&w=256&q=75",
    value: 7000000,
    demand: "7/10",
  },
  {
    name: "Buddha",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FBuddha_Icon.webp&w=256&q=75",
    value: 11000000,
    demand: "10/10",
  },
  {
    name: "Portal",
    category: "Legendary",
    status: "Stable",
    icon: "https://bloxfruitsvalues.com/_next/image?url=%2Fassets%2Ffruits%2FLegendary%2FPortal_Icon.webp&w=256&q=75",
    value: 11000000,
    demand: "10/10",
  },
];

export function LegendaryPage() {
  useEffect(() => {
    // Ensure the AdSense script is loaded once
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.setAttribute("data-ad-client", "ca-pub-4679619533362780");
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    // Trigger ad refresh
    setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-white mb-6">Legendary Fruits</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.name} className="bg-gray-900 p-4 rounded-lg shadow-lg relative">
            {/* Status Indicator */}
            <span
              className={`absolute top-2 right-2 text-xs font-bold ${
                item.status === "Underpaid" ? "text-red-500" : "text-green-500"
              }`}
            >
              {item.status === "Stable" ? "🟢" : "⚠️"} {item.status}
            </span>

            {/* Item Icon */}
            <div className="flex justify-center mt-2">
              <img src={item.icon} alt={item.name} className="h-24 w-24 mx-auto" />
            </div>

            {/* Item Name */}
            <h2 className="text-xl font-bold text-white mt-4">{item.name}</h2>

            {/* Value & Demand */}
            <p className="text-gray-400 text-xl">Value: {item.value.toLocaleString()}</p>
            <p className="text-gray-400">Demand: {item.demand}</p>

            {/* Dropdown for Value Type */}
            <select className="mt-2 w-full bg-gray-800 text-white p-2 rounded">
              <option>Physical Value</option>
              <option>Trade Value</option>
            </select>

            {/* Favorite Button */}
            <button className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400">
              <FaStar />
            </button>
          </div>
        ))}
      </div>

      {/* Google Ad */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", marginTop: "20px" }}
        data-ad-client="ca-pub-4679619533362780"
        data-ad-slot="1234567890"
        data-ad-format="auto"
      ></ins>
    </div>
  );
}
