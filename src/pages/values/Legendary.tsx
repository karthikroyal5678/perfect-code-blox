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
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4679619533362780";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
    setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    }, 1000);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-900 py-6 px-4">
      <h1 className="text-3xl font-bold text-white mb-6 w-full text-center">Legendary Fruits</h1>
      {items.map((item) => (
        <div key={item.name} className="bg-gray-800 p-4 rounded-lg shadow-lg m-4 w-80 relative">
          <span className="absolute top-2 right-2 text-green-500 text-xs font-bold">
            🟢 {item.status}
          </span>
          <img src={item.icon} alt={item.name} className="h-24 w-24 mx-auto" />
          <h2 className="text-xl font-bold text-white mt-4 text-center">{item.name}</h2>
          <p className="text-gray-400 text-xl text-center">Value: {item.value.toLocaleString()}</p>
          <p className="text-gray-400 text-center">Demand: {item.demand}</p>
          <select className="mt-2 w-full bg-gray-700 text-white p-2 rounded">
            <option>Physical Value</option>
            <option>Trade Value</option>
          </select>
          <button className="absolute bottom-2 right-2 text-gray-400 hover:text-yellow-400">
            <FaStar />
          </button>
        </div>
      ))}
    </div>
  );
}
